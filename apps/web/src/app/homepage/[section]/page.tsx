
import { ItemsPage } from "@repo/ui"

export default function Section({ params }: { params: { section: string } }): JSX.Element {
  return (
    <ItemsPage apiPath={`/api/${params.section}`} name={params.section} />
  )
}
