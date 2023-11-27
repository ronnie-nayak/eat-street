
import { Schema, model, models } from 'mongoose'

const YolosSchema = new Schema({
  name: {
    type: String,
    required: [true, 'namer is required duh']
  },
  desc: {
    type: String,
    required: [true, 'Yolosname is required dub'],
  },
  price: {
    type: Number,
  },
  favourite: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
})

const Yolos = models?.Yolos || model('Yolos', YolosSchema)

export default Yolos
