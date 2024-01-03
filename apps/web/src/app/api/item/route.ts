import { headers } from 'next/headers'
import { Items } from "@repo/db"
import { connectToDatabase } from "../../../utils/database"

export async function PATCH(request: Request) {
  const { _id } = await request.json()
  await connectToDatabase()
  console.log("id", _id)
  const yal = await Items.find({ _id })
  console.log("yal", yal[0])
  return new Response(JSON.stringify(yal[0]), { status: 200 })
}
