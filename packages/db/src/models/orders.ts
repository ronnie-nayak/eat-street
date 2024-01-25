import { Schema, model, models } from "mongoose";

const OrdersSchema = new Schema({
  products: [
    new Schema(
      {
        refId: { type: Schema.Types.ObjectId, ref: "Items" },
        quantity: { type: Number },
      },
      { _id: false },
    ),
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

export const Orders = models?.Orders || model("Orders", OrdersSchema);
