"use client";

import React from "react";
import CompanyCard from "@/components/basic/CompanyCard";
import SearchBar from "@/components/basic/SearchBar";

const CompaniesPage: React.FC = () => {
  const companies = [
    {
      name: "Name of the company",
      description:
        "Short description for the company that will tell all about it. Like we make it for you.",
      link: "#",
    },
  ];

  const handleSearchChange = (value: string) => {
    console.log("Search Value:", value);
    // TODO: Add search/filter logic
  };

  return (
    <main className="container mx-auto p-6">
      {/* Header with Title and SearchBar */}
      <div className="flex items-center justify-between mb-8 mt-8 w-full">
        <h1 className="text-3xl font-bold ">Companies</h1>
          <SearchBar
            onChange={handleSearchChange}
            filter={[
              { category: "Category 1", options: ["Option 1", "Option 2"] },
              { category: "Category 2", options: ["Option 3", "Option 4"] },
            ]}
          />
      </div>

      {/* Company Cards */}
      <div className="flex flex-wrap justify-between gap-y-8">
        <div className="flex w-full justify-between">
          <div className="w-0.9 ml-4">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
          <div className="w-0.9">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="w-0.9 ml-4">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
          <div className="w-0.9">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="w-0.9 ml-4">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
          <div className="w-0.9">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                name={company.name}
                description={company.description}
                link={company.link}
              />
            ))}
          </div>
        </div>

        <div className="w-0.9 ml-4 mb-8">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              name={company.name}
              description={company.description}
              link={company.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CompaniesPage;
