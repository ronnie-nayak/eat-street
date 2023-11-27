import { connectToDatabase } from "@/utils/database"
import { NextApiRequest, NextApiResponse } from "next"
import Yolos from "@/models/yolos"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()

  const yal = await Yolos.find()
  return new Response(JSON.stringify(yal), { status: 200 })
}
