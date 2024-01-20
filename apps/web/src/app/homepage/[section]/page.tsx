
import { ItemsPage } from "@repo/ui"
import { notFound } from "next/navigation"

export default function Section({ params }: { params: { section: string } }): JSX.Element {
  if (["fruit", "vegetable", "meat", "seafood", "baking", "drink"].includes(params.section) === false) {
    return notFound()
  }

  return (
    <ItemsPage apiPath={`/api/getProducts?type=${params.section}`} name={params.section} />
  )
}
