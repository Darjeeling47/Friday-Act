import { useState } from 'react'

export default function TagSelector({
  options,
  selections,
  setOptions,
}: {
  options: any[]
  selections: any[]
  setOptions: any
}) {
  // Primary
  const [selected, setSelected] = useState(false)
  const [currentSelection, setCurrentSelection] = useState<{
    id: number
    name: string
    color: string
  }[]>([])
  // Handle for selecting tags
  const handleSelectTag = (tag: {id: number, name: string, color: string}) => {
    let currentTags = selections
    let localSelection = currentSelection
    if (currentTags.length === 0 || !currentTags.includes(tag.id)) {
      currentTags.push(tag.id)
      localSelection.push(tag)
    } else if (currentTags.includes(tag.id)) {
      const removedArray = currentTags.filter((member) => member !== tag.id)
      const removedSelection = localSelection.filter((member) => member.id !== tag.id)
      currentTags = removedArray
      localSelection = removedSelection
    }
    console.log(currentTags)
    setOptions(currentTags)
    setCurrentSelection(localSelection)
  }

  return (
    <div
      onClick={() => setSelected(!selected)}
      className='relative flex w-full cursor-pointer rounded-xl border-1 border-mgray-6 p-2 placeholder-mgray-3'>
      {currentSelection.length === 0 ? (
        <div className='text-mgray-3'>Select Tags</div>
      ) : (
        <div className='flex flex-wrap gap-x-1'>
          {currentSelection.map((tag, index) => (
            <div key={index} className={`p-1 bg-[#${tag.color}]`}>
              {tag.name}
            </div>
          ))}
        </div>
      )}
      {selected && (
        <div className='absolute left-0 top-10 z-10 flex h-full w-full flex-col'>
          {options.map((option: any, index: number) => (
            <div
              key={index}
              className={`flex cursor-pointer items-center justify-between bg-mgray-4 p-2 hover:bg-mgray-3`}
              onClick={() => {
                handleSelectTag(option)
              }}>
              <span>
                {option.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
