import React from "react";

interface Report {
    id: string;
    title: string;
    date: string;
    status: "Pending" | "Approved" | "Rejected";
    description: string;
}

interface ReportListProps {
    reports: Report[];
    onSelect?: (report: Report) => void;
}

const statusColors: Record<Report["status"], string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Approved: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
};

const ReportList: React.FC<ReportListProps> = ({ reports, onSelect }) => {
    if (!reports || reports.length === 0) {
        return (
            <div className="p-6 text-center text-gray-500">
                No reports found.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {reports.map((report) => (
                <div
                    key={report.id}
                    className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => onSelect?.(report)}
                >
                    <div>
                        <div className="font-semibold text-lg">{report.title}</div>
                        <div className="text-sm text-gray-500">{report.date}</div>
                        <div className="mt-2 text-gray-700 line-clamp-2">{report.description}</div>
                    </div>
                    <span
                        className={`mt-2 md:mt-0 md:ml-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[report.status]}`}
                    >
                        {report.status}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ReportList;