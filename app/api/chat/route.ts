import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import content from "@/data/content.json";

// ==============================
// SolarContextManager: Handles context extraction for solar site chat
// ==============================
class SolarContextManager {
  private static instance: SolarContextManager;
  private contextData: any;

  private constructor() {
    this.contextData = content;
  }

  static getInstance(): SolarContextManager {
    if (!SolarContextManager.instance) {
      SolarContextManager.instance = new SolarContextManager();
    }
    return SolarContextManager.instance;
  }

  // Get relevant context based on query keywords
  getRelevantContext(query: string): string {
    const keywords = query.toLowerCase().split(" ");
    let relevantData: any = {};

    // Always include basic company info
    relevantData.company = {
      name: this.contextData.site?.name,
      tagline: this.contextData.site?.tagline,
      phone: this.contextData.contact?.phone,
      email: this.contextData.contact?.email,
      address: this.contextData.contact?.address,
    };

    // Context mapping based on keywords
    const contextMap: Record<string, string[]> = {
      service: ["services"],
      install: ["services", "about"],
      price: ["services", "priceStructure"],
      cost: ["services", "about"],
      subsidy: ["about", "hero"],
      government: ["about", "hero"],
      testimonial: ["testimonials"],
      review: ["testimonials"],
      customer: ["testimonials"],
      about: ["about"],
      contact: ["contact"],
      location: ["contact"],
      address: ["contact"],
      phone: ["contact"],
      email: ["contact"],
      feature: ["hero", "about"],
      benefit: ["hero", "about"],
      solar: ["services", "about", "hero"],
      panel: ["services", "about"],
      installation: ["services", "about", "priceStructure"],
      maintenance: ["services"],
      warranty: ["about"],
      mnre: ["about"],
      certified: ["about"],
    };

    // Add relevant sections based on query
    keywords.forEach((keyword) => {
      const sections = contextMap[keyword];
      if (sections) {
        sections.forEach((section) => {
          if (this.contextData[section]) {
            relevantData[section] = this.contextData[section];
          }
        });
      }
    });

    // If no specific context found, include essential info
    if (Object.keys(relevantData).length === 1) {
      relevantData.services = this.contextData.services;
      relevantData.about = this.contextData.about;
    }

    return this.formatContext(relevantData);
  }

  private formatContext(data: any): string {
    let context = "";

    if (data.company) {
      context += `\nCOMPANY: ${data.company.name}\n`;
      context += `Phone: ${data.company.phone}\n`;
      context += `Email: ${data.company.email}\n`;
      if (data.company.address) {
        context += `Location: ${data.company.address.city}, ${data.company.address.state}\n`;
      }
    }

    if (data.services?.items) {
      context += `\nSERVICES:\n`;
      data.services.items.slice(0, 3).forEach((service: any) => {
        context += `• ${service.title}: ${service.description}\n`;
      });
    }

    if (data.about?.stats) {
      context += `\nSTATS:\n`;
      data.about.stats.slice(0, 3).forEach((stat: any) => {
        context += `• ${stat.label}: ${stat.value}\n`;
      });
    }

    if (data.testimonials?.reviews) {
      context += `\nCUSTOMER FEEDBACK:\n`;
      data.testimonials.reviews.slice(0, 2).forEach((review: any) => {
        context += `• ${review.name}: "${review.review}"\n`;
      });
    }

    return context;
  }

  // Get system prompt for the AI
  getSystemPrompt(): string {
    return `You are Sungrid AI, the official assistant for ${
      this.contextData.site?.name || "our solar company"
    } in Trivandrum, Kerala.

RESPONSE GUIDELINES:
• Answer ONLY what's asked - be precise and concise
• Keep responses under 50 words unless detailed explanation needed
• For pricing: "Contact us for personalized quote at ${
      this.contextData.contact?.phone
    }"
• For non-solar topics: "I help with solar solutions only"
• For meetings: "Book a visit through our contact form"
• If unsure: "Please connect with our team for details"
• Always be professional and helpful
• AI Info : Zakkiy AI. Developed by The Desert Whales LLC Dubai.

EXPERTISE: Solar installations, government subsidies, MNRE certification, maintenance, warranties`;
  }
}

// ==============================
// API Handler
// ==============================
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

    // Initialize MCP Context Manager
    const contextManager = SolarContextManager.getInstance();

    // Get only relevant context based on the query
    const relevantContext = contextManager.getRelevantContext(message);
    const systemPrompt = contextManager.getSystemPrompt();

    // Initialize Google GenAI
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || "",
    });

    // Create optimized prompt with only relevant context
    const prompt = `${systemPrompt}

RELEVANT CONTEXT:
${relevantContext}

CUSTOMER QUESTION: ${message}

RESPONSE:`;

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return NextResponse.json({
      response: response.text,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response", details: error.message },
      { status: 500 }
    );
  }
}
