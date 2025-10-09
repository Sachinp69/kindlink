import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; 
import { connectToDb } from "@/lib/db";
import { DonationRequest } from "@/models/donrequest.model";


export async function GET() {
  try {
    await connectToDb();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requests = await DonationRequest.find({ createdBy: session.user.id }).sort({ createdAt: -1 });
    return NextResponse.json(requests);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 });
  }
}

