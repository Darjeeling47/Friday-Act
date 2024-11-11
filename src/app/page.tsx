'use client'
import Button from "@/components/basic/Button";
import SearchBar from "@/components/basic/SearchBar";
import { useState } from "react";
import Image from 'next/image'

export default function Home() {
  const [search, setSearch] = useState<string>();
  const mockFilters = [
    {
      category: 'Category 1',
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      category: 'Category 2',
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      category: 'Category 3',
      options: ['Option 1', 'Option 2', 'Option 3'],
    }
  ]
  return (
    <div>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <Button>Click me</Button>
      <Button varient="secondary">Click me</Button>
      <Button varient="outline">Click me</Button>
      <Button varient="text">Click me</Button>
      <Button varient="disabled">Click me</Button>
      <div className="w-full flex flex-col py-5 gap-5">
        <SearchBar onChange={setSearch} />
        <SearchBar  onChange={setSearch} />
        <SearchBar  onChange={setSearch}  wFull />
        <SearchBar  onChange={setSearch} wFull/>
        <p>{search}</p>
      </div>
    </div>
  );

}
