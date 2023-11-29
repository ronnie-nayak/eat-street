import { connectToDatabase } from "@/utils/database"
import { NextApiRequest, NextApiResponse } from "next"
import Items from "@/models/items"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()

  const yal = await Items.find()
  return new Response(JSON.stringify(yal), { status: 200 })
}
