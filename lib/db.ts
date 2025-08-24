import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!

if(!MONGODB_URI){
    throw new Error ('please define mongodb_URI in env')
}
 let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDb() {

    if(cached.conn) return cached.conn;
    
    if(!cached.promise){
        mongoose.connect(MONGODB_URI)
        .then(()=>mongoose.connection)
    }
    try {
        cached.conn = await cached.promise
    }catch(error){
        cached.promise = null; // Reset the promise on error
        throw new Error(`Failed to connect to MongoDB: ${error}`);
    }
    return cached.conn;
}