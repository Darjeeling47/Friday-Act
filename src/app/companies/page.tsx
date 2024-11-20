'use client'
// import react
import { useState, useEffect } from "react";

// import components
import SearchBar from "@/components/basic/SearchBar";

// import libs
import getCompanies from "@/libs/companies/getCompanies";

// import interface
import { Companies, CompanyItem } from "@/interface/companiesInterface";
import CompanyCard from "@/components/activity/CompanyCard";

export default function CompanyPage() {
  // Primary variable
  const [companies, setCompanies] = useState<CompanyItem[] | undefined>();
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  // Function to get companies
  const fetchData = async () => {
    const response: Companies | null = await getCompanies({ search: search })
    if (!response) {
      setCompanies(undefined)
    }
    const data = response?.company.items
    if (!data) {
      setCompanies(undefined)
    }
    setCompanies(data)
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
    setLoading(false)
    console.log(companies)
  }, [search])


  return (
    <main className="md:px-10 sm:p-6 container">
      {/* Header with Title and SearchBar */}
      <div className="items-center gap-4 grid grid-cols-1 sm:grid-cols-2 mt-4 mb-8">
        <h1 className="mb-4 font-bold text-4xl">Companies</h1>
        <SearchBar onChange={setSearch} />
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <p className="text-center">Loading companies...</p>
      ) : (
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
          {/* Company Cards */}
          {companies && companies.length > 0 ? (
            companies.map((company) => (
              <CompanyCard
                key={company.companyId}
                id={company.companyId}
                img = {company.logoUrl}
                name={company.companyNameEn}
                description={company.description}
              />
            ))
          ) : (
            <p className="col-span-full text-center">No companies found.</p>
          )}
        </div>
      )}
    </main>
  );
}
