import React from "react";
import { FaCrown, FaEye, FaCog } from "react-icons/fa"; // Import icons from react-icons
import Header from "../component/Header/Header";
import { useNavigate } from "react-router-dom";
import "../component/styles/Lobby.css";

const Lobby = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    
    const handleLeave = () => {
        console.log("Leave button clicked");
        navigate("/")
    };

  return (
    <div className="lobby-container">
      <Header
        title="Idiot Card Game"
        roomCode="(room code here)"
        onLeave={handleLeave}
      />
      <div className="lobby-main">
        <div className="players-section">
          <div className="players-list">
            {/*Player 1*/}
            <div className="player">
              <span className="player-name">Rainier</span>
              <div className="player-icons">
                <FaCrown className="icon crown" />
                <FaEye className="icon eye" />
                <FaCog className="icon cog" />
              </div>
              <span className="ready-text">Ready?</span>
            </div>
            {/*Player 2*/}
            <div className="player">
              <span className="player-name">Pat</span>
              <div className="player-icons">
                <FaCrown className="icon crown" />
                <FaEye className="icon eye" />
                <FaCog className="icon cog" />
              </div>
              <span className="ready-text">Ready?</span>
            </div>
            {/*Player 3*/}
            <div className="player">
              <span className="player-name">Shay</span>
              <div className="player-icons">
                <FaCrown className="icon crown" />
                <FaEye className="icon eye" />
                <FaCog className="icon cog" />
              </div>
              <span className="ready-text">Ready?</span>
            </div>
            {/*Player 4*/}
            <div className="player">
              <span className="player-name">Brandon</span>
              <div className="player-icons">
                <FaCrown className="icon crown" />
                <FaEye className="icon eye" />
                <FaCog className="icon cog" />
              </div>
              <span className="ready-text">Ready?</span>
            </div>
          </div>
          <div className="spectators-section">
            <h3 className="spectators-title">Spectators</h3>
            <div className="spectators-list">
              <div className="spectator">Joe</div>
              <div className="spectator">Matt</div>
              <div className="spectator">Vincent</div>
            </div>
          </div>
        </div>
        <div className="controls-section">
          <div className="host-info">
            <span>Host</span>
            <div className="host-name">Rainier</div>
          </div>
          <div className="timer-control">
            <span>Turn Timer</span>
            <div className="timer-buttons">
                <button>&lt;</button>
                <div className="timer-display">30 Seconds</div>
                <button>&gt;</button>
            </div>
            </div>
          <button className="how-to-play">How to Play</button>
          <div className="lobby-buttons">
            <button className="leave-button" onClick={handleLeave}>
              Leave
            </button>
            <button className="start-button">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
