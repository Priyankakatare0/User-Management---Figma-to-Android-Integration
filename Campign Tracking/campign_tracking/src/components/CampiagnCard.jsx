import React from "react";

const CampaignCard = ({ campaign }) => {
  const statusStyles = {
    Live: "bg-green-100 text-green-600",
    Completed: "bg-blue-100 text-blue-600",
    Scheduled: "bg-purple-100 text-purple-600",
    Paused: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="border rounded-2xl p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-blue-700 font-bold text-sm">{campaign.name}</h2>
          <p className="text-xs text-gray-500">{campaign.date}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[campaign.status]}`}>
          {campaign.status}
        </span>
      </div>

      <div className="flex justify-between text-xs text-blue-600 font-medium mt-4 border-t pt-2">
        <span>CTR<br />15.2%</span>
        <span>Open Rate<br />15.2%</span>
        <span>QOI<br />152%</span>
      </div>
    </div>
  );
};

export default CampaignCard;
