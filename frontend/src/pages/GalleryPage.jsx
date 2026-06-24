import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGallery } from "@/lib/api";
import { GALLERY_CATEGORIES } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";
import MasonryGallery from "@/components/common/MasonryGallery";
import OrbitBackground from "@/components/common/OrbitBackground";

export default function GalleryPage() {
  const [category, setCategory] = useState("all");
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["gallery", category],
    queryFn: () => fetchGallery(category),
  });

  return (
    <div data-testid="gallery-page">
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <SectionHeading
            eyebrow="Gallery"
            title="INSIDE THE KOTZINONS WORLD."
            subtitle="From original concept art and the very first handcrafted prototype toy to brand-new digital renders."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={category} onValueChange={setCategory} className="w-full" data-testid="gallery-category-tabs">
            <TabsList className="flex flex-wrap h-auto bg-secondary/60 p-1 mb-8 w-full justify-start">
              {GALLERY_CATEGORIES.map((c) => (
                <TabsTrigger
                  key={c.value}
                  value={c.value}
                  className="rounded-md"
                  data-testid={`gallery-tab-${c.value}`}
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={category} className="mt-0">
              {isLoading ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="mb-5 inline-block w-full rounded-2xl"
                      style={{ height: `${180 + (i % 3) * 80}px` }}
                    />
                  ))}
                </div>
              ) : (
                <MasonryGallery items={items} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
