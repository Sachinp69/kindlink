import { connectToDb } from "@/lib/db";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const {email, password} = await request.json();
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }
        await connectToDb();
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        await User.create({
            email,
            password,
            role: "user" // Default role, can be changed as needed
        })
        return NextResponse.json({ message: "User registered successfully" }, { status: 400 });
    }catch (error) {
        console.log("Error in registration:", error);   
        return NextResponse.json({ error: "Failed to register user" }, { status: 400 });
    }
}