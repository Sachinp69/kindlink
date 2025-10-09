import React from "react";

type Request = {
    id: string;
    title: string;
    description: string;
    status: "pending" | "approved" | "rejected";
};

type RequestListProps = {
    requests: Request[];
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
};

const statusColor = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
};

const RequestList: React.FC<RequestListProps> = ({
    requests,
    onApprove,
    onReject,
}) => {
    if (requests.length === 0) {
        return (
            <div className="text-center text-red-500 py-8">
                No requests found.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {requests.map((req) => (
                <div
                    key={req.id}
                    className="bg-slate-950 shadow rounded p-4 m-2 flex flex-col md:flex-row md:items-center md:justify-between"
                >
                    <div>
                        <h3 className="font-semibold text-lg">{req.title}</h3>
                        <p className="text-gray-600">{req.description}</p>
                        <span
                            className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${statusColor[req.status]}`}
                        >
                            {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                        </span>
                    </div>
                    {req.status === "pending" && (onApprove || onReject) && (
                        <div className="mt-4 md:mt-0 flex gap-2">
                            {onApprove && (
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                                    onClick={() => onApprove(req.id)}
                                >
                                    Approve
                                </button>
                            )}
                            {onReject && (
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => onReject(req.id)}
                                >
                                    Reject
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RequestList;