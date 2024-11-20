'use client'
// import react
import { useState, useEffect } from "react";

// import components
import SearchBar from "@/components/basic/SearchBar";
import CompanyTableLoad from "@/components/companies/companyTableLoad";
import CompanyTable from "@/components/companies/companyTable";

// import libs
import getCompanies from "@/libs/companies/getCompanies";

// import interface
import { Companies, CompanyItem } from "@/interface/companiesInterface";

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
    <main className='flex flex-col justify-start items-center gap-12 pt-10 pb-5 w-full max-w-7xl min-h-screen'>
      {/* Header */}
      <div className="justify-between gap-12 grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="flex justify-start col-span-1">
          <div className="w-full font-semibold text-center text-header-1 sm:text-left">
            Companies
          </div>
        </div>
        <div className="flex justify-end col-span-1">
          <SearchBar
            onChange={(value: string) => setSearch(value)}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      {/* Body */}
      {
        loading ?
          <CompanyTableLoad />
          :
          <CompanyTable companies={companies} />
      }
    </main>
  )
}
