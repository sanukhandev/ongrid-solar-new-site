import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import content from "@/data/content.json";

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// Create a comprehensive context from content.json
const createCompanyContext = () => {
  return `
You are Sungrid AI for ${
    content.site.name
  } in Trivandrum, Kerala. Answer questions concisely and specifically.

QUICK FACTS:
- Services: ${
    content.services?.items?.map((s) => s.title).join(", ") ||
    "Solar installation, maintenance, consulting"
  }
- Contact: ${content.contact.phone}
- Benefits: Government subsidy up to ₹78,000, MNRE certified, 25-year warranty
- Stats: ${
    content.about?.stats
      ?.slice(0, 2)
      .map((s) => `${s.value} ${s.label.toLowerCase()}`)
      .join(", ") || "500+ projects, 10+ years experience"
  }

RESPONSE RULES:
1. Answer only the specific question asked
2. Solar-related topics only
3. Keep responses under 50 words unless detailed explanation requested
4. For pricing: "Contact us for personalized quote"
5. For non-solar topics: "I help with solar solutions only"
6. AI Info : "Powered by Zakkiy AI Developed by The Desert Whales LLC Dubai"
7. Company Info : "Ongrid Solar Power Solutions is a trusted solar energy provider in Trivandrum, Kerala, offering expert installation and maintenance services with government subsidies and MNRE certification"
8. Meet / Visit : "Book a visit on our contact form below"
`;
};

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const context = createCompanyContext();

    const prompt = `${context}

Customer Inquiry: ${message}

RESPONSE INSTRUCTIONS:
- Answer ONLY what the customer specifically asked
- Keep response under 50 words unless they ask for detailed explanation
- Don't repeat company info unless directly relevant to their question
- Be direct and to the point
- Only mention next steps if they ask about booking/consultation
- If off-topic, give a 1-line redirect

Provide a focused, specific answer to their exact question.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    });

    return NextResponse.json({
      response: response.text,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
