import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import SiteLayout from "@/components/layout/SiteLayout";
import HomePage from "@/pages/HomePage";
import CharactersPage from "@/pages/CharactersPage";
import GalleryPage from "@/pages/GalleryPage";
import AnimationsPage from "@/pages/AnimationsPage";
import StorybookPage from "@/pages/StorybookPage";
import AboutPage from "@/pages/AboutPage";
import TeamPage from "@/pages/TeamPage";
import InvestPage from "@/pages/InvestPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/animations" element={<AnimationsPage />} />
            <Route path="/storybook" element={<StorybookPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/invest" element={<InvestPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" theme="dark" richColors closeButton />
    </div>
  );
}

export default App;
