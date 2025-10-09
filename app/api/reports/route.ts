import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDb } from "@/lib/db";
import { Report } from "@/models/report.model";
import { ReportStatus } from "@/types/enums";

export async function POST(req: Request) {
  await connectToDb();

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { targetId, type, description } = await req.json();

  if (!targetId || !type) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const report = await Report.create({
      reportedBy: session.user.id,
      targetId,
      type,
      description,
      status: ReportStatus.Open,
    });

    return NextResponse.json({ message: "Report submitted successfully", report });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectToDb();

  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    return NextResponse.json({ reports });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
