
import { ItemsPage } from "@repo/ui/src"

export default function Section({ params }: { params: { section: string } }): JSX.Element {
  return (
    <ItemsPage apiPath={`/api/${params.section}`} name={params.section} />
  )
}
