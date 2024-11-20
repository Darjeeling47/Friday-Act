'use client';
import Link from "next/link";
import React from "react";
import { getImageAsBase64 } from '@/utils/getImageAsBase64';
import { useEffect, useState } from "react";


interface CompanyCardProps {
  id: number; // ใช้ ID ของบริษัทเพื่อทำ Dynamic Routing
  img: string; // รูปภาพของบริษัท
  name: string;
  description: string;
}


const CompanyCard: React.FC<CompanyCardProps> = ({ id,img, name, description }) => {
  return (
    <Link href={`/companies/${id}`}>
      <div className="gap-4 p-8 w-120 transition-shadow bg-white rounded-lg shadow-md cursor-pointer group hover:shadow-2xl hover:bg-white/80">
        {
          (img) ? <img
            src={img}
            alt={"Company Logo"}
            className="rounded-lg w-20 aspect-square h-20 max-w-md mb-4"
          /> :
          <div className="w-20 h-20 bg-mgray-6 rounded-lg mb-4"></div>
        }
        
        <div>
          <h3 className="text-lg font-semibold text-mgray-2">{name}</h3>
          <div className="text-sm text-mgray-d3 mt-1 h-40 truncate" dangerouslySetInnerHTML={{ __html: description }}></div>

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
