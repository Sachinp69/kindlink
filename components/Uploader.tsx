"use client"
import Image from "next/image";
import { useState } from "react";

export default function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
    setPreview(URL.createObjectURL(uploadedFile));
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const res = await fetch("/api/upload-certificate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Upload successful! Validation started.");
      } else {
        setMessage(data.error || "Upload failed");
      }
    } catch (err) {
      setMessage("An error occurred during upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-48 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer"
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag & drop your NGO registration certificate here</p>
        )}
      </div>

      {preview && (
        <div className="mt-4">
          <Image src={preview} alt="Preview" className="max-h-48 object-contain" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Upload Document"}
      </button>

      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </div>
  );
}
