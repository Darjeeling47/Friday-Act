'use client'
// import react
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// import utils
import { decodeBase64 } from "@/utils/hashUtils";

// import libs
import getTag from "@/libs/tags/getTag";
import getTags from "@/libs/tags/getTags";
import editTag from "@/libs/tags/editTag";

// import utils
import { cn } from "@/utils/utils";
import { validateHexColor } from "@/utils/validateUtils";

// import interface
import { TagItem, Tag, Tags } from "@/interface/tagsInterface";

export default function EditTagPage() {
  // Primary variables
  const router = useRouter();
  const { id } = useParams();
  const [tagId, setTagId] = useState<string>("");
  const [nameEdit, setNameEdit] = useState<string>("");
  const [colorEdit, setColorEdit] = useState<string>("");

  // Second variables
  const [isNameEditError, setIsNameEditError] = useState<boolean>(false);
  const [nameEditError, setNameEditError] = useState<string>("");
  const [isColorEditError, setIsColorEditError] = useState<boolean>(false);
  const [colorEditError, setColorEditError] = useState<string>("");

  const dataForm: TagItem = {
    id: parseInt(tagId as string),
    name: nameEdit,
    color: colorEdit.toLowerCase(),
  };

  // Handle for submit form
  const handleSubmit = async () => {
    if (!nameEdit) {
      setNameEditError("Please enter a valid name");
      setIsNameEditError(true);
      return;
    }
    if (!colorEdit) {
      setColorEditError("Please enter a valid color");
      setIsColorEditError(true);
      return;
    }
    if (nameEdit.length > 50) {
      setNameEditError("Name is too long");
      setIsNameEditError(true);
      return;
    }
    if (!validateHexColor(colorEdit)) {
      setColorEditError("Please enter a valid HEX color code");
      setIsColorEditError(true);
      return;
    }

    const allTags: Tags | null = await getTags({ search: nameEdit });
    if (allTags && allTags.tags.some(tag => tag.name.toLowerCase() === nameEdit.toLowerCase() && tag.id !== parseInt(tagId))) {
      setNameEditError("A tag with this name already exists.");
      setIsNameEditError(true);
      return;
    }

    const result = await editTag({ tag: dataForm });
    if (result.success) {
      router.push('/admin/tags');
    }
  };

  // useEffect for fetching the tag
  useEffect(() => {
    const fetchTag = async () => {
      if (!id) return; // Ensure 'id' exists before fetching

      // Decode the Base64 id directly
      const originalId = decodeBase64(id as string);
      if (isNaN(parseInt(originalId))) return; // Ensure 'id' is a valid number

      // Set tagId in the state
      setTagId(originalId);

      try {
        // Fetch the tag data using the decoded ID
        const tagResponse: Tag | null = await getTag({ id: originalId });

        if (tagResponse && tagResponse.success) {
          const tag: TagItem = tagResponse.tag;
          setNameEdit(tag.name ? tag.name : "");
          setColorEdit(tag.color ? tag.color.toLowerCase() : "");
        } else {
          console.error("Failed to fetch tag data");
          router.push('/admin/tags')
        }
      } catch (error) {
        console.error("Error fetching tag:", error);
        router.push('/admin/tags')
      }
    };
    fetchTag();
  }, [id]);

  // UseEffect for validate name and color
  useEffect(() => {
    if (nameEdit.length > 0 && nameEdit.length <= 50) {
      setIsNameEditError(false)
      setNameEditError("")
    }
    if (colorEdit.length > 0) {
      setIsColorEditError(false)
      setColorEditError("")
    }
    if (validateHexColor(colorEdit)) {
      setIsColorEditError(false)
      setColorEditError("")
    }
  }, [nameEdit, colorEdit])

  // return
  return (
    <main className="py-28 w-full">
      <div className='flex flex-col justify-start items-start gap-4 shadow-2 mx-auto p-5 md:p-8 rounded-xl w-full max-w-xl'>
        <div className="flex flex-row justify-center items-center gap-3 w-full">
          <i className="text-header-1 text-vidva bi bi-tags-fill"></i>
          <h1 className="font-semibold text-header-1">Edit Tag</h1>
        </div>
        <div className="flex flex-col w-full">
          <form
            action="PUT"
            className="flex flex-col justify-start items-start gap-6"
          >
            <div className="flex flex-col w-full">
              <label htmlFor="Name" className="font-light text-body-1">Name</label>
              <div className="flex flex-col justify-start items-start gap-1 w-full">
                <input
                  aria-label="Name"
                  type="text"
                  placeholder="Please Enter"
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
                  className={cn(`bg-neutral-50 p-1 lg:p-2 border rounded-lg w-full font-light placeholder:font-light text-body-2 text-mgray-1 placeholder:text-body-2 placeholder:text-mgray-2 outline-none`,
                    isNameEditError ? "border-red-500" : "border-neutral-200"
                  )}
                />
                {isNameEditError &&
                  (<p className="text-detail-1 text-red-500">{nameEditError}</p>)
                }
              </div>
            </div>
            <div className="flex flex-col justify-end items-start w-full">
              <label htmlFor="Color" className="font-light text-body-1 text-left">Color (HEX)</label>
              <div className="flex flex-col justify-start items-start gap-1 w-full">
                <div className="flex flex-row gap-1 w-full">
                  <input
                    aria-label="Color"
                    type="text"
                    placeholder="Please Enter"
                    value={colorEdit}
                    onChange={(e) => setColorEdit(e.target.value.toLowerCase())}
                    className={cn(`bg-neutral-50 p-1 lg:p-2 border rounded-lg w-2/3 sm:w-9/12 font-light placeholder:font-light text-body-2 text-mgray-1 placeholder:text-body-2 placeholder:text-mgray-2 outline-none`,
                      isColorEditError ? "border-red-500" : "border-neutral-200"
                    )}
                  />
                  <div className={cn("border rounded-lg w-1/3 sm:w-3/12")} style={{ backgroundColor: colorEdit.length != 0 ? `#${colorEdit}`: '#fff' }}></div>
                </div>
                {isColorEditError &&
                  (<p className="text-detail-1 text-red-500">{colorEditError}</p>)
                }
              </div>
            </div>
            <button className="bg-vidva hover:bg-vidva/80 shadow px-4 py-2 rounded-md w-full text-mgray-4" onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
              Save
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
