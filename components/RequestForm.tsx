"use client";
import React, { useState } from "react";

const RequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body: any = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      location: formData.get("location"),
    };

    // only add quantity if relevant
    if (category === "food" || category === "clothing") {
      body.quantity = Number(formData.get("quantity"));
    }

    try {
      const res = await fetch("/api/donation-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to create request");
      window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-200 mb-4">Create New Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" className="w-full p-2 rounded bg-gray-700 text-white" required />
        <textarea name="description" placeholder="Description" className="w-full p-2 rounded bg-gray-700 text-white" />
        
        <select
          name="category"
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="money">Money</option>
          <option value="other">Other</option>
        </select>

        {category === "food" || category === "clothing" ? (
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        ) : null}

        <input name="location" placeholder="Location" className="w-full p-2 rounded bg-gray-700 text-white" required />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 hover:bg-amber-500 hover:cursor-pointer text-white py-2 rounded-lg"
        >
          {loading ? "Creating..." : "Create Request"}
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
