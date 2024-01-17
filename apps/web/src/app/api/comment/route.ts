
import { Items, Users, Comments } from "@repo/db";
import { connectToDatabase } from "../../../utils/database";
import { auth } from "../auth/auth";


export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }
  await connectToDatabase();
  const { comment, rating, _id } = await req.json();
  const commentData = await Comments.create({ comment: comment.trim(), rating, item: _id, user: session.user.id })


  await Items.updateOne(
    { _id },
    {
      $addToSet: {
        comments: {
          refId: commentData._id,
        }
      },
      $inc: {
        totalStars: rating,
      }
    }
  )

  return new Response(JSON.stringify(commentData), { status: 200 })
}

export async function PATCH(req: Request) {
  const { _id } = await req.json()
  await connectToDatabase()
  // const yal = await Items.findOne({ _id }).populate('comments.refId').populate('comments.redId.user')
  const yal = await Comments.find({ item: _id }).populate('user')
  return new Response(JSON.stringify(yal), { status: 200 })
}

