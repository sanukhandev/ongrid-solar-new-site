import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import content from "@/data/content.json";

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// ==============================
// SolarContextManager: Enhanced MCP for better price and installation context
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

  // Enhanced context extraction with better price and installation keyword mapping
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

    // Enhanced context mapping with more price and installation keywords
    const contextMap: Record<string, string[]> = {
      // Service related
      service: ["services"],
      services: ["services"],
      
      // Installation related - Enhanced
      install: ["services", "installationDetails"],
      installation: ["services", "installationDetails"],
      process: ["installationDetails"],
      timeline: ["installationDetails"],
      steps: ["installationDetails"],
      procedure: ["installationDetails"],
      how: ["installationDetails", "services"],
      setup: ["installationDetails"],
      requirement: ["installationDetails"],
      duration: ["installationDetails"],
      
      // Price related - Enhanced
      price: ["priceStructure", "services"],
      pricing: ["priceStructure", "services"],
      cost: ["priceStructure", "services"],
      rates: ["priceStructure"],
      quote: ["priceStructure", "services"],
      estimate: ["priceStructure", "services"],
      expensive: ["priceStructure"],
      cheap: ["priceStructure"],
      affordable: ["priceStructure"],
      budget: ["priceStructure"],
      money: ["priceStructure"],
      rupees: ["priceStructure"],
      lakh: ["priceStructure"],
      thousand: ["priceStructure"],
      finance: ["priceStructure"],
      financing: ["priceStructure"],
      loan: ["priceStructure"],
      emi: ["priceStructure"],
      
      // Government benefits
      subsidy: ["about", "hero", "priceStructure"],
      government: ["about", "hero", "priceStructure"],
      scheme: ["about", "priceStructure"],
      benefit: ["priceStructure", "about"],
      
      // Customer feedback
      testimonial: ["testimonials"],
      review: ["testimonials"],
      customer: ["testimonials"],
      feedback: ["testimonials"],
      
      // Company info
      about: ["about"],
      company: ["about"],
      
      // Contact
      contact: ["contact"],
      location: ["contact"],
      address: ["contact"],
      phone: ["contact"],
      email: ["contact"],
      call: ["contact"],
      
      // Technical
      feature: ["hero", "about", "services"],
      solar: ["services", "about", "hero"],
      panel: ["services", "about"],
      maintenance: ["services", "installationDetails"],
      warranty: ["about", "services"],
      mnre: ["about"],
      certified: ["about"],
      capacity: ["services", "priceStructure"],
      kw: ["services", "priceStructure"],
      kwh: ["services", "priceStructure"],
      unit: ["services", "priceStructure"],
    };

    // Collect relevant sections based on keywords
    const relevantSections = new Set<string>();
    keywords.forEach(keyword => {
      const sections = contextMap[keyword];
      if (sections) {
        sections.forEach(section => relevantSections.add(section));
      }
    });

    // Include relevant data sections
    relevantSections.forEach(section => {
      if (this.contextData[section]) {
        relevantData[section] = this.contextData[section];
      }
    });

    // If no specific matches, include basic info
    if (relevantSections.size === 0) {
      relevantData.services = this.contextData.services;
      relevantData.about = this.contextData.about;
    }

    return this.formatContext(relevantData);
  }

  // Enhanced context formatting for better price and installation presentation
  private formatContext(data: any): string {
    let context = "";

    // Company information
    if (data.company) {
      context += `\nCOMPANY INFO:\n`;
      context += `• Name: ${data.company.name}\n`;
      context += `• Mission: ${data.company.tagline}\n`;
      context += `• Phone: ${data.company.phone}\n`;
      context += `• Email: ${data.company.email}\n`;
      if (data.company.address) {
        context += `• Location: ${data.company.address.street}, ${data.company.address.area}, ${data.company.address.city}\n`;
      }
    }

    // Services
    if (data.services) {
      context += `\nOUR SERVICES:\n`;
      data.services.items?.forEach((service: any) => {
        context += `• ${service.title}: ${service.description}\n`;
        if (service.features) {
          context += `  Benefits: ${service.features.slice(0, 3).join(", ")}\n`;
        }
      });
    }

    // Enhanced Price Structure formatting
    if (data.priceStructure) {
      context += `\nPRICING INFORMATION:\n`;
      
      if (data.priceStructure.overview) {
        context += `Overview: ${data.priceStructure.overview}\n`;
      }
      
      if (data.priceStructure.systems) {
        context += `\nSystem Packages:\n`;
        data.priceStructure.systems.forEach((system: any) => {
          context += `• ${system.capacity}: ₹${system.price} (${system.description})\n`;
          if (system.features) {
            context += `  Features: ${system.features.join(", ")}\n`;
          }
          if (system.savings) {
            context += `  Monthly Savings: ${system.savings}\n`;
          }
        });
      }
      
      if (data.priceStructure.subsidies) {
        context += `\nGovernment Benefits:\n`;
        data.priceStructure.subsidies.forEach((subsidy: any) => {
          context += `• ${subsidy.type}: ${subsidy.amount} (${subsidy.description})\n`;
        });
      }
      
      if (data.priceStructure.financing) {
        context += `\nFinancing Options:\n`;
        data.priceStructure.financing.forEach((option: any) => {
          context += `• ${option.type}: ${option.details}\n`;
        });
      }
    }

    // Enhanced Installation Details formatting
    if (data.installationDetails) {
      context += `\nINSTALLATION PROCESS:\n`;
      
      if (data.installationDetails.overview) {
        context += `Overview: ${data.installationDetails.overview}\n`;
      }
      
      if (data.installationDetails.timeline) {
        context += `Timeline: ${data.installationDetails.timeline}\n`;
      }
      
      if (data.installationDetails.process) {
        context += `\nStep-by-Step Process:\n`;
        data.installationDetails.process.forEach((step: any, index: number) => {
          context += `${index + 1}. ${step.step}: ${step.description}\n`;
          if (step.duration) {
            context += `   Duration: ${step.duration}\n`;
          }
        });
      }
      
      if (data.installationDetails.requirements) {
        context += `\nRequirements:\n`;
        data.installationDetails.requirements.forEach((req: string) => {
          context += `• ${req}\n`;
        });
      }
      
      if (data.installationDetails.postInstallation) {
        context += `\nPost-Installation:\n`;
        data.installationDetails.postInstallation.forEach((item: string) => {
          context += `• ${item}\n`;
        });
      }
    }

    // About company
    if (data.about) {
      context += `\nWHY CHOOSE US:\n`;
      if (data.about.stats) {
        data.about.stats.forEach((stat: any) => {
          context += `• ${stat.label}: ${stat.value}\n`;
        });
      }
      if (data.about.whyTrust) {
        data.about.whyTrust.slice(0, 4).forEach((reason: string) => {
          context += `• ${reason}\n`;
        });
      }
    }

    // Customer testimonials
    if (data.testimonials) {
      context += `\nCUSTOMER REVIEWS:\n`;
      data.testimonials.reviews?.slice(0, 2).forEach((review: any) => {
        context += `• ${review.name}, ${review.location}: "${review.review}" - ${review.savings} savings\n`;
      });
    }

    // Hero highlights
    if (data.hero) {
      context += `\nKEY HIGHLIGHTS:\n`;
      data.hero.highlights?.slice(0, 4).forEach((highlight: string) => {
        context += `• ${highlight}\n`;
      });
    }

    // Contact information
    if (data.contact) {
      context += `\nCONTACT INFO:\n`;
      context += `• Phone: ${data.contact.phone}\n`;
      context += `• Email: ${data.contact.email}\n`;
      if (data.contact.address) {
        context += `• Address: ${data.contact.address.street}, ${data.contact.address.area}, ${data.contact.address.city}\n`;
      }
    }

    return context;
  }

  // Enhanced system prompt for better price and installation responses
  getSystemPrompt(): string {
    return `You are Sungrid AI, the official sales assistant for ${
      this.contextData.site?.name || "our solar company"
    } in Trivandrum, Kerala.

RESPONSE GUIDELINES:
• Answer ONLY what's specifically asked - be precise and targeted
• Keep responses under 80 words unless detailed pricing/installation explanation needed
• For pricing queries: Provide specific package details from context, then suggest "Call ${
      this.contextData.contact?.phone
    } for personalized quote"
• For installation queries: Give step-by-step process from context with timeline
• For non-solar topics: "I specialize in solar solutions only. How can I help with your solar needs?"
• For detailed consultations: "Book a free site visit by calling ${
      this.contextData.contact?.phone
    }"
• Always be professional, confident, and sales-oriented
• Focus on benefits, savings, and value propositions
• Mention government subsidies when relevant

Remember: You're a sales expert, not just an assistant. Convert inquiries into leads!`;
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

    const contextManager = SolarContextManager.getInstance();
    const relevantContext = contextManager.getRelevantContext(message);
    const systemPrompt = contextManager.getSystemPrompt();

    const prompt = `${systemPrompt}

${relevantContext}

Customer Question: ${message}

Provide a targeted, sales-focused response that directly answers their question using the context above. Be concise but persuasive.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    });

    return NextResponse.json({
      response: response.text,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error.message 
      },
      { status: 500 }
    );
  }
}