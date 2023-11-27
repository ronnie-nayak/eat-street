import { connectToDatabase } from "@/utils/database";
import { auth } from "../auth/auth";
import Users from "@/models/users";

export async function GET(req: Request, res: Response) {
  try {

    const session = await auth()
    console.log(session)
    if (!session) {
      return new Response("Unauthorized", { status: 401 })
    }

    await connectToDatabase();

    const userFavourites = await Users.findOne({ email: session?.user?.email }).populate('favorites');

    return new Response(JSON.stringify(userFavourites), { status: 200 })
  } catch (error) {
    console.log(error.message);
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
    const updatedUserFavourites = await Users.findOneAndUpdate(
      { email: session?.user?.email },
      { $push: { favorites: _id } }
    )

    return new Response(JSON.stringify(updatedUserFavourites), { status: 200 })
  } catch (error) {
    console.log(error.message);
    return new Response(error.message, { status: 500 })
  }
}
