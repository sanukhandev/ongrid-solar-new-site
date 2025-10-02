"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  category: string;
}

// Media files from projects folder
const mediaFiles = [
  { name: "10Kw.jpeg", type: "image" as const },
  { name: "3Kw.jpeg", type: "image" as const },
  { name: "5Kw.jpeg", type: "image" as const },
  { name: "Best solar company.jpeg", type: "image" as const },
  { name: "Hybrid Installation.jpeg", type: "image" as const },
  { name: "Hybrid Solar.jpeg", type: "image" as const },
  { name: "MNRE vendor.jpeg", type: "image" as const },
  { name: "peyad 40Kw.jpeg", type: "image" as const },
  { name: "Rooftop solar.jpeg", type: "image" as const },
  { name: "Sheetroof Solar.jpeg", type: "image" as const },
  { name: "Solar installation.jpeg", type: "image" as const },
  { name: "Solar subsidy.jpeg", type: "image" as const },
  { name: "Solar work .jpeg", type: "image" as const },
  { name: "Trivandrum solar.jpeg", type: "image" as const },
  { name: "utl inverter.jpeg", type: "image" as const },
  { name: "vembayam 100Kw.jpeg", type: "image" as const },
  {
    name: "WhatsApp Video 2025-10-02 at 12.20.33 AM (1).mp4",
    type: "video" as const,
  },
  {
    name: "WhatsApp Video 2025-10-02 at 12.20.33 AM.mp4",
    type: "video" as const,
  },
  {
    name: "WhatsApp Video 2025-10-02 at 12.20.34 AM (1).mp4",
    type: "video" as const,
  },
  {
    name: "WhatsApp Video 2025-10-02 at 12.20.34 AM.mp4",
    type: "video" as const,
  },
];

// Function to generate title from filename
const generateTitle = (filename: string): string => {
  return filename
    .replace(/\.(jpeg|jpg|mp4|png|webp)$/i, "")
    .replace(/WhatsApp Video.*/, "Installation Video")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

// Function to categorize media
const categorizeMedia = (filename: string): string => {
  const lower = filename.toLowerCase();
  if (lower.includes("video") || lower.includes(".mp4")) return "Videos";
  if (
    lower.includes("kw") ||
    lower.includes("peyad") ||
    lower.includes("vembayam")
  )
    return "Commercial";
  if (
    lower.includes("rooftop") ||
    lower.includes("hybrid") ||
    lower.includes("installation")
  )
    return "Residential";
  if (
    lower.includes("company") ||
    lower.includes("mnre") ||
    lower.includes("subsidy")
  )
    return "Certifications";
  return "Projects";
};

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Videos",
  "Certifications",
  "Projects",
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Generate gallery items from media files
    const items: MediaItem[] = mediaFiles.map((file, index) => ({
      id: (index + 1).toString(),
      type: file.type,
      src: `/projects/${file.name}`,
      thumbnail:
        file.type === "video"
          ? `/projects/${file.name}`
          : `/projects/${file.name}`,
      title: generateTitle(file.name),
      category: categorizeMedia(file.name),
    }));
    setGalleryItems(items);
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const openMediaViewer = (item: MediaItem) => {
    setSelectedMedia(item);
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id));
  };

  const navigateMedia = (direction: "prev" | "next") => {
    if (!selectedMedia) return;

    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;

    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  };

  return (
    <section className="py-24 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our completed solar installations across Trivandrum and
            Kerala. From residential rooftops to commercial solar farms, see the
            quality and craftsmanship that sets OnGrid Solar apart.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Media Type Indicator */}
                {item.type === "video" && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 hover:bg-red-700">
                      <Play className="w-3 h-3 mr-1" />
                      Video
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>

                {/* View Button */}
                <button
                  onClick={() => openMediaViewer(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors">
                    <Eye className="w-6 h-6 text-gray-900" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.category}</span>
                  <span>{item.type === "video" ? "🎥" : "📸"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No media found in this category.
            </p>
          </div>
        )}

        {/* Media Viewer Modal */}
        <Dialog
          open={!!selectedMedia}
          onOpenChange={() => setSelectedMedia(null)}
        >
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black">
            {selectedMedia && (
              <div className="relative w-full h-full flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateMedia("prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => navigateMedia("next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Media Content */}
                <div className="flex-1 relative">
                  {selectedMedia.type === "image" ? (
                    <Image
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <video
                      src={selectedMedia.src}
                      controls
                      className="w-full h-full object-contain"
                      autoPlay
                    />
                  )}
                </div>

                {/* Media Info */}
                <div className="bg-black/80 backdrop-blur-sm text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      {selectedMedia.title}
                    </h3>
                    <Badge variant="secondary">{selectedMedia.category}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>
                      {selectedMedia.type === "video" ? "🎥 Video" : "📸 Image"}
                    </span>
                    <span>
                      {currentIndex + 1} / {filteredItems.length}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
