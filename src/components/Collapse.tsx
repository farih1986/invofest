import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200">
      
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-50"
      >
        <div className="bg-gray-100 p-2 rounded-md">
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <span className="text-lg font-semibold text-gray-800">
          {title}
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
          <p className="text-gray-700">{description}</p>
        </div>
      )}

    </div>
  );
};

export default Collapse;