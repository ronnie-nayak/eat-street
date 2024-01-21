import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  favourites: [
    new Schema(
      {
        refId: { type: Schema.Types.ObjectId, ref: "Items" },
      },
      { _id: false },
    ),
  ],
  carts: [
    new Schema(
      {
        refId: { type: Schema.Types.ObjectId, ref: "Items" },
        quantity: { type: Number, default: 1 },
      },
      { _id: false },
    ),
  ],
  // orders: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Orders
  // }
});

export const Users = models?.Users || model("Users", UsersSchema);
