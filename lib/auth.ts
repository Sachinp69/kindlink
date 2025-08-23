import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./db";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";

export const authOptions : NextAuthOptions = {
    providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name : "Credentials",
        credentials : {
            email : { label: "Email", type: "text" },
            password : { label: "Password", type: "password" },
        },
        async authorize (credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Invalid credentials: missing email and/or password");
            }
            try{
                await connectToDb();
                const user = await User.findOne({ email: credentials.email, password: credentials.password });
                if(!user){
                    throw new Error("Invalid credentials: user not found");
                }
                const isvalid = await bcrypt.compare(credentials.password, user.password);
                if(!isvalid){
                    throw new Error("Invalid credentials: incorrect password");
                }
                return {
                    id : user._id.toString(),
                }
            }catch(error){
                throw new Error("Invalid credentials");
                console.log(error);
            }
        }
    })
    ],
    callbacks : {
        async jwt({token, user}){
            if(user){
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}){
            if(session.user){
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    pages : {
        signIn : "/auth/signin",
        error : "/auth/signin"
    },
    session  : {
        strategy : "jwt",
        maxAge : 30 * 24 * 60 * 60, // 30 days
    },
    secret : process.env.NEXTAUTH_SECRET,
}

