"use client";

import React, { useState } from "react";
import CompanyCard from "@/components/basic/CompanyCard";
import SearchBar from "@/components/basic/SearchBar";

const CompaniesPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState(""); // State เก็บค่าค้นหา

  const companies = [
    { id: 1, name: "Company 1", description: "Short description about your company1", link: "/company/1" },
    { id: 2, name: "Company 2", description: "Short description about your company2", link: "/company/2" },
    { id: 3, name: "Company 3", description: "Short description about your company3", link: "/company/3" },
    { id: 4, name: "Company 4", description: "Short description about your company4", link: "/company/4" },
    { id: 5, name: "Company 5", description: "Short description about your company5", link: "/company/5" },
    { id: 6, name: "Company 6", description: "Short description about your company6", link: "/company/6" },
    { id: 7, name: "Company 7", description: "Short description about your company7", link: "/company/7" },
  ];

  // กรองข้อมูลบริษัทตามค่าค้นหา
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value); // อัปเดตค่าค้นหาใน State
    console.log("Search Value:", value);
  };

  return (
    <main className="container mx-auto p-6">
      {/* Header with Title and SearchBar */}
      <div className="flex items-center justify-between mb-8 mt-4 w-full">
        <h1 className="text-4xl font-bold">Companies</h1>
        <SearchBar
          onChange={handleSearchChange} // เรียกใช้งาน handleSearchChange
          filter={[
            { category: "Category 1", options: ["Option 1", "Option 2"] },
            { category: "Category 2", options: ["Option 3", "Option 4"] },
          ]}
        />
      </div>

      {/* Company Cards */}
      <div className="grid grid-cols-2 gap-8">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              description={company.description}
            />
          ))
        ) : (
          <p className="text-center col-span-2">No companies found.</p>
        )}
      </div>
    </main>
  );
};

export default CompaniesPage;
