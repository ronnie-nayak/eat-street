import { Items } from "@repo/db"
import { connectToDatabase } from "../../../utils/database"

export async function GET() {
  await connectToDatabase()

  const yal = await Items.find()
  return new Response(JSON.stringify(yal), { status: 200 })
}
