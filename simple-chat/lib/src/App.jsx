import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Conversation from "./pages/Conversation";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/conversation/:conversationId" element={<Conversation />} />

      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default App;
