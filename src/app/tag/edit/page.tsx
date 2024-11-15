export default function EditTag() {
  // return
  return (
    <main className="flex justify-center items-center w-full h-screen">
    <div className='container'>
      <h1>EditTag</h1>
      <div className="flex flex-col">
        <form action="PUT">
          <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Please Enter" />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-10/12">
              <label htmlFor="">Color (RGB)</label>
              <input type="text" placeholder="Please Enter"/>
            </div>
            <div className="bg-red-500 w-full h-full"></div>
          </div>
          <button className="w-full text-center">
            Save
            </button>
        </form>
      </div>
    </div>
    </main>
  )
}