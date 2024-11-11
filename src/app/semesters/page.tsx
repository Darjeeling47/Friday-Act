import TableComponent from "@/components/basic/TableComponent";
import TableHeader from "@/components/basic/TableHeader";
import { formatDate_Utc_to_EN } from "@/utils/utils";


export default function Semesters() {
  // Mock Data
  const mockData = {
    "success": true,
    "count": 3,
    "pagination": {
        "current": 1,
        "last": 1,
        "next": null,
        "prev": null,
        "limit": 25
    },
    "semesters": [
        {
            "id": 1,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 2,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 3,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
      ]
    }
  const headers = [
    {"key" : "year", "title" : "Year"},
    {"key" : "semester", "title" : "Semester"},
    {"key" : "start_date", "title" : "Start Date"},
    {"key" : "end_date", "title" : "End Date"},
    {"key" : "edit", "title" : ""},
    {"key" : "delete", "title" : ""},
  ]

  // handle for UTC to EN timestamp
  const data = mockData.semesters.map(semester => ({
    ...semester,
    start_date: formatDate_Utc_to_EN(semester.start_date),
    end_date: formatDate_Utc_to_EN(semester.end_date),
  }));

  // return
  return (
    <main className='container'>
      <TableHeader
        headerTitle="Semesters"
        buttonTitle="New Semesters"
      />
      <TableComponent
        headers={headers}
        data={data}
      />
    </main>
  )
}