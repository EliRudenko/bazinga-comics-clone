import { useState } from "react";

const BrowseByFilter = () => {
  const [activeTab, setActiveTab] = useState("series");
  const tabs = [
    { id: "series", label: "SERIES" },
    { id: "character", label: "CHARACTER" },
    { id: "creator", label: "CREATOR" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 my-8">
      <span className="text-sm font-semibold text-muted-foreground mr-4">BROWSE BY</span>
      <div className="flex gap-1 bg-muted rounded-md p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm font-bold rounded transition-all ${
              activeTab === tab.id
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrowseByFilter;
