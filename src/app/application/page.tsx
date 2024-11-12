"use client";

import TableHeader from "@/components/basic/TableHeader";
import SearchBar from "@/components/basic/SearchBar";
import TableComponent from "@/components/basic/TableComponent";

export default function Application() {
  const headers = [
    {"key" : "username", "title" : "User's Name"},
    {"key" : "sid", "title" : "Student ID"},
    {"key" : "activity", "title" : "Activity"},
    {"key" : "date", "title" : "Date"},
    {"key" : "applydate", "title" : "Apply Date"},
    {"key" : "status", "title" : "Status"},
  ]
  const tablemock = [
    {
      "User's Name": "Name Surname",
      "Student ID": "6630000021",
      "Activity": "Activity name",
      "Date": "20/12/2024",
      "Apply Date": "20/11/2024",
      "Status": "eieistatus"
    },
    {
      "User's Name": "Name Surname",
      "Student ID": "6630000021",
      "Activity": "Activity name",
      "Date": "20/12/2024",
      "Apply Date": "20/11/2024",
      "Status": "eieistatus"
    },
    {
      "User's Name": "Name Surname",
      "Student ID": "6630000021",
      "Activity": "Activity name",
      "Date": "20/12/2024",
      "Apply Date": "20/11/2024",
      "Status": "eieistatus"
    }
  ]
  const handleSearchChange = (value: string) => {
    console.log("Search Value:", value);
    // TODO: Add search/filter logic
  };
  // return
  return (
    <main className='py-16 gap-[30px] flex flex-col'>
      <TableHeader headerTitle='Application' buttonTitle='Scan Attendance Qr' style='flex' headerStyle='text-4xl font-semibold' buttonStyle='' />
      <div className="flex justify-end">
        <SearchBar
          onChange={handleSearchChange}
          filter={[
            { category: "Category 1", options: ["Option 1", "Option 2"] },
            { category: "Category 2", options: ["Option 3", "Option 4"] },
          ]}
        />
      </div>
      <TableComponent headers={headers} data={tablemock} />
    </main>
  )
}