//import components
import Button from "@/components/basic/Button"

export default function EditTag() {
  // return
  return (
    <main className="flex justify-center items-start w-full h-screen">
      <div className='flex flex-col justify-start items-start gap-4 w-full max-w-xl'>
        <div className="flex flex-row justify-center items-center gap-3 w-full">
        <i className="text-header-1 text-vidva bi bi-tags-fill"></i>
        <h1 className="font-semibold text-header-1">EditTag</h1>
        </div>
        <div className="flex flex-col w-full">
          <form action="PUT" className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="font-light text-body-1">Name</label>
              <input
                type="text"
                placeholder="Please Enter"
                className="bg-neutral-50 p-1 lg:p-2 border rounded-lg w-full font-light placeholder:font-light text-lg text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none"
              />
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-10/12">
                <label htmlFor="" className="font-light text-body-1">Color (HEX)</label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="bg-neutral-50 p-1 lg:p-2 border rounded-lg w-full font-light placeholder:font-light text-lg text-mgray-1 placeholder:text-lg placeholder:text-mgray-2 outline-none"
                />
              </div>
              <div className="bg-red-500 w-2/12 h-full"></div>
            </div>
            <Button >
              Save
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}