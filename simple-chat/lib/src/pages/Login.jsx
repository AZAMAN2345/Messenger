import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/chat");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Simple Chat</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <Button 
        text="Login"
        onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;