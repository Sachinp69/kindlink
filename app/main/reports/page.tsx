"use client";
import { useEffect, useState } from "react";
import RequestList from "@/components/RequestList";
import PageHeader from "@/components/PageHeader";
import RequestCard from "@/components/RequestCard"; 

const ReportsPage = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reports")
      .then((res) => res.json())
      .then((data) => {
        setReports(data.reports);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load reports:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-700 via-gray-950 to-slate-800 text-white">
      <main className="max-w-4xl mx-auto py-8 px-4">
        <PageHeader title="Reported Donations" />

        {loading ? (
          <p className="text-center">Loading reports...</p>
        ) : reports.length === 0 ? (
          <p className="text-center">No reports found.</p>
        ) : (
          <RequestList
            requests={reports.map((report) => (
                {
              id: report._id,
              title: report.type,
              description: report.description || "No description provided",
              status: report.status,
              targetId: report.targetId,
            }
        ))}
          />
        )}
      </main>
    </div>
  );
};

export default ReportsPage;
