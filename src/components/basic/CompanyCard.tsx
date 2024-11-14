import React from "react";

interface CompanyCardProps {
  name: string;
  description: string;
  link: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, description, link }) => {
  return (
    <div className="gap-4 p-4 w-120">
      <div className="w-20 h-20 bg-mgray-6 rounded-lg mb-4"></div>

      {/* Right: Company Info */}
      <div>
        <h3 className="text-lg font-semibold text-mgray-2">{name}</h3>
        <p className="text-sm text-mgray-d3 mt-1">{description}</p>
        <a
          href={link}
          className="text-sm text-blue-400 mt-2 inline-block hover:underline"
        >
          Link for the company
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
