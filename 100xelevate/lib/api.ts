const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1";
const FASTAPI_BASE = rawBase.replace(/\/$/, "");

export interface ChatResponseMessage {
  answer: string;
  sources: string[];
}

export async function sendChatMessage(message: string): Promise<ChatResponseMessage> {
  try {
    const endpoint = FASTAPI_BASE.endsWith("/api/v1")
      ? `${FASTAPI_BASE}/chat`
      : `${FASTAPI_BASE}/api/v1/chat`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error connecting to AI Chat API:", error);
    return {
      answer: "I'm currently unable to connect to the support server. Please try again shortly.",
      sources: []
    };
  }
}
