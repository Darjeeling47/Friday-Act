import Link from "next/link";
import React from "react";

interface CompanyCardProps {
  id: number; // ใช้ ID ของบริษัทเพื่อทำ Dynamic Routing
  name: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ id, name, description }) => {
  return (
    <Link href={`/companies/${id}`}>
      <div className="gap-4 p-8 w-120 transition-shadow bg-white rounded-lg shadow-md cursor-pointer group hover:shadow-2xl hover:bg-white/80">
        <div className="w-20 h-20 bg-mgray-6 rounded-lg mb-4"></div>

        <div>
          <h3 className="text-lg font-semibold text-mgray-2">{name}</h3>
          <p className="text-sm text-mgray-d3 mt-1">{description}</p>

          <Link
            href={`/companies/${id}`}
            className="text-sm text-blue-400 mt-2 inline-block hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
