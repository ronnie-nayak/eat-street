import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../utils/database"
import { Items } from "@repo/db"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()

  const yal = await Items.find()
  return new Response(JSON.stringify(yal), { status: 200 })
}
