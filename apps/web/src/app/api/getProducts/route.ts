import { Items } from "@repo/db";
import { connectToDatabase } from "../../../utils/database";
import { NextRequest } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const type = req.nextUrl.searchParams.get("type");
  const yal = await Items.find({ type });
  return new Response(JSON.stringify(yal), { status: 200 });
}
