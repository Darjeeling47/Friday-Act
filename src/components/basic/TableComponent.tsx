'use client';
import { formatDate_Utc_to_EN } from '@/utils/utils'
import { useState } from 'react'

export default function TableComponent({
  headers,
  data,
  tableStyle,
  headerStyle,
  textStyle,
  iconStyle,
  spaceText,
  defaultRowsPerPage = null,
  onClickEdit,
  onClickDelete,
}: {
  headers: { key: string; title: string }[]
  data: { [key: string]: any }[]
  tableStyle?: string
  headerStyle?: string
  textStyle?: string
  iconStyle?: string
  spaceText?: string
  spaceTool?: string
  defaultRowsPerPage?: number | null
  onClickEdit?: Function
  onClickDelete?: Function
}) {
  const [logoEdit] = useState<string>('/logo/Logo_Edit.png')
  const [logoDelete] = useState<string>('/logo/Logo_Delete.png')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState<number | null>(
    defaultRowsPerPage
  )
  const indexOfLastRow = rowsPerPage ? currentPage * rowsPerPage : data.length
  const indexOfFirstRow = rowsPerPage ? indexOfLastRow - rowsPerPage : 0
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = rowsPerPage ? Math.ceil(data.length / rowsPerPage) : 1

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='flex w-full overflow-x-auto'>
      <table className={`w-full table-fixed border-collapse ${tableStyle}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  width:
                    header.key === 'edit' || header.key === 'delete'
                      ? '30px'
                      : `${spaceText}`,
                }}
                className={`md:text-md border border-l-0 border-r-0 p-1 text-start text-sm font-semibold sm:p-2 ${headerStyle}`}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((rowData, index) => (
            <tr key={index} className='text-center'>
              {headers.map((header, subIndex) => {
                if (header.key === 'edit') {
                  return (
                    <td
                      key={`${index}-${subIndex}`}
                      className={`items-start border border-l-0 border-r-0 p-1 text-start sm:p-2 ${iconStyle}`}>
                      <button
                        onClick={() => {
                          if (onClickEdit) {
                            onClickEdit(rowData.id)
                          }
                        }}>
                        <i className={`bi bi-pencil-square ${iconStyle}`}></i>
                      </button>
                    </td>
                  )
                }
                if (header.key === 'delete') {
                  return (
                    <td
                      key={`${index}-${subIndex}`}
                      className={`items-start border border-l-0 border-r-0 p-1 text-start sm:p-2 ${iconStyle}`}>
                      <button
                        onClick={() => {
                          if (onClickDelete) {
                            onClickDelete(currentData[index])
                          }
                        }}>
                        <i className={`bi bi-trash3 ${iconStyle}`}></i>
                      </button>
                    </td>
                  )
                }
                if (header.key === 'start_date' || header.key === 'end_date') {
                  return (
                    <td
                      key={`${index}-${subIndex}`}
                      className={`md:text-md border border-l-0 border-r-0 p-1 text-start text-sm sm:p-2 ${textStyle}`}>
                      {formatDate_Utc_to_EN(rowData[header.key])}
                    </td>
                  )
                }
                if (header.key.includes('.')) {
                  // Handle nested objects
                  const keys = header.key.split('.')
                  let current = rowData
                
                  for (const key of keys) {
                    if (current === null || current === undefined || !current.hasOwnProperty(key)) {
                      return undefined  // Return undefined if the key doesn't exist
                    }
                    current = current[key]
                  }
                
                  if (current && typeof current === 'object') {
                    // If 'current' is an object, you can render a specific property or stringify it
                    return (
                      <td
                        key={`${index}-${subIndex}`}
                        className={`md:text-md border border-l-0 border-r-0 p-1 text-start text-sm sm:p-2 ${textStyle}`}>
                        {JSON.stringify(current)}
                      </td>
                    )
                  }
                
                  return (
                    <td
                      key={`${index}-${subIndex}`}
                      className={`md:text-md border border-l-0 border-r-0 p-1 text-start text-sm sm:p-2 ${textStyle}`}>
                      {current}
                    </td>
                  )
                }
                
                return (
                  <td
                    key={`${index}-${subIndex}`}
                    className={`md:text-md border border-l-0 border-r-0 p-1 text-start text-sm sm:p-2 ${textStyle}`}>
                    {rowData[header.key]}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {rowsPerPage && totalPages > 1 && (
        <div className='flex justify-center space-x-2 mt-4'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='disabled:opacity-50 px-2 py-1 border rounded'>
            &lt;
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`rounded border px-2 py-1 ${currentPage === pageIndex + 1 ? 'bg-gray-300' : ''}`}>
              {pageIndex + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='disabled:opacity-50 px-2 py-1 border rounded'>
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}