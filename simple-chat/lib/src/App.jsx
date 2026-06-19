import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Conversation from "./pages/Conversation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/conversation/:conversationId" element={<Conversation />} />
    </Routes>
  );
}

export default App;
