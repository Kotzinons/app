import StorybookHero from "@/components/storybook/StorybookHero";
import ChapterPreviewSection from "@/components/storybook/ChapterPreviewSection";
import NotifySection from "@/components/storybook/NotifySection";

export default function StorybookPage() {
  return (
    <div data-testid="storybook-page">
      <StorybookHero />
      <ChapterPreviewSection />
      <NotifySection />
    </div>
  );
}
