import { NextRequest, NextResponse } from "next/server";

const CATEGORIES = ["sci-fi", "sports", "tech", "future", "creative"] as const;

export async function POST(req: NextRequest) {
  const { title, author, subjects } = await req.json();

  const prompt = `You are a book categorizer. Given a book's title, author, and subjects, pick the best matching category from this list:
- sci-fi: science fiction, fantasy, space, dystopia, robots, magic, supernatural
- sports: athletics, any sport, fitness, competition
- tech: technology, computers, programming, engineering, science, innovation
- future: futurism, post-apocalyptic, utopia, next generation, cyberpunk
- creative: art, writing, music, design, photography, film, crafts, poetry

Book: "${title}" by ${author}
Subjects: ${subjects.slice(0, 8).join(", ")}

Respond with ONLY valid JSON, no markdown:
{
  "category": "sci-fi" | "sports" | "tech" | "future" | "creative" | "none",
  "confidence": "high" | "low",
  "reason": "one short sentence"
}

If the book clearly fits a category, use confidence "high". If it's unclear or doesn't fit any, use "none" with confidence "low".`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        max_tokens: 150,
      }),
    });

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "";
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const result = JSON.parse(cleaned);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ category: "none", confidence: "low", reason: "Could not categorize" });
  }
}
