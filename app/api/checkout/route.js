import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
  });

  return Response.json({ url: session.url });
}
