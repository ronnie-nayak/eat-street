import { Items, Users } from "@repo/db";
import { connectToDatabase } from "../../../utils/database";
import { auth } from "../auth/auth";

export async function GET(req: Request, res: Response) {
  try {

    const session = await auth()
    if (!session) {
      return new Response("Unauthorized", { status: 401 })
    }

    await connectToDatabase();
    const userCarts = await Users.findOne({ email: session?.user?.email }).populate('carts');
    return new Response(JSON.stringify(userCarts), { status: 200 })
  } catch (error: any) {
    return new Response(error.message, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {

    const session = await auth()
    if (!session) {
      return new Response("Unauthorized", { status: 401 })
    }
    await connectToDatabase();
    const { _id } = await req.json()
    // const userFavourites = await Users.findOne({ email: session?.user?.email });
    // const updatedUserFavourites = await Users.findOneAndUpdate(
    //   { email: session?.user?.email },
    //   { $push: { favorites: _id } }
    // )
    let result = await Users.updateOne(
      { email: session?.user?.email },
      {
        $addToSet: {
          carts: _id
        }
      })

    if (result.modifiedCount === 0) {
      //0 means, no modifikation, that means its already liked
      await Users.updateOne(
        { email: session?.user?.email },
        {
          $pull: {
            carts: _id
          }
        })
    }

    // await Items.findOneAndUpdate(
    //   { _id },
    //   { $push: { favouriteUsers: updatedUserFavourites._id } }
    // )
    let resultSecond = await Items.updateOne(
      { _id },
      {
        $addToSet: {
          cartUsers: session?.user?.id
        }
      })
    if (resultSecond.modifiedCount === 0) {
      //0 means, no modifikation, that means its already liked
      await Items.updateOne(
        { _id },
        {
          $pull: {
            cartUsers: session?.user?.id
          }
        })
    }

    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error: any) {
    return new Response(error.message, { status: 500 })
  }
}
