import { $ } from "bun";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const token = body.token;

  if (token !== process.env.TOKEN) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  await $`etherwake -b ${process.env.MAC_ADDRESS} -i wlan0`;

  return NextResponse.json({ message: "WOL packet sent" });
};