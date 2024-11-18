'use client'
// import react
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import libs
import createTag from "@/libs/tags/createTag";
import getTags from "@/libs/tags/getTags";

// import utils
import { cn } from "@/utils/utils";
import { validateHexColor } from "@/utils/validateUtils";
import { Tags } from "@/interface/tagsInterface";

export default function CreateTag() {
  // Primary variables
  const router = useRouter();
  const [nameCreate, setNameCreate] = useState<string>("");
  const [colorCreate, setColorCreate] = useState<string>("");

  // Second variables
  const [isNameCreateError, setIsNameCreateError] = useState<boolean>(false);
  const [nameCreateError, setNameCreateError] = useState<string>("");
  const [isColorCreateError, setIsColorCreateError] = useState<boolean>(false);
  const [colorCreateError, setColorCreateError] = useState<string>("");

  const dataForm = {
    name: nameCreate.trim(),
    color: colorCreate.trim().toLowerCase(),
  };

  // Handle for submit form
  const handleSubmit = async () => {
    if (!nameCreate) {
      setNameCreateError("Please enter a valid name");
      setIsNameCreateError(true);
      return;
    }
    if (!colorCreate) {
      setColorCreateError("Please enter a valid color");
      setIsColorCreateError(true);
      return;
    }
    if (nameCreate.length > 50) {
      setNameCreateError("Name is too long");
      setIsNameCreateError(true);
      return;
    }
    if (!validateHexColor(colorCreate)) {
      console.log("Invalid HEX color code", colorCreate);
      console.log("Invalid HEX color code", validateHexColor(colorCreate));
      setColorCreateError("Please enter a valid HEX color code");
      setIsColorCreateError(true);
      return;
    }

    const allTags: Tags | null = await getTags({ search: nameCreate });
    if (allTags && allTags.tags.some(tag => tag.name.toLowerCase() === nameCreate.toLowerCase())) {
      setNameCreateError("A tag with this name already exists.");
      setIsNameCreateError(true);
      return;
    }

    const result = await createTag({ tagName: dataForm.name, tagColor: dataForm.color });
    if (result.success) {
      router.push('/admin/tag');
    }
    else {
      alert("Failed to create tag");
    }
  };

  // UseEffect for validate name and color
  useEffect(() => {
    if (nameCreate.length > 0 && nameCreate.length <= 50) {
      setIsNameCreateError(false)
      setNameCreateError("")
    }
    if (colorCreate.length > 0) {
      setIsColorCreateError(false)
      setColorCreateError("")
    }
    if (validateHexColor(colorCreate)) {
      setIsColorCreateError(false)
      setColorCreateError("")
    }
  }, [nameCreate, colorCreate])

  // return
  return (
    <main className="py-28 w-full">
      <div className='flex flex-col justify-start items-start gap-4 mx-auto w-full max-w-xl'>
        <div className="flex flex-row justify-center items-center gap-3 w-full">
          <i className="text-header-1 text-vidva bi bi-tags-fill"></i>
          <h1 className="font-semibold text-header-1">Create Tag</h1>
        </div>
        <div className="flex flex-col w-full">
          <form
            action="PUT"
            className="flex flex-col justify-start items-start gap-6"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              handleSubmit();
            }}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="Name" className="font-light text-body-1">Name</label>
              <div className="flex flex-col justify-start items-start gap-1 w-full">
                <input
                  aria-label="Name"
                  type="text"
                  placeholder="Please Enter"
                  value={nameCreate}
                  onChange={(e) => setNameCreate(e.target.value)}
                  className={cn(`bg-neutral-50 p-1 lg:p-2 border rounded-lg w-full font-light placeholder:font-light text-lg text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none`,
                    isNameCreateError ? "border-red-500" : "border-neutral-200"
                  )}
                />
                {isNameCreateError &&
                  (<p className="text-detail text-red-500">{nameCreateError}</p>)
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
                    value={colorCreate}
                    onChange={(e) => setColorCreate(e.target.value.trim().toLowerCase())}
                    className={cn(`bg-neutral-50 p-1 lg:p-2 border rounded-lg w-full font-light placeholder:font-light text-lg text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none`,
                      isColorCreateError ? "border-red-500" : "border-neutral-200"
                    )}
                  />
                  <div className={cn("border rounded-lg w-3/12")} style={{ backgroundColor: colorCreate.length != 0 ? `#${colorCreate}` : '#fff' }}></div>
                </div>
                {isColorCreateError &&
                  (<p className="text-detail text-red-500">{colorCreateError}</p>)
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

