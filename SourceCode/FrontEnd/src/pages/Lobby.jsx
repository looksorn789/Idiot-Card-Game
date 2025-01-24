import React from "react";
import { FaCrown, FaEye, FaCog } from "react-icons/fa";
import Header from "../component/Header/Header";
import { useNavigate } from "react-router-dom";
import "../component/styles/Lobby.css";
import dummyPlayerData from "./LobbyData";
import ShareModal from "./HowToPlay";

const Lobby = () => { 
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleLeave = () => {
        console.log("Leave button clicked");
        navigate("/")
    };

    const handleShareClick = (e) => {
      e.stopPropagation();
      setIsShareModalOpen(true);
    };
  
    const closeShareModal = () => {
      setIsShareModalOpen(false);
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
            {dummyPlayerData.players.map((player, index) => ( //parsing in dummy data until backend is finshed
                <div key={index} className="player">
                  <span className="player-name">{player.name}</span>
                  <div className="player-icons">
                    {player.icons.crown && <FaCrown className="icon crown" />}
                    {player.icons.eye && <FaEye className="icon eye" />}
                    {player.icons.cog && <FaCog className="icon cog" />}
                  </div>
                  <span className="ready-text">{player.isReady ? "Ready" : "Not Ready"}</span>
                </div>
              ))}
            </div>
            <div className="spectators-section">
              <h3 className="spectators-title">Spectators</h3>
              <div className="spectators-list">
                {dummyPlayerData.spectators.map((spectator, index) => (
                  <div key={index} className="spectator">
                    <span className="spectator-name">{spectator.name}</span>
                    <div className="spectator-icons">
                      {spectator.icons.eye && <FaEye className="icon eye" />}
                    </div>
                  </div>
                ))}
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
