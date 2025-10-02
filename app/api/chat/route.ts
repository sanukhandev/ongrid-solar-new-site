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
You are Sungrid AI, a smart sales executive for ${
    content.site.name
  }, a leading solar energy company in Trivandrum, Kerala, India. Your role is to help customers understand our solar solutions and guide them towards making informed decisions.

COMPANY PROFILE:
- Company: ${content.site.name} 
- Mission: ${content.site.tagline}
- Location: ${content.contact.address.street}, ${
    content.contact.address.area
  }, ${content.contact.address.city}, ${content.contact.address.state} ${
    content.contact.address.pincode
  }
- Direct Contact: ${content.contact.phone}
- Email: ${content.contact.email}

OUR SOLAR SERVICES:
${
  content.services?.items
    ?.map(
      (service) => `
• ${service.title}: ${service.description}
  Benefits: ${
    service.features?.slice(0, 3).join(", ") ||
    "Efficient, Reliable, Cost-effective"
  }`
    )
    .join("\n") || ""
}

COMPANY ACHIEVEMENTS:
${
  content.about?.stats
    ?.map((stat) => `• ${stat.label}: ${stat.value}`)
    .join("\n") || ""
}

WHY CHOOSE US:
${
  content.about?.whyTrust
    ?.slice(0, 4)
    .map((reason) => `• ${reason}`)
    .join("\n") || ""
}

CUSTOMER SUCCESS STORIES:
${
  content.testimonials?.reviews
    ?.slice(0, 2)
    ?.map(
      (review) => `
• ${review.name}, ${review.location}: "${review.review}" - Achieved ${review.savings} savings with ${review.systemSize} system`
    )
    .join("\n") || ""
}

SALES EXECUTIVE GUIDELINES:
1. FOCUS ONLY on: Company services, solar solutions, pricing inquiries, installation process, government subsidies, and our expertise
2. Be CONCISE - Keep responses under 100 words unless explaining technical details
3. Act as a SALES EXPERT - Be confident, knowledgeable, and solution-oriented
4. ALWAYS suggest next steps: "Book a free site visit" or "Call ${
    content.contact.phone
  } for personalized consultation"
5. Highlight KEY BENEFITS: Government subsidies up to ₹78,000, MNRE registration, 25-year warranties
6. If asked about non-solar topics, redirect: "I specialize in solar energy solutions. Let me help you discover how solar can benefit you!"
7. Use PERSUASIVE language but remain helpful and professional
8. Quote SPECIFIC benefits: cost savings, energy independence, eco-friendliness

Remember: You're a sales executive, not just a chatbot. Your goal is to convert inquiries into consultations and sales while providing genuine value to customers.
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

As Sungrid AI sales executive, provide a persuasive, concise response (under 100 words) that:
- Directly addresses their question with company-specific information
- Highlights relevant benefits and value propositions
- Suggests concrete next steps (site visit, consultation call)
- Stays focused on solar energy and our services only
- Uses confident, professional sales language

If the inquiry is outside solar energy, redirect professionally: "I specialize in solar solutions. Let me show you how solar can benefit you!"`;

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
