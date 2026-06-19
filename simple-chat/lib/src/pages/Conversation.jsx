import { useEffect, useMemo, useState } from "react";
import "../styles/Conversation.css";
import chatimg from "../assets/chatimg.jpg";
import user400 from "../assets/user400.jpg";

import Button from "../components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { apiRequest, getStoredUser } from "../api";

function Conversation() {
  const navigate = useNavigate();
  const { conversationId } = useParams();
  const currentUser = useMemo(() => getStoredUser(), []);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
      return;
    }

    Promise.all([
      apiRequest(`/conversations/${conversationId}`),
      apiRequest(`/messages/${conversationId}`),
    ])
      .then(([conversationData, messageData]) => {
        setConversation(conversationData);
        setMessages(messageData);
      })
      .catch((requestError) => setError(requestError.message));
  }, [conversationId, currentUser, navigate]);

  const otherMember = conversation?.members[0];

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!text.trim()) return;

    try {
      const message = await apiRequest(`/messages/${conversationId}`, {
        method: "POST",
        body: JSON.stringify({ text }),
      });
      setMessages((current) => [...current, message]);
      setText("");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <div
      className="conversation-page"
      style={{
        backgroundImage: `url(${chatimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="conversation-header">
        <Button
          text="<"
          className="back-btn"
          onClick={() => navigate("/chat")}
        />

        <img src={otherMember?.avatar || user400} alt="" />

        <h3>{otherMember?.username || "Conversation"}</h3>
      </div>

      <div className="messages">
        {messages.map((message) => (
          <div
            className={`message ${
              message.sender?._id === currentUser?.id ? "right" : "left"
            }`}
            key={message._id}
          >
            {message.text}
          </div>
        ))}

        {!messages.length && !error && (
          <p className="conversation-status">No messages yet.</p>
        )}

        {error && <p className="conversation-status">{error}</p>}
      </div>

      <form className="input-box" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <Button text="Send" className="send-btn" type="submit" />
      </form>
    </div>
  );
}

export default Conversation;
