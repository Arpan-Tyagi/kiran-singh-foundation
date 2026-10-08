import { NextRequest, NextResponse } from "next/server";
import { generateEditorialDraft, EditorialDraftRequest } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as EditorialDraftRequest;

    if (!body || !body.rawNotes || typeof body.rawNotes !== "string") {
      return NextResponse.json(
        { error: "Field 'rawNotes' is required and must be a valid string." },
        { status: 400 }
      );
    }

    if (!body.type || !["blog_post", "event_announcement"].includes(body.type)) {
      return NextResponse.json(
        { error: "Field 'type' must be either 'blog_post' or 'event_announcement'." },
        { status: 400 }
      );
    }

    const draft = await generateEditorialDraft({
      type: body.type,
      rawNotes: body.rawNotes,
      targetTone: body.targetTone || "institutional",
      topic: body.topic,
    });

    return NextResponse.json(draft, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/ai/draft:", error);
    return NextResponse.json(
      { error: "Internal Server Error in Editorial Assistant", details: error?.message },
      { status: 500 }
    );
  }
}
