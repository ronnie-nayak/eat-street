import { Items } from "@repo/db";
import { datax } from "../../../lib/data";
import { connectToDatabase } from "../../../utils/database";
import { Props } from "@repo/ui";


export async function POST(req: Request) {
  await connectToDatabase();
  datax.map(async ({ name, desc, price, oldPrice, stock, sold, dateAdded, totalStars }: Props) => {
    await Items.create({
      name, desc, price, oldPrice, stock, sold, dateAdded, totalStars
    })
  }
  )
}
// .map\(
