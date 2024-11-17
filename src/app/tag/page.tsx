'use client'
// import react
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import libs
import getTags from "@/libs/tags/getTags"
import deleteTag from "@/libs/tags/deleteTag";

// import interface
import { Tags, TagItem } from "@/interface/tagsInterface";

export default function Tag() {
  // Primary variable
  const [tags, setTags] = useState<TagItem[] | null>(null)
  const router = useRouter()
  const headers = [
    { key: 'name', title: 'Name' },
    { key: 'color', title: 'Color' },
    { key: 'color', title: 'HEX Code' },
    { key: 'delete', title: '' },
  ]

  const handleCreate = () => {
    router.push('/tag/create')
  }

  const handleDeleteTag = async (id: number) => {
    const result = await deleteTag({ id: id.toString() })
    if (result) {
      const allTags: Tags | null = await getTags({ search: "" });
      if (allTags) {
        setTags(allTags.tags)
      }
    }
  }

  const handleEditTag = () => {
    router.push('/tag/edit')
  }

  // useEffect for fetch tags
  useEffect(() => {
    const fetchData = async () => {
      const allTags: Tags | null = await getTags({ search: "" });
      if (allTags) {
        setTags(allTags.tags)
      }
    }
    fetchData()
  }, [])

  // return
  return (
    <main className='flex flex-col justify-center items-start space-y-16 py-14 w-full max-w-7xl min-h-screen'>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-semibold text-header-1">Tags</div>
        <button
          className="bg-vidva px-3 py-2 rounded-xl text-body-2 text-white"
          onClick={handleCreate}
        >
          New Tag
        </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="border border-r-0 border-l-0 font-semibold text-body-1">
            <th
              className='p-1 sm:p-2 w-5/12 lg:w-8/12 text-left'>
              Name
            </th>
            <th
              className='p-1 sm:p-2 w-2/12 lg:w-1/12 text-center'>
              Color
            </th>
            <th
              className='p-1 sm:p-2 w-3/12 lg:w-1/12 text-center'>
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
          {tags?.map((tag) => (
            <tr key={tag.id} className='border border-r-0 border-l-0 w-full text-body-2'>
              <td className='p-1 sm:p-2 w-5/12 lg:w-8/12'>
                {tag.name}
              </td>
              <td className='p-1 sm:p-2 w-2/12 lg:w-1/12'>
                <div className="flex justify-center items-center w-full h-full">
                  <div
                    className='rounded-lg w-1/2 max-w-6 md:max-w-7 aspect-square'
                    style={{ backgroundColor: `#${tag.color}` }}
                  ></div>
                </div>
              </td>
              <td className='p-1 sm:p-2 w-3/12 lg:w-1/12 text-center'>
                #{tag.color}
              </td>
              <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
                <div className="flex justify-center items-centerw-full h-full">
                  <button
                    className="w-full aspect-square"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditTag();
                    }}
                    aria-label="Edit Tag"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
              <td className='p-1 sm:p-2 w-1/12 lg:w-1/12'>
                <div className="flex justify-center items-center w-full h-full">
                  <button
                    className="w-full aspect-square"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteTag(tag.id)
                    }}
                    aria-label="Delete Tag"
                  >
                    <i className="bi bi-trash3" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}