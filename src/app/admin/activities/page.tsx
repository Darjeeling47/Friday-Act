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
            'Authorization': `Bearer eyJpdiI6IpF9mK1SWITbN1bJeiIsInZhbHVlIjoipedeXHUwMDE2vTlcdEyfhsdKNtxS5lx1MDAxYdhcdTAwMTZcdTAwMDKVoyukf7dcdTAwMWNcdTAwMDH/63Ji4Y99V7FyXGJM+lFjeE6PrH05sLhcdTAwMWVJgqylbiHdr8q1L3uGo/f71mB0vVx1MDAxMJpOXHUwMDFiXCKAOdOqXHUwMDE0xYpcdTAwMWWKiSdcdTAwMTFcdTAwMTWLTTHeZpFkZUL2uVx1MDAxNyG5XHUwMDAwnTNcIsf27CfkOoyRglx1MDAxZVxyo1eBm1x1MDAwM6X00DVcZqzW30jwoJxocFxuprasM+d6oWPt5m+fW5+20WtUQPzuf1x1MDAxNo9fpXlSKFBMSiZDXHUwMDAyvk3P+rZ7K52oiPxcZj7/7Vx1MDAxYl2/e2Sz0N5cdObnXHUwMDA2XHUwMDEytnydeCqYXHUwMDEyzFx1MDAwNvhbn1x1MDAwNEPiPWxCNr/2RvIslYdcdTAwMDRti/pcdTAwMDN+MD44PZaIXHUwMDAxXG5b8sXC8Vx1MDAxYctcdTAwMTVYXHUwMDA0qW44XHUwMDA31dO6cO7wlrqKr1Rf7spWioRcdTAwMTDvYvOw9/JUQ3y5XFzCiK9zqZXo1rghSnZcdTAwMTWOuaRcdTAwMWXTlbwl0krhXfCGqcg3fiGaYFx1MDAxYVx1MDAxMr3SlvTkfcc4hnzHc417Tlx1MDAwM0jM4C5vXHUwMDEzRcjws27KXHUwMDFiwlx1MDAwM97OuFx1MDAxOaGBXHUwMDFlP1xmxP871n779tF4xFx1MDAxN8dcdTAwMDRKO/Fn7K4sk33PX9jmiNPQXHUwMDAymNY77txXZOhQXHUwMDFhhFx1MDAxNfJk91x1MDAxMPF1WFx1MDAxZeo2jtHd8eeOkVGs0cXQWlXMM8JcdTAwMWO7vG2iTGbBntfliYV3OzH3MH2hhldRIiwidGFnIjoitlr+XHUwMDBl9Vx1MDAwYlx1MDAxN1xcTkP8yKDFXFy+In0=`
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