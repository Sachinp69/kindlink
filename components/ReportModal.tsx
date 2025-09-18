"use client";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReportType } from "@/types/enums";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  donationId: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, donationId }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetId: donationId, type, description }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Report submitted successfully.");
        setType("");
        setDescription("");
        onClose();
      } else {
        setError(data.error || "Failed to submit report.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 blur-xl" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-gradient-to-tr from-gray-800 via-gray-950 to-slate-900 p-6 shadow-xl">
          <DialogTitle className="text-lg font-bold mb-4">Report Donation</DialogTitle>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-black/5 p-2 rounded-md">
              <label className="block text-sm font-medium">Report Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full mt-1 border rounded-md p-2 text-white"
                required
                disabled={loading}
              >
                <option className="text-black" value="">
                  -- Select --
                </option>
                <option className="text-black" value={ReportType.Spam}>
                  Spam
                </option>
                <option className="text-black" value={ReportType.Fraud}>
                  Fraud
                </option>
                <option className="text-black" value={ReportType.Abuse}>
                  Abuse
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Description (optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 border rounded-md p-2"
                rows={3}
                disabled={loading}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Report"}
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ReportModal;
