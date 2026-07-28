import { NextResponse } from "next/server";

const PASSWORD = "100x";
const AUTH_COOKIE = "site-auth";
const AUTH_SECRET = "100x-authenticated";

export async function POST(request: Request) {
  const body = await request.json();
  const { password, from } = body;

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const redirectTo = from && from !== "/login" ? from : "/";
  const response = NextResponse.json({ success: true, redirectTo });

  response.cookies.set(AUTH_COOKIE, AUTH_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
