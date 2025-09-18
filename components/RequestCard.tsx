"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReportModal from "@/components/ReportModal";

interface RequestCardProps {
  _id: string; // donation request id
  title: string;
  description: string;
  category: string;
  quantity?: number;
  location: string;
  createdBy: { name: string; email: string };
}

export default function RequestCard({
  _id,
  title,
  description,
  category,
  quantity,
  location,
  createdBy,
}: RequestCardProps) {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <>
      <Card className="p-4 bg-cyan-800 shadow-md rounded-2xl bg-slate-950/30 background-transparent border border-amber-100/30 hover:scale-[1.02] transition-transform duration-200">
        <CardContent className="pl-2 pr-2">
          <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
            <div className="mt-2">
              <span className="font-medium">Category:</span> {category}
            </div>
            {quantity !== undefined && (
              <div>
                <span className="font-medium">Quantity:</span> {quantity}
              </div>
            )}
            <div>
              <span className="font-medium">Location:</span> {location}
            </div>
            <div className="mt-2 text-sm text-amber-400">
              Posted by {createdBy?.name || "Anonymous"}
            </div>
          
          <div className="">
            <Button className="mt-3 border border-green-500/40 bg-green-600/5 hover:bg-green-500 mr-2">
              HELP
            </Button>
            <Button
              className="mt-3 border border-red-500/40 bg-red-600/5 hover:bg-red-500"
              onClick={() => setIsReportOpen(true)}>
              REPORT
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        donationId={_id}
      />
    </>
  );
}
