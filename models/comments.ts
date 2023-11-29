

import { Schema, model, models } from 'mongoose'

const CommentsSchema = new Schema({
  comment: {
    type: String,
    required: [true, 'namer is required duh']
  },
  rating: {
    type: String,
    required: [true, 'Commentsname is required dub'],
  },
  user:
  {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
})

const Comments = models?.Comments || model('Comments', CommentsSchema)

export default Comments
