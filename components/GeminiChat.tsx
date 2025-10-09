"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";

export default function GeminiChat(){
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [message, setMessages] = useState<{sender: string, text: string}[]>([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async()=>{
        if(!input.trim()) return;
        setLoading(true);

        const newMessages = [...message, {sender:"You", text:input}];
        setMessages(newMessages);

        const res = await fetch("/api/gemini",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({message:input})
        });

        const data = await res.json();
        setMessages([...newMessages, {sender: "Kindlink AI", text:data.reply}]);
        setInput("");
        setLoading(false);
    };
    return(
        <>
        <button onClick = {() => setOpen(!open)} className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition hover:cursor-pointer"><MessageSquare size={24}/></button>
        {open &&(
            <div className="shadow-lg fixed bottom-24 right-8 w-80 bg-gradient-to-r from-gray-900 to-gray-950 border shadow-xl rounded-2xl p-3 flex flex-col h-96">
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <h2 className="font-semibold text-orange-500">KindLink AI Assistant</h2>
                    <button onClick={()=> setOpen(false)} className="text-gray-500 hover:text-orange-500 hover:cursor-pointer">x</button>
                </div>

                 <div className="flex-grow overflow-y-auto mb-2">
            {message.map((m, i) => (
              <p
                key={i}
                className={`my-1 text-sm ${
                  m.sender === "KindLink AI" ? "text-blue-700" : "text-gray-100"
                }`}
              >
                <b>{m.sender}:</b> {m.text}
              </p>
            ))}
            {loading && <p className="text-gray-400 italic">Thinking...</p>}
          </div>

            <div className="flex">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow border p-2 rounded-l-md text-sm"
                />
                <button
                onClick={sendMessage}
                disabled={loading}
                className="font-bold bg-orange-500 text-white px-3 rounded-r-md text-sm hover:bg-orange-600 hover:cursor-pointer"
                >
                Send
                </button>
            </div>
            </div>
        )}
        
        </>
    )
}