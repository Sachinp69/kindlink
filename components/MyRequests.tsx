"use client";
import React, { useEffect, useState } from "react";

interface Request {
  _id: string;
  title: string;
  category: string;
  quantity: number;
  status: string;
  location: string;
}

const MyRequests = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("/api/donation-request/mine");
        if (!res.ok) throw new Error("Failed to fetch requests");
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-200">My Donation Requests</h2>
      {requests.length === 0 ? (
        <p className="text-gray-400">You haven’t created any requests yet.</p>
      ) : (
        requests.map((req) => (
          <div key={req._id} className="p-4 rounded-lg bg-gray-800 shadow">
            <h3 className="text-lg text-white font-semibold">{req.title}</h3>
            <p className="text-gray-300 text-sm">{req.category}</p>
            <p className="text-gray-400 text-sm">Qty: {req.quantity}</p>
            <p className="text-gray-400 text-sm">Status: {req.status}</p>
            <p className="text-gray-400 text-sm">Location: {req.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyRequests;
