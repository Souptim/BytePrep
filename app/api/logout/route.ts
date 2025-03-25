import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logged out" });

  response.headers.set(
    "Set-Cookie",
    "session=; Path=/; HttpOnly; Secure; Max-Age=0; SameSite=Strict"
  );

  return response;
}
