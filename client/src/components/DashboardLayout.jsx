import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../style/dashboard.css";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="dashboard-main">

        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="dashboard-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}