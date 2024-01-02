import { Items } from "@repo/db";
import { datax } from "../../../lib/data";
import { connectToDatabase } from "../../../utils/database";


export async function POST(req: Request) {
  await connectToDatabase();
  datax.map(async ({ name, desc, count }) => {
    await Items.create({
      name, desc, count
    })
  }
  )
}
