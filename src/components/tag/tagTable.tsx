'use client'

// import react
import { useRouter } from "next/navigation";

// import interface
import { TagItem } from "@/interface/tagsInterface";
import { encodeBase64 } from "@/utils/hashUtils";

// interface
interface TagTableProps {
  tags: TagItem[] | null;
  handleDeleteTag: (id: number) => void;
}

export default function TagTable({
  tags,
  handleDeleteTag
}: TagTableProps) {
  // Primary variable
  const router = useRouter();

  // Handle for edit tag
  const handleEditTag = (id: string): void => {
    const hashedId = encodeBase64(id);
    router.push(`/admin/tag/edit/${hashedId}`);
  };

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
          <th
            className='p-1 sm:p-2 w-5/12 lg:w-7/12 text-left'>
            Name
          </th>
          <th
            className='p-1 sm:p-2 w-2/12 lg:w-1/12 text-center'>
            Color
          </th>
          <th
            className='p-1 sm:p-2 w-3/12 lg:w-2/12 text-center'>
            Hex
          </th>
          <th
            className='p-1 sm:p-2 w-1/12 lg:w-1/12 text-center text-transparent'>
            Edit
          </th>
          <th
            className='p-1 sm:p-2 w-1/12 lg:w-1/12 text-center text-transparent'>
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {
        tags != null && tags.length !== 0 ? (
          tags.map((tag: TagItem) => (
            <tr key={tag.id} className='border border-r-0 border-l-0 w-full text-body-2'>
              <td className='p-1 sm:p-2 w-5/12 lg:w-7/12 truncate'>
                {tag.name}
              </td>
              <td className='p-1 sm:p-2 w-2/12 lg:w-1/12'>
                <div className="flex justify-center items-center p-2 sm:p-0 w-full h-full">
                  <div
                    className='rounded-lg w-full sm:w-1/2 max-w-6 md:max-w-7 aspect-square'
                    style={{ backgroundColor: `#${tag.color}` }}
                  ></div>
                </div>
              </td>
              <td className='p-1 sm:p-2 w-3/12 lg:w-2/12 text-center'>
                #{tag.color.toLowerCase()}
              </td>
              <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
                <div className="flex justify-center items-center w-full h-full">
                  <button
                    className="w-full aspect-square"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      handleEditTag(tag.id.toString());
                    }}
                    aria-label="Edit Tag"
                  >
                    <i className="text-body-1 bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
              <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
                <div className="flex justify-center items-center w-full h-full">
                  <button
                    className="w-full aspect-square"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      handleDeleteTag(tag.id)
                    }}
                    aria-label="Delete Tag"
                  >
                    <i className="text-body-1 bi bi-trash3" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={12}>
              <p className="p-4 w-full text-body-2 text-center text-mgray-1">Not have data</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}