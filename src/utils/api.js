export const API = "https://api.heikaro.com";

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

// ✅ زود السطرين دول بس
export const CONTENT_SLIDES_API = `${API}/contentSlides`;

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API}/upload`, {
    method: 'POST',
    headers: authHeaders(), // ✅ تمام كده — مفيش Content-Type فيها أصلاً
    body: formData,
  });

  const data = await res.json();
  if (!data.url) throw new Error('Upload failed');
  return data.url;
};
