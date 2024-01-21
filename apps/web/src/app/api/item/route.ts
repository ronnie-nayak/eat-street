import { Items } from "@repo/db";
import { connectToDatabase } from "../../../utils/database";

export async function PATCH(request: Request) {
  const { _id } = await request.json();
  await connectToDatabase();
  const yal = await Items.find({ _id });
  return new Response(JSON.stringify(yal[0]), { status: 200 });
}
