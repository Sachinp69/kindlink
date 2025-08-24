import React from "react";
// Update the import path if the Input component is located elsewhere, for example:
import Input from "@/components/Input";
import Button from "@/components/Button";
import KindLinkHeader from "@/components/KindLinkHeader";
import Navbar from "@/components/Navbar";

const DonationsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4">
                
            <div className="max-w-3xl mx-auto  rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-200 mb-6">Make a Donation</h1>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 font-medium mb-2" htmlFor="amount">
                            Donation Amount
                        </label>
                        <Input
                            id="amount"
                            type="number"
                            min={1}
                            placeholder="Amount in USD"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Donate Now
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default DonationsPage;


