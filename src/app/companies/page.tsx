"use client";

import React, { useState } from "react";
import CompanyCard from "@/components/activity/CompanyCard";
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

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log("Search Value:", value);
  };

  return (
    <main className="md:px-10 sm:p-6 container">
      {/* Header with Title and SearchBar */}
      <div className="items-center gap-4 grid grid-cols-1 sm:grid-cols-2 mt-4 mb-8">
        <h1 className="mb-4 font-bold text-4xl">Companies</h1>
        <SearchBar onChange={handleSearchChange} />
      </div>

      {/* Company Cards */}
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
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
          <p className="col-span-full text-center">No companies found.</p>
        )}
      </div>
    </main>
  );
};

export default CompaniesPage;