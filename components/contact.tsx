"use client";

import { useContent } from "@/hooks/use-content";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";

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
    form: {
      officeTitle: string;
      callTitle: string;
      callAvailability: string;
      emailTitle: string;
      emailResponse: string;
      mobileCta: string;
      quoteTitle: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      systemSizeLabel: string;
      systemSizePlaceholder: string;
      systemSizeOptions: { value: string; label: string }[];
      roofTypeLabel: string;
      roofTypePlaceholder: string;
      roofTypeOptions: { value: string; label: string }[];
      locationLabel: string;
      locationPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitText: string;
      privacyText: string;
      whatsapp: {
        intro: string;
        detailsHeader: string;
        nameLabel: string;
        phoneLabel: string;
        emailLabel: string;
        systemSizeLabel: string;
        roofTypeLabel: string;
        locationLabel: string;
        messageLabel: string;
        closing: string;
      };
    };
  };
};

export function Contact() {
  const data = useContent() as unknown as ContentType;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    systemSize: "",
    roofType: "",
    location: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsapp = data.contact.form.whatsapp;

    // Resolve human-readable label for system size
    const systemSizeLabel =
      data.contact.form.systemSizeOptions.find(
        (opt) => opt.value === formData.systemSize
      )?.label ?? "";

    // Create WhatsApp message
    const whatsappMessage = `${whatsapp.intro}

*${whatsapp.detailsHeader}:*
${whatsapp.nameLabel}: ${formData.name}
${whatsapp.phoneLabel}: ${formData.phone}
${whatsapp.emailLabel}: ${formData.email}
${formData.systemSize ? `${whatsapp.systemSizeLabel}: ${systemSizeLabel}` : ""}
${formData.roofType ? `${whatsapp.roofTypeLabel}: ${formData.roofType}` : ""}
${formData.location ? `${whatsapp.locationLabel}: ${formData.location}` : ""}

${formData.message ? `*${whatsapp.messageLabel}:*\n${formData.message}` : ""}

${whatsapp.closing}`;

    // Clean phone number for WhatsApp (remove spaces, brackets, hyphens)
    const cleanPhone = data.contact.phone.replace(/[^+\d]/g, "");

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 px-2">
          <h2 className="font-lato font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-white leading-tight break-words hyphens-auto">
            {data.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed break-words">
            {data.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start max-w-none overflow-hidden">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="backdrop-blur-sm bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800 p-4 sm:p-6 rounded-2xl">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {data.contact.form.officeTitle}
                    </h3>
                    <address className="text-sm sm:text-base text-gray-700 dark:text-gray-300 not-italic leading-relaxed">
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

              <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 p-4 sm:p-6 rounded-2xl">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {data.contact.form.callTitle}
                    </h3>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base sm:text-lg font-medium block"
                    >
                      {data.contact.phone}
                    </a>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {data.contact.form.callAvailability}
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 p-4 sm:p-6 rounded-2xl">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {data.contact.form.emailTitle}
                    </h3>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base break-all overflow-wrap-anywhere word-break-break-all block"
                    >
                      {data.contact.email}
                    </a>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {data.contact.form.emailResponse}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full sm:w-auto px-4 sm:px-6 py-3 text-xs sm:text-sm md:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate min-w-0">
                  <span className="hidden sm:inline">{data.contact.cta}</span>
                  <span className="sm:hidden">{data.contact.form.mobileCta}</span>
                </span>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <h3 className="font-lato font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">
                  {data.contact.form.quoteTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {data.contact.form.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                    placeholder={data.contact.form.fullNamePlaceholder}
                  />
                </div>
                <div className="min-w-0">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {data.contact.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                    placeholder={data.contact.form.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {data.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                  placeholder={data.contact.form.emailPlaceholder}
                />
              </div>

              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {data.contact.form.systemSizeLabel}
                </label>
                <select
                  name="systemSize"
                  value={formData.systemSize}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                >
                  <option value="">{data.contact.form.systemSizePlaceholder}</option>
                  {data.contact.form.systemSizeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {data.contact.form.roofTypeLabel}
                </label>
                <select
                  name="roofType"
                  value={formData.roofType}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                >
                  <option value="">{data.contact.form.roofTypePlaceholder}</option>
                  {data.contact.form.roofTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {data.contact.form.locationLabel}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base max-w-full"
                  placeholder={data.contact.form.locationPlaceholder}
                />
              </div>

              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {data.contact.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none max-w-full"
                  placeholder={data.contact.form.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 sm:py-3 text-sm sm:text-base font-medium min-w-0"
              >
                <span className="truncate">{data.contact.form.submitText}</span>
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed break-words">
                {data.contact.form.privacyText}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
