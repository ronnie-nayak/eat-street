import { ItemPage } from "@repo/ui";


export default function Section({ params }: { params: { itemId: string } }) {

  return (

    < ItemPage _id={params.itemId} boolComment={true} />
  )
}
