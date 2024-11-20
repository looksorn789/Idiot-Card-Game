import React, { useState } from "react";
import "../component/styles/LandingPage.css";
import Header from "../component/Header/Header";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const navigate = useNavigate();

  const handleCreateLobby = () => {
    navigate("/lobby"); // Navigate to the /lobby route
  };

  const handleJoinLobby = () => {
    navigate("/lobby"); // Navigate to the /lobby route
  };
  return (
    <div className="landing-page">
      <Header 
      title="Idiot Card Game"/>
      <div className="center-box">
        <div className="tab-header">
          <button
            className={`tab-button ${activeTab === "create" ? "active" : ""}`}
            onClick={() => setActiveTab("create")}
          >
            Create Room
          </button>
          <button
            className={`tab-button ${activeTab === "join" ? "active" : ""}`}
            onClick={() => setActiveTab("join")}
          >
            Join Room
          </button>
        </div>
        {activeTab === "create" && (
          <div className="content">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter room name" />
            <button onClick={handleJoinLobby} className="start-join-button">Create</button>
          </div>
        )}
        {activeTab === "join" && (
          <div className="content">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter room ID" />
            <button onClick={handleJoinLobby} className="start-join-button">Join</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
