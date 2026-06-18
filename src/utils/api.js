export const API = "http://localhost:3000";

export const getToken = () => localStorage.getItem("admin_token");

export const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { ...authHeaders(), ...options.headers },
  });
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return res.json();
}