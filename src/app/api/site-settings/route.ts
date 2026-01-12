import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/sanity/fetch";

export async function GET() {
  try {
    const siteSettings = await getSiteSettings();
    return NextResponse.json(siteSettings);
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch site settings" },
      { status: 500 }
    );
  }
}

