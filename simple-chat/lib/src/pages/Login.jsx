import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="login-container">
      <form className="login-card" onSubmit={onSubmit}>
        <h1>Simple Chat</h1>

        {mode === "register" && (
          <>
            <input
              name="username"
              value={form.username}
              onChange={updateForm}
              placeholder="Username"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateForm}
              placeholder="Email"
              required
            />
          </>
        )}

        {mode === "login" && (
          <input
            name="emailOrUsername"
            value={form.emailOrUsername}
            onChange={updateForm}
            placeholder="Email or username"
            required
          />
        )}

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={updateForm}
          placeholder="Password"
          required
        />

        {error && <p className="form-error">{error}</p>}

        <Button
          text={loading ? "Please wait..." : mode === "login" ? "Login" : "Create account"}
          type="submit"
          disabled={loading}
        />

        <button
          className="switch-auth"
          type="button"
          onClick={() => {
            setError("");
            setMode(mode === "login" ? "register" : "login");
          }}
        >
          {mode === "login" ? "Create a new account" : "Use an existing account"}
        </button>
      </form>
    </div>
  );
}

export default Login;
