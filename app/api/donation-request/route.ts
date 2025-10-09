import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/db";
import { DonationRequest } from "@/models/donrequest.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    await connectToDb();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const newRequest = await DonationRequest.create({
      ...body,
      createdBy: session.user.id,
    });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create request" }, { status: 500 });
  }
}
