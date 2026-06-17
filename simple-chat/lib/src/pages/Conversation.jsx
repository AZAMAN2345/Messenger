import "../styles/Conversation.css";
import chatimg from "../assets/chatimg.jpg"
import user400 from "../assets/user400.jpg";

import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

function Conversation() {
  const navigate = useNavigate();

  return (
    <div className="conversation-page" style={{backgroundImage: `url(${chatimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
      <div className="conversation-header">
        <Button
          text="←"
          className="back-btn"
          onClick={() => navigate("/chat")}
        />

        <img
          src={user400}
          alt=""
        />

        <h3>John Davidson</h3>
      </div>

      <div className="messages">
        <div className="message right">
          You think we can meet tomorrow for coffee?
        </div>

        <div className="message left">
          Hopefully 😊
        </div>

        <div className="message left">
          Been working super late this week.
        </div>

        <div className="message right">
          No worries mate, I understand.
        </div>
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Type something..."
        />

        <Button
          text="Send"
          className="send-btn"
        />
      </div>
    </div>
  );
}

export default Conversation;