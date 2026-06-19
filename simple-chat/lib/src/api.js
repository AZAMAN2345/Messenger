const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getStoredUser = () => {
  const raw = localStorage.getItem("chat_user");
  return raw ? JSON.parse(raw) : null;
};

export const setSession = ({ token, user }) => {
  localStorage.setItem("chat_token", token);
  localStorage.setItem("chat_user", JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem("chat_token");
  localStorage.removeItem("chat_user");
};

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("chat_token");
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}
