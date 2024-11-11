'use client'
import Image from "next/image";
import { useState } from "react";

export default function TableComponent({ 
  headers, 
  data, 
  tableStyle, 
  headerStyle, 
  textStyle, 
  iconStyle 
  } : 
  { 
    headers : any[], 
    data : any[], 
    tableStyle?: string, 
    headerStyle?: string, 
    textStyle?: string, 
    iconStyle?: string
  }) {
  const [logoEdit, setLogoEdit] = useState<string>('/logo/Logo_Edit.png')
  const [logoDelete, setLogoDelete] = useState<string>('/logo/Logo_Delete.png')
  
  return (
    <table className={`w-full border-collapse ${tableStyle}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={`border p-2 text-center border-l-0 border-r-0 font-semibold text-sm md:text-md ${headerStyle}`}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index} className="text-center">
            {headers.map((header, subIndex) => {
              if(header.key == 'edit') return (<td className={`border border-l-0 border-r-0 md: p-2 ${iconStyle}`}>
              <button>
                <Image
                  src={logoEdit}
                  alt="Edit"
                  width={24}
                  height={24}
                />
              </button>
            </td>)
              if(header.key == 'delete') return (<td className={`border border-l-0 border-r-0 md: p-2 ${iconStyle}`}>
              <button >
                <Image
                  src={logoDelete}
                  alt="Delete"
                  width={21}
                  height={21}
                />
              </button>
            </td>)
              return(<td key={subIndex} className={`border p-2 border-l-0 border-r-0 text-sm md:text-md ${textStyle}`}>{data[header.key]}</td>)
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
