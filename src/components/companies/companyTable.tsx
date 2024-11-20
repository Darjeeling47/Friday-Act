// import react
import { useState } from "react"
import Link from "next/link"

// import utils
import { cn } from "@/utils/utils"

// import interface
import { CompanyItem } from "@/interface/companiesInterface"

export default function CompanyTable({
  companies
}: {
  companies: CompanyItem[] | undefined
}) {
  // Primary variable
  const [expandedCompanyId, setExpandedCompanyId] = useState<string | null>(null);

  // Function to toggle description expansion
  const toggleDescription = (companyId: string) => {
    setExpandedCompanyId((prev) => (prev === companyId ? null : companyId));
  };

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
          <th className='p-1 sm:p-2 lg:p-3 w-4/12 md:w-4/12 lg:w-3/12 text-left'>Name</th>
          <th className='p-1 sm:p-2 lg:p-3 w-6/12 md:w-5/12 lg:w-7/12 text-left'>Description</th>
          <th className='p-1 sm:p-2 lg:p-3 w-2/12 md:w-3/12 lg:w-2/12 text-center text-transparent md:text-black'>Website</th>
        </tr>
      </thead>
      <tbody>
        {companies != null && companies.length !== 0 ? (
          companies.map((company: CompanyItem) => {
            const isExpanded = expandedCompanyId === company.companyId.toString();
            return (
              <tr
                key={company.companyId}
                className="border border-r-0 border-l-0 align-text-top text-body-2 text-left cursor-pointer"
                onClick={() => toggleDescription(company.companyId.toString())}
              >
                <td className={cn("p-1 pr-2 sm:p-2 lg:p-3 w-4/12 md:w-4/12 lg:w-3/12 align-text-top text-left transition-all duration-300",
                  isExpanded ? "max-h-none" : "max-h-10 overflow-hidden ")}>
                  <p
                    className={cn(
                      " text-body-2 transition-all duration-300",
                      isExpanded ? "" : "line-clamp-2"
                    )}>
                    {company.companyNameEn
                      ? company.companyNameEn
                      : company.companyNameTh
                        ? company.companyNameTh
                        : "NaN"}
                  </p>
                </td>
                <td
                  className={cn(
                    "p-1 pr-2 sm:p-2 lg:p-3 w-6/12 md:w-5/12 lg:w-7/12 text-left transition-all duration-300",
                    isExpanded ? "max-h-none" : "max-h-10 overflow-hidden"
                  )}
                >
                  {company.description ? (
                    <div
                      className={cn(
                        "text-body-2 transition-all duration-300",
                        isExpanded ? "" : "line-clamp-2"
                      )}
                      dangerouslySetInnerHTML={{ __html: company.description }}
                    ></div>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-1 sm:p-2 lg:p-3 w-2/12 md:w-3/12 lg:w-2/12 text-center transition-all duration-300">
                  <div className="flex justify-center items-center w-full h-full">
                    {company.website ? (
                      <Link href={company.website}>
                        <i className="bi-box-arrow-up-right bi"></i>
                      </Link>
                    ) : (
                      <p className="">-</p>
                    )}
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={12}>
              <p className="p-4 w-full text-body-2 text-center text-mgray-1">
                Not have data
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>

  )
}