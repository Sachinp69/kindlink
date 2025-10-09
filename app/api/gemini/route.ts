import { NextRequest, NextResponse } from "next/server";
import {GoogleGenerativeAI} from "@google/generative-ai";

export async function POST(req: NextRequest){
    try{
        const {message} = await req.json();
        const apiKey = process.env.GEMINI_API_KEY ?? "";
        if(!apiKey){
            console.error("X Gemini_API_KEY is missing!");
            return NextResponse.json({error:"Missing Gemini API Key"}, {status:500});
        }
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});

        const systemPrompt = `
            You are KindLink AI, an intelligent assistant helping NGOs and donors.
            Offer guidance on donation requests, NGO verification, and reports.
            Keep answers polite, concise, and helpful.
            `;
        const result = await model.generateContent([systemPrompt,message]);
        const reply = result.response.text();

        return NextResponse.json({reply});
    }
    catch(error:any){
        console.error(error);
        return NextResponse.json({error: "Error generating Response"},{status:500});
    }
}
