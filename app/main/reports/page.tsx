"use client"
import React, { useState } from "react";
import RequestList from "@/components/RequestList";
import PageHeader from "@/components/PageHeader";
import CreateReportCard from "@/components/CreateReportCard";
import KindLinkHeader from "@/components/KindLinkHeader";
import Button from "@/components/Button";

const RequestsPage = () => {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-tr from-gray-700 via-gray-950 to-slate-800 text-white">

            <PageHeader
        title="Report"
        subtitle="List of all the Reports"
        leftComponent={<KindLinkHeader/> }
        rightComponent={<button 
                        onClick={() => setIsCreating(true)}
                        className="bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-500 hover:cursor-pointer"
                    >
                        Create Report
                    </button>}
      />
            <main className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-end mb-4">
                    
                </div>
                <RequestList requests={[]} />
            </main>

            {isCreating && <CreateReportCard onClose={() => setIsCreating(false)} />}
        </div>
    );
};

export default RequestsPage;
