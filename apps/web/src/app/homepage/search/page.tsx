'use client'
import { SearchPage } from "@repo/ui";
import { useSearchParams } from "next/navigation";


export default function Search({ params }: { params: { section: string } }): JSX.Element {
  const searchParams = useSearchParams()
  return (
    <SearchPage searchTerm={searchParams.has("search") ? searchParams.get("search")! : ""} />
  )
}
