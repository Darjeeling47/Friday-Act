'use client'

// import react
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import components
import SearchBar from "@/components/basic/SearchBar";
import TagTableLoad from "@/components/tag/tagTableLoad";
import TagTable from "@/components/tag/tagTable";

// import libs
import getTags from "@/libs/tags/getTags";
import deleteTag from "@/libs/tags/deleteTag";

// import interfaces
import { TagItem, Tags } from "@/interface/tagsInterface";

export default function TagPage() {
  // Primary variable
  const [search, setSearch] = useState<string>("")
  const [tags, setTags] = useState<TagItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Handle for delete each tag
  const handleDeleteTag = async (id: number) => {
    const result = await deleteTag({ id: id.toString() });
    setSearch("");
    if (result) {
      fetchTags(); // Refetch tags after deletion
    }
  };

  // Fetch tags function with loading state management
  const fetchTags = async () => {
    setLoading(true);
    const allTags: Tags | null = await getTags({ search });
    if (allTags) {
      setTags(allTags.tags);
    }
    setLoading(false);
  };

  // useEffect for fetch tags with search
  useEffect(() => {
    fetchTags();
  }, [search]);

  // return
  return (
    <main className='flex flex-col justify-start items-center gap-12 pt-10 pb-5 w-full max-w-7xl min-h-screen'>
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-semibold text-header-1">Tags</div>
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
      <div className="flex justify-end w-full">
        <SearchBar
          onChange={(value: string) => setSearch(value)}
        />
      </div>
      {loading ? (
        <TagTableLoad />
      ) : (
        <TagTable tags={tags} handleDeleteTag={handleDeleteTag} />
      )}
    </main>
  )
}