import { useEffect, useState } from "react";
import "../style/setting.css";
import { toast } from "react-toastify";
export default function Settings() {

    const [user, setUser] = useState({

        name: "",

        email: ""

    });

    const [passwords, setPasswords] = useState({

    currentPassword: "",

    newPassword: "",

    confirmPassword: ""

});

    useEffect(() => {

        fetchProfile();

    }, []);

    async function fetchProfile() {

        const response = await fetch(

            `${import.meta.env.VITE_API_URL}/api/users/profile`,

            {

                headers: {

                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`

                }

            }

        );

        const data = await response.json();

        setUser(data.user);

    }

    async function handleSubmit(e) {

        e.preventDefault();

        const response = await fetch(

            `${import.meta.env.VITE_API_URL}/api/users/profile`,

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json",

                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`

                },

                body: JSON.stringify(user)

            }

        );

        const data = await response.json();

        toast.error(data.message);

    }

    async function handlePasswordUpdate(e){

    e.preventDefault();

    const response = await fetch(

        `${import.meta.env.VITE_API_URL}/api/users/change-password`,

        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json",

                Authorization:`Bearer ${localStorage.getItem("token")}`

            },

            body:JSON.stringify(passwords)

        }

    );

    const data = await response.json();

    toast.error(data.message);

    if(data.success){

        setPasswords({

            currentPassword:"",

            newPassword:"",

            confirmPassword:""

        });

    }

}
    return (

<div className="settings-page">

        <form
            className="settings-form"
            onSubmit={handleSubmit}
        >

        <div className="profile-preview">

<img
src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
alt="profile"
/>

<h2>Profile Settings</h2>

</div>
<div className="form-group">

    <label>Full Name</label>
            <input

                type="text"

                value={user.name}

                onChange={(e)=>

                    setUser({

                        ...user,

                        name:e.target.value

                    })

                }

            />
</div>
<div className="form-group">

    <label>Email Address</label>

            <input

                type="email"

                value={user.email}

                onChange={(e)=>

                    setUser({

                        ...user,

                        email:e.target.value

                    })

                }

            />

            </div>

            <button
                className="primary-btn"
            >

                Save Changes

            </button>

        </form>

        <form

className="settings-form"

onSubmit={handlePasswordUpdate}

>

<h2>🔒 Change Password</h2>
<div className="form-group">

    <label>Current Password</label>
<input

type="password"

placeholder="Current Password"

value={passwords.currentPassword}

onChange={(e)=>

setPasswords({

...passwords,

currentPassword:e.target.value

})

}

/>
</div>

<div className="form-group">

    <label>New Password</label>
<input

type="password"

placeholder="New Password"

value={passwords.newPassword}

onChange={(e)=>

setPasswords({

    ...passwords,
    
    newPassword:e.target.value
    
})

}

/>
</div>

<div className="form-group">

    <label>Confirm New Password</label>

<input

type="password"

placeholder="Confirm Password"

value={passwords.confirmPassword}

onChange={(e)=>

setPasswords({

...passwords,

confirmPassword:e.target.value

})

}

/>
</div>

<button className="primary-btn">

Update Password

</button>

</form>
</div>

    );

}