import { NextRequest } from "next/server";
import { connectToDatabase } from "../../../utils/database";
import { auth } from "../auth/auth";
import { Items, Orders, Users } from "@repo/db";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  await connectToDatabase();
  const orderApiId = req.nextUrl.searchParams.get("orderApiId");

  const orderSingle = await Orders.findOneAndDelete({ _id: orderApiId });
  if (!orderSingle) return new Response("Not found", { status: 401 });

  orderSingle.products.forEach(
    async (element: { refId: string; quantity: number }) => {
      await Items.updateOne(
        { _id: element.refId },
        {
          $inc: {
            sold: element.quantity,
          },
          $pull: {
            cartUsers: {
              refId: session?.user?.id,
            },
          },
        },
      );
    },
  );
  await Users.updateOne(
    { _id: session.user.id },
    {
      $set: {
        carts: [],
      },
    },
  );

  // const orderSingle = await Users.findOne({ _id: session?.user?.id }).populate(
  //   "carts.refId",
  // );
  return new Response(JSON.stringify(orderSingle.products), { status: 200 });
}
