import "../styles/Chat.css";

import user400 from "../assets/user400.jpg";
import user500 from "../assets/user500.jpg";
import user600 from "../assets/user600.jpg";

import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiCamera } from "react-icons/fi";

import {
  IoAdd,
  IoCallOutline,
  IoChatbubbleOutline,
  IoPersonOutline,
} from "react-icons/io5";

function Chat() {
  const navigate = useNavigate();

  return (
    <div className="chat-page">
      <div className="top-bar">
        <Button
          icon={<HiOutlineDotsHorizontal />}
          className="icon-btn"
        />

        <div className="top-right">


          <Button
            icon={<IoAdd />}
            className="icon-btn add-btn"
          />
        </div>
      </div>

      <h1>Chats</h1>

      <input
        className="search-box"
        placeholder="Search..."
      />

      <div
        className="contact"
        onClick={() => navigate("/conversation")}
      >
        <img src={user400} alt="" />

        <div>
          <h3>John Davidson</h3>
          <p>Hey! How have you been?</p>
        </div>
      </div>

      <div
        className="contact"
        onClick={() => navigate("/conversation")}
      >
        <img src={user500} alt="" />

        <div>
          <h3>Frank Jackson</h3>
          <p>Let's move the meeting.</p>
        </div>
      </div>

      <div
        className="contact"
        onClick={() => navigate("/conversation")}
      >
        <img src={user600} alt="" />

        <div>
          <h3>Melissa Naude</h3>
          <p>You keen for coffee?</p>
        </div>
      </div>

      <div className="bottom-nav">

        <Button
          icon={<IoCallOutline />}
          text="Calls"
          className="nav-btn"
        />

        <Button
          icon={<IoChatbubbleOutline />}
          text="Chats"
          className="nav-btn"
        />

        <Button
          icon={<IoPersonOutline />}
          text="You"
          className="nav-btn"
        />
      </div>
    </div>
  );
}

export default Chat;