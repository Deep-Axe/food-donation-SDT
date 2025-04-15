import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css"; // You'll need to create this CSS file

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  // Update active state based on current path
  useEffect(() => {
    const path = location.pathname.substring(1);
    setActive(path || "home");
  }, [location]);

  // Navigation items
  const sideItems = [
    { path: "/home", text: "Home", logo: "🏠" },
    { path: "/donate", text: "Donate Food", logo: "🍎" },
    { path: "/requests", text: "Food Requests", logo: "📋" },
    { path: "/history", text: "Donation History", logo: "📜" },
    { path: "/profile", text: "Profile", logo: "👤" }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__title">Food Donation</h2>
      </div>
      
      <div className="sidebar__body">
        {sideItems.map((item) => (
          <div
            key={item.path}
            className={`sidebar__item ${active === item.path.substring(1) ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <div className="sidebar__item__icon">{item.logo}</div>
            <div className="sidebar__item__text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;