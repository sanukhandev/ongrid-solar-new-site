"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import content from "@/data/content.json";

type ContentType = {
  site: { name: string };
  contact: {
    phone: string;
    email: string;
    address: any;
  };
  footer?: {
    description?: string;
    newsletter?: {
      title: string;
      description: string;
    };
  };
};

export function Footer() {
  const data = content as unknown as ContentType;
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
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-lato font-bold text-xl">
                    {data.site.name}
                  </span>
                  <span className="font-lato text-sm text-white/70">
                    OnGrid Solar Power Solutions Pvt Ltd
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Leading solar installation company in Trivandrum. MNRE
                registered vendor providing government-approved solar solutions
                with up to ₹78,000 subsidy.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-lato font-bold mb-4">Contact Info</h3>
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
                    WhatsApp {data.contact.phone}
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
              <h3 className="font-lato font-bold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                  >
                    Residential Solar
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                  >
                    Commercial Solar
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                  >
                    Maintenance & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                  >
                    Battery Storage
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-lato font-bold mb-4">Stay Updated</h3>
              <p className="text-white/70 text-sm mb-4">
                Get the latest solar news and exclusive offers
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Subscribe
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
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-orange-400 transition-colors text-sm"
                >
                  Terms of Service
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
            Designed and Made by{" "}
            <a
              href="https://thedesertwhales.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              The DesertWhales LLC Dubai
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
