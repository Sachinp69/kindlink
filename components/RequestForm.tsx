//Imports React and the useState hook for managing component state.
import React, { useState } from "react";

//Defines the props for the component. onSubmit is an optional function that receives the form data
interface RequestFormProps {
    onSubmit?: (data: RequestFormData) => void;
}

//Defines the structure of the form data: name, email, and description
export interface RequestFormData {
    name: string;
    email: string;
    description: string;
}

//Declares the functional component, accepting onSubmit as a prop.  #revisit
const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {
    const [form, setForm] = useState<RequestFormData>({
        name: "",
        email: "",
        description: "",
    });

    //Sets up state for loading (submitting), error messages, and success statu
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    //Handles input changes: updates the corresponding field in the form state and clears any error. #revisit
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null);
    };


    //Handles form submission: prevents default form behavior, sets loading, clears error and success. #revisit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Basic validation - Error if not filled
        if (!form.name || !form.email || !form.description) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

        //Try to submit and reset form, else throws an error | always stops loading in the end
        try {
            // Simulate API call or call onSubmit prop
            if (onSubmit) {
                await onSubmit(form);
            }
            setSuccess(true);
            setForm({ name: "", email: "", description: "" });
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="max-w-md mx-auto bg-white p-8 rounded shadow-md space-y-6"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Request Form</h2>
            {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>
            )}
            {success && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
                    Request submitted successfully!
                </div>
            )}
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit Request"}
            </button>
        </form>
    );
};

export default RequestForm;