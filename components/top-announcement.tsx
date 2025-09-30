"use client";

import { Phone, CreditCard, Gift } from "lucide-react";
import content from "@/data/content.json";

type ContentType = {
  contact: {
    phone: string;
  };
};

export function TopAnnouncement() {
  const data = content as unknown as ContentType;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 sm:py-3 overflow-hidden shadow-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          {/* EMI Options - Highlighted */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 border border-white/30">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            <span className="text-xs sm:text-sm font-bold text-yellow-100">
              EMI OPTIONS AVAILABLE
            </span>
          </div>

          {/* Separator - Hidden on mobile */}
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>

          {/* Main message */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <span className="font-medium">Best & Affordable Solar Panel Installation</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="font-semibold">Subsidy up to ₹78,000</span>
            </div>
          </div>

          {/* Separator - Hidden on mobile */}
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>

          {/* Phone Number - Highlighted */}
          <a
            href={`tel:${data.contact.phone}`}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 border border-white/30 hover:bg-white/30 transition-all duration-300 group animate-pulse hover:animate-none"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-yellow-100 group-hover:text-white">
              {data.contact.phone}
            </span>
          </a>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1 -left-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1 right-8 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute -bottom-1 right-16 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}