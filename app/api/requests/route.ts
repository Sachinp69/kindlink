import { connectToDb } from "@/lib/db"
import { DonationRequest } from "@/models/donrequest.model";
import { NextResponse } from "next/server"

export async function GET() {
    try{
        await connectToDb();
        const requests = await DonationRequest.find().populate('createdBy', 'name email');
        return NextResponse.json(requests)
    }catch(err){
        return NextResponse.json({error: "Failed to fetch requests"}, {status: 500})
    }
}
