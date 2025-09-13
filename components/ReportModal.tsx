"use client";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  donationId: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, donationId }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ targetId: donationId, type, description }),
    });

    setType("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 blur-xl" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-gradient-to-tr from-gray-800 via-gray-950 to-slate-900 bg- p-6 shadow-xl">
          <DialogTitle className="text-lg font-bold mb-4">Report Donation</DialogTitle>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Report Type */}
            <div className="bg-black/5 p-2 rounded-md">
              <label className="block text-sm font-medium">Report Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full mt-1 border rounded-md p-2 text-white"
                required
              >
                <option className="text-black" value="">-- Select --</option>
                <option className="text-black" value="Spam">Spam</option>
                <option className="text-black" value="Fraud">Fraud</option>
                <option className="text-black" value="Inappropriate">Inappropriate</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium ">Description (optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 border rounded-md p-2"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 hover:cursor-pointer transition"
            >
              Submit Report
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ReportModal;
