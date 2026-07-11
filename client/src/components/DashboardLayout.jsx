import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../style/dashboard.css";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">
      {sidebarOpen && (
    <div
      className="sidebar-overlay"
      onClick={() => setSidebarOpen(false)}
    />
  )}

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
    sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}
/>


        <div className="dashboard-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}