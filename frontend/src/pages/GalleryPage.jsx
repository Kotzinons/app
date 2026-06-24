import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGallery } from "@/lib/api";
import { GALLERY_CATEGORIES } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";
import MasonryGallery from "@/components/common/MasonryGallery";
import OrbitBackground from "@/components/common/OrbitBackground";

const SKELETON_ROWS = Array.from({ length: 6 }).map((_, i) => ({
  id: `gallery-skel-${i}`,
  height: 180 + (i % 3) * 80,
}));

export default function GalleryPage() {
  const [category, setCategory] = useState("all");
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["gallery", category],
    queryFn: () => fetchGallery(category),
  });

  return (
    <div data-testid="gallery-page">
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <SectionHeading
            eyebrow="Gallery"
            title="INSIDE THE KOTZINONS WORLD."
            subtitle="Cinematic 3D renders and concept art from the Kotzinons universe."
          />
        </div>
      </section>

      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={category} onValueChange={setCategory} className="w-full" data-testid="gallery-category-tabs">
            <TabsList className="flex flex-wrap h-auto bg-[hsl(var(--kotz-ink-2))] border border-border p-1 mb-10 w-full justify-start">
              {GALLERY_CATEGORIES.map((c) => (
                <TabsTrigger
                  key={c.value}
                  value={c.value}
                  className="rounded-md data-[state=active]:bg-[hsl(var(--kotz-gold))] data-[state=active]:text-[hsl(var(--kotz-ink))] data-[state=active]:font-bold"
                  data-testid={`gallery-tab-${c.value}`}
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={category} className="mt-0">
              {isLoading ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                  {SKELETON_ROWS.map((row) => (
                    <Skeleton
                      key={row.id}
                      className="mb-5 inline-block w-full rounded-2xl bg-[hsl(var(--kotz-ink-2))]"
                      style={{ height: `${row.height}px` }}
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
