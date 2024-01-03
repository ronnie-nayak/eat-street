import { ItemPage } from "@repo/ui/src";


export default function Section({ params }: { params: { itemId: string } }) {

  return (

    < ItemPage _id={params.itemId} />
  )
}
