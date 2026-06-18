import { useState } from "react";
import Icon from "../../components/Admin/ui/Icon";
import { API } from "../../utils/api";
import { inputStyle, labelStyle, primaryBtn } from "../../pages/style/shared";

export default function LoginPage({ onLogin, toast }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) { toast.show("ادخل البيانات كاملة", "error"); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("بيانات خاطئة");
      const data = await res.json();
      localStorage.setItem("admin_token", data.token);
      onLogin();
      toast.show("مرحباً بك في لوحة التحكم");
    } catch (err) {
      toast.show(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#030712",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div style={{
        width: "100%", maxWidth: 400,
        background: "#0f172a", border: "1px solid #1f2937",
        borderRadius: 20, padding: "40px 36px"
      }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, background: "#083344",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px", color: "#22d3ee"
          }}>
            <Icon name="lock" size={24} />
          </div>
          <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>لوحة التحكم</h1>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>سجّل دخولك للمتابعة</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={labelStyle}>البريد الإلكتروني</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              style={inputStyle} placeholder="admin@example.com"
              onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          </div>
          <div>
            <label style={labelStyle}>كلمة المرور</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              style={inputStyle} placeholder="••••••••"
              onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          </div>
          <button onClick={handleSubmit} disabled={loading}
            style={{ ...primaryBtn, width: "100%", marginTop: 8, padding: "12px", fontSize: 15 }}>
            {loading ? "جاري الدخول..." : "دخول"}
          </button>
        </div>
      </div>
    </div>
  );
}