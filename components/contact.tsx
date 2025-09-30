"use client";

import content from "@/data/content.json";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContentType = {
  contact: {
    title: string;
    subtitle: string;
    address: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
    };
    phone: string;
    email: string;
    cta: string;
  };
};

export function Contact() {
  const data = content as unknown as ContentType;

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            {data.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {data.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Visit Our Office
                    </h3>
                    <address className="text-gray-700 dark:text-gray-300 not-italic leading-relaxed">
                      {data.contact.address.street}
                      <br />
                      {data.contact.address.area}
                      <br />
                      {data.contact.address.city}, {data.contact.address.state}{" "}
                      {data.contact.address.pincode}
                    </address>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-medium"
                    >
                      {data.contact.phone}
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available 9 AM - 6 PM (Mon-Sat)
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors break-all"
                    >
                      {data.contact.email}
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {data.contact.cta}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <h3 className="font-lato font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Get Your Free Quote
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  System Size (kW)
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select system size</option>
                  <option value="1">1 kW (₹30,000 subsidy)</option>
                  <option value="2">2 kW (₹60,000 subsidy)</option>
                  <option value="3">3 kW (₹78,000 subsidy)</option>
                  <option value="5">5 kW</option>
                  <option value="10">10 kW+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your energy needs..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Get Free Quote Now
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                * Required fields. We respect your privacy and will never share
                your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
