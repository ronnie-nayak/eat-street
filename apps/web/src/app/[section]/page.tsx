
import { ItemsPage } from "@repo/ui/src"

export default function Section({ params }) {
  return (
    <ItemsPage apiPath={"/api/" + params.section} name={params.section} />
  )
}
