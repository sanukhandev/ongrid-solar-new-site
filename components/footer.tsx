"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useContent } from "@/hooks/use-content";

type ContentType = {
  site: { name: string };
  contact: {
    phone: string;
    email: string;
    address: any;
  };
  footer?: {
    brandDescription?: string;
    contactTitle?: string;
    whatsappLabel?: string;
    servicesTitle?: string;
    services?: string[];
    description?: string;
    privacyPolicyLabel?: string;
    termsLabel?: string;
    designerPrefix?: string;
    designerName?: string;
    newsletter?: {
      title: string;
      description: string;
      emailPlaceholder?: string;
      subscribeLabel?: string;
    };
  };
};

export function Footer() {
  const data = useContent() as unknown as ContentType;
  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/SVG/logo.svg"
                    alt="OnGrid Solar logo"
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-lato font-bold text-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #ea580c 0%, #f97316 25%, #fb923c 50%, #fbbf24 75%, #f59e0b 100%)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      animation: "gradient-shift 4s ease-in-out infinite",
                      fontWeight: 900,
                      letterSpacing: "-0.025em",
                      filter: "drop-shadow(0 2px 4px rgba(234, 88, 12, 0.1))",
                      textShadow: "0 0 1px rgba(234, 88, 12, 0.2)",
                    }}
                  >
                    {data.site.name}
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                {data.footer?.brandDescription}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-lato font-bold mb-4">{data.footer?.contactTitle}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${data.contact.phone.replace(/[^+0-9]/g, "")}`}
                    className="flex items-center gap-2 text-white/70 hover:text-orange-400 transition-colors text-sm phone-link"
                  >
                    <Phone className="w-4 h-4" />
                    {data.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${data.contact.phone.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {data.footer?.whatsappLabel} {data.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="flex items-center gap-2 text-white/70 hover:text-orange-400 transition-colors text-sm break-all"
                  >
                    <Mail className="w-4 h-4" />
                    {data.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {data.contact.address.city}, {data.contact.address.state}
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-lato font-bold mb-4">{data.footer?.servicesTitle}</h3>
              <ul className="space-y-3">
                {data.footer?.services?.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-lato font-bold mb-4">{data.footer?.newsletter?.title}</h3>
              <p className="text-white/70 text-sm mb-4">
                {data.footer?.newsletter?.description}
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder={data.footer?.newsletter?.emailPlaceholder}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  {data.footer?.newsletter?.subscribeLabel}
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2025 {data.site.name}. All rights reserved. | MNRE Registered
                Vendor
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                >
                  {data.footer?.privacyPolicyLabel}
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                >
                  {data.footer?.termsLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Designer Credit Banner - Outside Footer */}
      <div className="bg-black py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-white/70 text-xs">
            {data.footer?.designerPrefix}{" "}
            <a
              href="https://thedesertwhales.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              {data.footer?.designerName}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
