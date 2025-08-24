import React from "react";
import RequestList from "@/components/RequestList";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";

const RequestsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900">

            <PageHeader title="Requests" />
            <main className="max-w-4xl mx-auto py-8 px-4">
                <RequestList requests={[]} />
            </main>
        </div>
    );
};

export default RequestsPage;