// components/CreateReportCard.jsx
import React from "react";

type CreateReportCardProps = {
  onClose: () => void;
};

const CreateReportCard: React.FC<CreateReportCardProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-300 hover:text-gray-200 hover:cursor-pointer"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">Create New Report</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Report Title
                        </label>
                        <input 
                            type="text" 
                            className="mt-1 block w-full border-gray-800 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Description
                        </label>
                        <textarea 
                            className="mt-1 block w-full border-gray-400 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateReportCard;
