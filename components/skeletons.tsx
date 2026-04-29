import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative pt-28 pb-20 md:pt-34 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Skeleton className="h-10 w-64 rounded-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-24 w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-full rounded-lg" />
              ))}
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <Skeleton className="h-[500px] w-full rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
            <Skeleton className="h-32 w-full rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/3" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="w-5 h-5 rounded-full flex-shrink-0" />
                  <Skeleton className="h-6 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/50 to-yellow-50/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-20 w-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Skeleton className="w-14 h-14 rounded-xl" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-8 w-64 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-6">
              <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Skeleton className="w-5 h-5 rounded-full flex-shrink-0" />
                    <Skeleton className="h-6 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-10 w-48 rounded-full mx-auto" />
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-10 w-48 rounded-full mx-auto" />
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[1, 2].map((col) => (
              <div key={col} className="space-y-4">
                <Skeleton className="h-8 w-1/3 mb-6" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50/30 via-yellow-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-8 w-64 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-700 space-y-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            </div>
            <Skeleton className="h-32 w-full" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-3 h-3 rounded-full" />
              ))}
            </div>
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-48 rounded-full mx-auto" />
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-48 rounded-full mx-auto" />
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Skeleton key={i} className="h-64 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-48 rounded-full mx-auto" />
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
                <Skeleton className="w-12 h-12 rounded-full" />
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-8 w-2/3" />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASkeleton() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <Skeleton className="h-16 w-3/4 mx-auto bg-white/20" />
          <Skeleton className="h-20 w-full bg-white/20" />
          <div className="flex items-center justify-center gap-4">
            <Skeleton className="h-14 w-48 bg-white/30" />
            <Skeleton className="h-14 w-48 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-6 w-1/2 bg-gray-700" />
              {[1, 2, 3, 4].map((j) => (
                <Skeleton key={j} className="h-4 w-3/4 bg-gray-700" />
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 space-y-4">
          <Skeleton className="h-4 w-full max-w-xl mx-auto bg-gray-700" />
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="w-10 h-10 rounded-full bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
