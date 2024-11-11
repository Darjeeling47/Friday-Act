import Image from "next/image";

export default function TableComponent({ headers, data } : { headers : any[], data : any[]}) {
  const logoEdit = '/logo/Logo_Edit.png'
  const logoDelete = '/logo/Logo_Delete.png'
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2 text-center border-l-0 border-r-0">{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index} className="text-center">
            {headers.map((header, subIndex) => {
              if(header.key == 'edit') return (<td className="border p-2 border-l-0 border-r-0">
              <button>
                <Image
                  src={logoEdit}
                  alt="Edit"
                  width={24}
                  height={24}
                />
              </button>
            </td>)
              if(header.key == 'delete') return (<td className="border p-2  border-l-0 border-r-0">
              <button >
                <Image
                  src={logoDelete}
                  alt="Delete"
                  width={21}
                  height={21}
                />
              </button>
            </td>)
              return(<td key={subIndex} className="border p-2 border-l-0 border-r-0">{data[header.key]}</td>)
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
