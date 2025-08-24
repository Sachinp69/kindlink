import React from "react";

interface DonationCardProps {
    title: string;
    description: string;
    amountRaised: number;
    goal: number;
    imageUrl: string;
    onDonate?: () => void;
}

const DonationCard: React.FC<DonationCardProps> = ({
    title,
    description,
    amountRaised,
    goal,
    imageUrl,
    onDonate,
}) => {
    //Calculates the fundraising progress as a percentage, capped at 100%.
    const progress = Math.min((amountRaised / goal) * 100, 100);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-sm">
            <img
                src={imageUrl}
                alt={title}
                className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
                <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Raised: ${amountRaised.toLocaleString()}</span>
                        <span>Goal: ${goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <button
                    onClick={onDonate}
                    className="mt-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                    Donate
                </button>
            </div>
        </div>
    );
};

export default DonationCard;