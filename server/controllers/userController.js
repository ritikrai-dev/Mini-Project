import Transaction from "../models/Transaction.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getProfile = async (req, res) => {

    try {

        return res.status(200).json({

            success: true,

            user: {

                name: req.user.name,

                email: req.user.email,

            }

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

export const updateProfile = async (req, res) => {

    try {

        const user = req.user;

        user.name = req.body.name || user.name;

        user.email = req.body.email || user.email;

        await user.save();

        return res.status(200).json({

            success: true,

            message: "Profile updated successfully",

            user

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

export const changePassword = async (req, res) => {

    try {

        const {

            currentPassword,

            newPassword,

            confirmPassword

        } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword) {

            return res.status(400).json({

                success: false,

                message: "All fields are required."

            });

        }

        if (newPassword !== confirmPassword) {

            return res.status(400).json({

                success: false,

                message: "Passwords do not match."

            });

        }

        const user = await User.findById(req.user._id);

        const isMatch = await bcrypt.compare(

            currentPassword,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: "Current password is incorrect."

            });

        }

        user.password = await bcrypt.hash(newPassword, 10);

        await user.save();

        return res.status(200).json({

            success: true,

            message: "Password updated successfully."

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};