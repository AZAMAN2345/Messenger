import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Button from "../components/Button";
import { apiRequest, setSession } from "../api";

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    username: "",
    emailOrUsername: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateForm = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload =
        mode === "login"
          ? {
              emailOrUsername: form.emailOrUsername,
              password: form.password,
            }
          : {
              username: form.username,
              email: form.email,
              password: form.password,
            };

      const data = await apiRequest(`/auth/${mode === "login" ? "login" : "register"}`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setSession(data);
      navigate("/chat");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>LOGIN</h1>

        <form>
          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="remember">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <button className="button" onClick={onSubmit}>
            Sign In
          </button>

          <p className="forgot">
            Forgot your password?
          </p>

          <p className="link">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;