'ues client'
// import react
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import components
import SearchBar from "@/components/basic/SearchBar";

// import libs
import getCompanies from "@/libs/companies/getCompanies";

// import interface
import { CompanyItem } from "@/interface/companiesInterface";

export default function CompanyPage() {
  const [search, setSearch] = useState<string>("");
  const [companies, setCompanies] = useState<CompanyItem[] | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     const allCompanies: CompanyItem[] | null = await getCompanies({ search });
  //     if (allCompanies) {
  //       setCompanies(allCompanies);
  //     }
  //   }
  //   fetchCompanies();
  // }, [])

  return (
    <main className='flex flex-col justify-start items-center gap-12 pt-10 pb-5 w-full max-w-7xl min-h-screen'>
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-semibold text-header-1">Companies</div>
        <button
          className="bg-vidva px-3 py-2 rounded-xl text-body-2 text-white"
          onClick={(e) => {
            e.preventDefault();
            router.push('/admin/tag/create');
          }}
        >
          New Tag
        </button>
      </div>
      {/* Body */}
      <SearchBar
        onChange={(value: string) => setSearch(value)}
        wFull
      />
      <div>
        {companies ? (
          companies.map((company: CompanyItem) => (
            <p key={company.companyId}>{company.companyNameEn}</p>
          ))
        ) : null}
      </div>
      {/* {loading ? (
        <TagTableLoad />
      ) : (
        <TagTable tags={tags} handleDeleteTag={handleDeleteTag} />
      )} */}
    </main>
  )
}
