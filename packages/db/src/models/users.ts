import { Schema, model, models } from 'mongoose'

const UsersSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required duh']
  },
  username: {
    type: String,
    required: [true, 'Usersname is required dub'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Usersname invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
    required: [true, 'Image is required']
  },
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: "Items"
  }],
  carts: [{
    type: Schema.Types.ObjectId,
    ref: "Items"
  }],
  // orders: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Orders
  // }
})

export const Users = models?.Users || model('Users', UsersSchema)
