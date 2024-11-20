// import react
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

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
          <th className='p-1 sm:p-2 lg:p-3 w-6/12 md:w-5/12 lg:w-3/12 text-left'>Name</th>
          <th className='p-1 sm:p-2 lg:p-3 w-4/12 md:w-4/12 lg:w-6/12 text-left'>Description</th>
          <th className='p-1 sm:p-2 lg:p-3 w-2/12 md:w-3/12 lg:w-3/12 text-left text-transparent md:text-black'>Website</th>
        </tr>
      </thead>
      <tbody>
        {
          companies != null && companies.length !== 0 ?
            (
              companies.map((company: CompanyItem) => {
                return (
                  <tr key={company.companyId} className="border border-r-0 border-l-0 align-text-top text-body-2 text-left">
                    <td className='p-1 sm:p-2 lg:p-3 w-6/12 md:w-5/12 lg:w-3/12 align-text-top text-left truncate'>
                      {company.companyNameEn ? company.companyNameEn : company.companyNameTh ? company.companyNameTh : "NaN"}
                    </td>
                    <td className='p-1 sm:p-2 lg:p-3 w-4/12 md:w-4/12 lg:w-6/12 text-left'>
                      {
                        company.description ?
                          <div
                            dangerouslySetInnerHTML={{ __html: company.description }}
                          ></div>
                          :
                          "No Description"
                      }
                    </td>
                    <td className='p-1 sm:p-2 lg:p-3 w-2/12 md:w-3/12 lg:w-3/12 text-left'>
                      <div className="flex justify-center items-center md:hidden w-full h-full">
                        {
                          company.website ?
                            <Link href={company.website}>
                              <i className="bi-box-arrow-up-right bi"></i>
                            </Link>
                            :
                            <i className="bi-box-arrow-up-right text-mgray-1 bi"></i>}
                      </div>
                      <Link href={company.website ? company.website : "#"} className="md:block hidden w-full" >
                        {company.website ? company.website : "No Website"}
                      </Link>
                    </td>
                  </tr>
                )
              })

            )
            : (
              <tr>
                <td colSpan={12}>
                  <p className="p-4 w-full text-body-2 text-center text-mgray-1">Not have data</p>
                </td>
              </tr>
            )
        }
      </tbody>
    </table>
  )
}