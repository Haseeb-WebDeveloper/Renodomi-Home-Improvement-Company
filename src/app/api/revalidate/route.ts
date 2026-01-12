import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity (optional but recommended)
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    // Revalidate the home page
    revalidatePath("/");
    
    // Also revalidate site settings API route
    revalidatePath("/api/site-settings");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Home page and site settings revalidated successfully",
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}

