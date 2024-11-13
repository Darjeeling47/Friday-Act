"use client"

import TableComponent from "@/components/basic/TableComponent";
import TableHeader from "@/components/basic/TableHeader";
import getSemesters from "@/libs/semesters/getSemesters";
import { formatDate_Utc_to_EN } from "@/utils/utils";
import { error } from "console";
import { useEffect, useState } from "react";

interface Semester {
  year: number;
  semester: number;
  start_date: string;
  end_date: string;
}


export default function Semesters() {
  // Primary variable
  // const [data, setData] = useState<Semester[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const headers = [
  //   { "key": "year", "title": "Year" },
  //   { "key": "semester", "title": "Semester" },
  //   { "key": "start_date", "title": "Start Date" },
  //   { "key": "end_date", "title": "End Date" },
  //   { "key": "edit", "title": "" },
  //   { "key": "delete", "title": "" },
  // ]

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getSemesters();
  //       const semesters = data.semesters
  //       console.log(semesters)
  //       const formattedData = semesters.map((semester: Semester) => ({
  //         ...semester,
  //         start_date: formatDate_Utc_to_EN(semester.start_date),
  //         end_date: formatDate_Utc_to_EN(semester.end_date),
  //       }));
  //       setData(formattedData);
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div className="text-xl font-semibold">Loading...</div>;
  // if (error) return <div className="text-xl font-semibold">Error: {error}</div>;

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
        {
            "id": 4,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 5,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 6,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 7,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 8,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 9,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 10,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 11,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 12,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 13,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 14,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 15,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 16,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 17,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 18,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 19,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 20,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 21,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 22,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 23,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 24,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 25,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 26,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 27,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 28,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 29,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 30,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 31,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 32,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 33,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 34,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 35,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 36,
            "year": 2025,
            "semester": 1,
            "start_date": "2025-02-15T00:00:00.000Z",
            "end_date": "2025-07-30T00:00:00.000Z",
            "created_at": "2024-10-23T17:19:54.052Z",
            "updated_at": null
        },
        {
            "id": 37,
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
        headerStyle="text-xl md:text-2xl"
        buttonStyle="text-sm md:text-xl"
      />
      <TableComponent
        headers={headers}
        data={data}
        defaultRowsPerPage={10}
      />
    </main>
  )
}