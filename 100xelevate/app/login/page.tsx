"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, from }),
    });

    if (res.ok) {
      const { redirectTo } = await res.json();
      router.push(redirectTo);
      router.refresh();
    } else {
      router.push("/");

      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9f9f9",
      fontFamily: "sans-serif",
    }}>
      <div style={{
        background: "#fff",
        padding: "48px",
        borderRadius: "12px",
        boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
        width: "100%",
        maxWidth: "380px",
      }}>
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: "22px", letterSpacing: "-0.5px" }}>
            100xelevate
          </div>
          <div style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
            Enter the password to continue
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: "12px",
            }}
          />

          {error && (
            <div style={{ color: "#c0392b", fontSize: "13px", marginBottom: "12px" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              fontWeight: 600,
              background: loading ? "#999" : "#000",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
