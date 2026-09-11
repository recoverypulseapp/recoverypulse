import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("recoverypulse");

    const users = await db.collection("users").find({}).toArray();

    return new Response(JSON.stringify({
      success: true,
      users
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500 });
  }
}
