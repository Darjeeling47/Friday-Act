'use client'
import { formatDate_Utc_to_EN } from '@/utils/utils'
import { useState } from 'react'

const TableSkeleton = ({
  headers,
  rowCount = 5,
}: {
  headers: { key: string; title: string }[]
  rowCount?: number
}) => {
  return (
    <div className='w-full animate-pulse'>
      <div className='w-full'>
        <div className='flex w-full border-b'>
          {headers.map((_, index) => (
            <div key={index} className='flex-1 p-2 sm:p-3'>
              <div className='h-4 w-3/4 rounded bg-gray-200'></div>
            </div>
          ))}
        </div>
        {[...Array(rowCount)].map((_, rowIndex) => (
          <div key={rowIndex} className='flex w-full border-b'>
            {headers.map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className='flex-1 p-2 sm:p-3'>
                <div className='h-4 w-full rounded bg-gray-100'></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

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
  isLoading = false,
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
  isLoading?: boolean
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

  if (isLoading) {
    return <TableSkeleton headers={headers} rowCount={rowsPerPage || 5} />
  }

  return (
    <div className='flex w-full flex-col overflow-x-auto'>
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
                            onClickEdit(currentData[index])
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
                  const keys = header.key.split('.')
                  let current = rowData

                  for (const key of keys) {
                    if (
                      current === null ||
                      current === undefined ||
                      !current.hasOwnProperty(key)
                    ) {
                      return undefined
                    }
                    current = current[key]
                  }

                  if (current && typeof current === 'object') {
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
        <div className='mt-4 flex justify-center space-x-2'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='rounded border px-2 py-1 disabled:opacity-50'>
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
            className='rounded border px-2 py-1 disabled:opacity-50'>
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}
