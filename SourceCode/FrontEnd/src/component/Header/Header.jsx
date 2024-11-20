import React from "react";
import "./Header.css";

const Header = ({ title, roomCode, onLeave }) => {
  return (
    <header className="header">
      <p className="header-title">{title}</p>
      {roomCode && (
        <div className="room-info">
          <span>Room Code: {roomCode}</span>
          <button className="leave-button" onClick={onLeave}>
            Leave
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
