'use client'
// import components
import SearchBar from "@/components/basic/SearchBar";
import TableComponent from "@/components/basic/TableComponent";
import TableHeader from "@/components/basic/TableHeader";
import { useEffect, useState } from "react";

// HTTP Constant
const HTTP = 'http://143.198.87.246'

export default function AdminActivities() {
  // Variables - Primary
  // Data
  const [data, setData] = useState<{
    name: string,
    companies: string,
    startTime: string,
    endTime: string,
    participants: number,
    maxParticipants: number
  }[]>([])

  // Use effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${HTTP}/api/v1/activities`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json().then(data => data.activities)
        setData(data)
        console.log(data)
      } catch(e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  // handle search bar
  const handleSearch = (value: string) => {
    console.log(value)
  }

  // Return 
  return (
    <div className="flex flex-col container mx-auto">
      <TableHeader 
        headerTitle={"Activities"} 
        buttonTitle={"New Activity"}
        href={"/admin/activities/create"}
      />
      <div className="flex justify-end p-2">
        <SearchBar onChange={handleSearch} />
      </div>
      <TableComponent 
        tableStyle='mt-6' 
        headers={[ 
          {title:'Name', key:'name'}, 
          {title:'Companies', key:'companies'}, 
          {title:'Start time', key:'start_time'}, 
          {title:'End time', key:'end_time'}, 
          {title:'Participants', key:'speaker'}, 
          {title:'Max participants', key:'max_participants'}]
        } 
        data={data} 
      />
    </div>
  )
}