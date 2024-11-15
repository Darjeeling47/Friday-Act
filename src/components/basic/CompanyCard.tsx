import Link from "next/link";
import React from "react";

interface CompanyCardProps {
  id: number; // ใช้ ID ของบริษัทเพื่อทำ Dynamic Routing
  name: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ id, name, description }) => {
  return (
    <div className="gap-4 p-4 w-120 border rounded-lg hover:shadow-lg transition-shadow">
      {/* รูปหรือ placeholder */}
      <div className="w-20 h-20 bg-mgray-6 rounded-lg mb-4"></div>

      {/* ข้อมูลบริษัท */}
      <div>
        <h3 className="text-lg font-semibold text-mgray-2">{name}</h3>
        <p className="text-sm text-mgray-d3 mt-1">{description}</p>

        {/* ลิงก์ไปยังหน้า company/[id] */}
        <Link
          href={`/companies/{id}`}
          className="text-sm text-blue-400 mt-2 inline-block hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
