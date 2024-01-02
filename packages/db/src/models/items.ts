
import { Schema, model, models } from 'mongoose'

const ItemsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'namer is required duh']
  },
  desc: {
    type: String,
    required: [true, 'Itemsname is required dub'],
  },
  price: {
    type: Number,
  },
  favouriteUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  cartUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ]
})

export const Items = models?.Items || model('Items', ItemsSchema)

