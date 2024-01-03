
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
  oldPrice: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  sold: {
    type: Number,
  },
  newTag: {
    type: Schema.Types.Boolean,
    required: [true, 'newTag is required duh']
  },
  favouriteUsers: [new Schema({
    refId: { type: Schema.Types.ObjectId, ref: 'Users' },
  }, { _id: false })],
  cartUsers: [new Schema({
    refId: { type: Schema.Types.ObjectId, ref: 'Users' },
  }, { _id: false })],
})

export const Items = models?.Items || model('Items', ItemsSchema)

