import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("recoverypulse");

    const collections = await db.listCollections().toArray();

    return new Response(JSON.stringify({
      success: true,
      message: "Connected to MongoDB!",
      collections
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500 });
  }
}
