import React from 'react';
import { FaStar, FaPlus, FaQuestion, FaLightbulb, FaBell, FaUser } from 'react-icons/fa';
import './headerIcons.css'; // You can create a CSS file for styling

const HeaderIcons = () => {
  return (
    <div className="icon-container">
      <div className="icon-dropdown">
        <FaStar className="star-icon" />
        <select className="dropdown">
          <option></option>
          <option>Option 2</option>
          {/* Add more options */}
        </select>
      </div>
      <div className="icon-box">
        <FaPlus className="plus-icon" />
      </div>
      <div className="icon-box">
        <FaQuestion className="question-icon" />
      </div>
      <div className="icon-box">
        <FaLightbulb className="light-mode-icon" />
      </div>
      <div className="icon-box">
        <FaBell className="notifications-icon" />
      </div>
      <div className="icon-boxe">
        <FaUser className="profile-icon" />
      </div>
    </div>
  );
};

export default HeaderIcons;
