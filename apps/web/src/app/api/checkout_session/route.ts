import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Props } from "../../../../../../packages/ui/src/types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { page, shipping } = await req.json();

  const lineItems = page.map((item: { refId: Props; quantity: number }) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.refId.name,
        },
        unit_amount: item.refId.price * 100,
      },
      quantity: item.quantity,
    };
  });

  lineItems.push({
    price_data: {
      currency: "usd",
      product_data: {
        name: "Shipping",
      },
      unit_amount: shipping * 100,
    },
    quantity: 1,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${headersList.get("origin")}/homepage/thankyou`,
      cancel_url: `${headersList.get("origin")}/homepage`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
