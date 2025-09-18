"use client"

import { useState } from "react"
import axios from "axios"
import { createClient } from "@supabase/supabase-js"

// Supabase client for frontend (anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState("")

  // Handle drag & drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const uploadedFile = e.dataTransfer.files[0]
    if (!uploadedFile) return

    // Validate type
    if (!uploadedFile.type.includes("pdf")) {
      setMessage("Only PDF files are allowed")
      return
    }

    // Validate size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (uploadedFile.size > maxSize) {
      setMessage("File is too large. Max size is 5MB")
      return
    }

    setFile(uploadedFile)
    setMessage("")
  }

  // Handle upload to server API
  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("file", file)

    try {
      await axios.post("/api/upload-certificate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!
          )
          setMessage(`Uploading: ${percentCompleted}%`)
        },
      })
      setMessage("Upload successful! Validation started.")
      setFile(null)
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4 mt-24 grid grid-cols-3 gap-4 bg-slate-900/30 rounded-lg">
      {/* Drag & drop area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full col-span-3 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded"
      >
        {file ? <p>{file.name}</p> : <p>Drag & drop your NGO registration certificate here</p>}
      </div>

      {/* Upload button */}
      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="col-span-3 mt-4 h-12 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Document"}
      </button>

      {/* Message */}
      {message && <p className="col-span-3 mt-2 text-center text-sm">{message}</p>}
    </div>
  )
}
