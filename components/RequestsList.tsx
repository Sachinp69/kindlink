"use client";
import { useEffect, useState } from "react";
import { fetchDonationRequests } from "@/lib/api";
import RequestCard from "./RequestCard";

export default function RequestsList() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const loadRequests = async () => {
      const data = await fetchDonationRequests();
      setRequests(data);
    };
    loadRequests();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {requests.map((req) => (
        <RequestCard key={req._id} {...req} />
      ))}
    </div>
  );
}
