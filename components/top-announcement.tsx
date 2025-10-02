"use client";

import { Phone, CreditCard, Gift, MapPin, Mail } from "lucide-react";
import content from "@/data/content.json";

type ContentType = {
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
    };
  };
};

export function TopAnnouncement() {
  const data = content as unknown as ContentType;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-1.5 sm:py-2 overflow-hidden shadow-lg border-b border-orange-700/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1.5 sm:gap-3">
          {/* Left Section - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-xs order-2 lg:order-1">
            {/* Address */}
            <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5">
              <MapPin className="w-3 h-3 text-yellow-300 flex-shrink-0" />
              <span className="font-medium text-xs">
                {data.contact.address.area}, {data.contact.address.city}
              </span>
            </div>

            {/* Email */}
            <a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5 hover:bg-white/25 transition-all duration-300 group"
            >
              <Mail className="w-3 h-3 text-yellow-300 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-medium text-xs group-hover:text-yellow-100 truncate max-w-[180px]">
                {data.contact.email}
              </span>
            </a>
          </div>

          {/* Center Section - Key Messages */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center order-1 lg:order-2">
            {/* EMI Options */}
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/30">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs font-bold text-yellow-100">
                EMI AVAILABLE
              </span>
            </div>

            <div className="hidden sm:inline text-white/60 text-xs">•</div>

            {/* Subsidy Message */}
            <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1">
              <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="font-semibold text-xs">₹78K Subsidy</span>
            </div>
          </div>

          {/* Right Section - Phone */}
          <div className="order-3">
            <a
              href={`tel:${data.contact.phone}`}
              className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/30 hover:bg-white/30 transition-all duration-300 group animate-pulse hover:animate-none"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-yellow-100 group-hover:text-white">
                {data.contact.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Simplified background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1 left-4 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-0.5 right-12 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1 right-24 w-2 h-2 bg-white/10 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
}
