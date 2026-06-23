import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { LecturesSidebar } from "./components/LecturesSidebar";
import { PresentationViewer } from "./components/PresentationViewer";
import { Glossary } from "./components/Glossary";
import { Quiz } from "./components/Quiz";
import { slidesData } from "./data/slidesData";
import { BookOpen, Network, ShieldCheck, Terminal, Award, Sparkles, BookMarked, Sun, Moon } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<"viewer" | "glossary" | "quiz">("viewer");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedSlides, setCompletedSlides] = useState<number[]>([1]); // Default first slide is done
  const [selectedLecture, setSelectedLecture] = useState<number | "all">("all");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to Dark Mode as requested
  const [isLecturesSidebarOpen, setIsLecturesSidebarOpen] = useState(false);

  // Load completed slides and dark mode from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem("net_lab_completed_slides");
    if (saved) {
      try {
        setCompletedSlides(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading completed slides", e);
      }
    }

    const savedDarkMode = localStorage.getItem("net_lab_dark_mode");
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("net_lab_dark_mode", String(next));
      return next;
    });
  };

  const toggleSlideCompleted = (id: number) => {
    setCompletedSlides((prev) => {
      let updated;
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
      } else {
        updated = [...prev, id];
      }
      localStorage.setItem("net_lab_completed_slides", JSON.stringify(updated));
      return updated;
    });
  };

  // Get slides that match the active lecture filter
  const activeSlides = slidesData.filter(
    (slide) => selectedLecture === "all" || slide.lectureId === selectedLecture
  );
  
  // Calculate completed count within active slides
  const activeCompletedCount = completedSlides.filter((id) =>
    activeSlides.some((slide) => slide.id === id)
  ).length;

  const totalSlidesCount = activeSlides.length;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"} flex flex-col font-sans text-right antialiased`} dir="rtl">
      
      {/* Compact Responsive Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedSlidesCount={activeCompletedCount}
        totalSlides={totalSlidesCount}
        selectedLecture={selectedLecture}
        setSelectedLecture={setSelectedLecture}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onToggleLecturesSidebar={() => setIsLecturesSidebarOpen((prev) => !prev)}
      />

      {/* Main Container Layout with fully responsive slidedrawer triggers */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex-grow">
        
        {/* Lectures Selection Sidebar (Spacious Off-canvas Overlaid Drawer across all screen sizes) */}
        <LecturesSidebar
          selectedLecture={selectedLecture}
          setSelectedLecture={setSelectedLecture}
          completedSlides={completedSlides}
          isOpen={isLecturesSidebarOpen}
          onClose={() => setIsLecturesSidebarOpen(false)}
          isDarkMode={isDarkMode}
        />

        {/* Dynamic Center Workstation Component Frame - Full Width */}
        <main className="w-full">
          {currentTab === "viewer" && (
            <PresentationViewer
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              completedSlides={completedSlides}
              toggleSlideCompleted={toggleSlideCompleted}
              selectedLecture={selectedLecture}
              isDarkMode={isDarkMode}
            />
          )}

          {currentTab === "glossary" && (
            <Glossary 
              initialSearch={searchQuery} 
              selectedLecture={selectedLecture} 
              isDarkMode={isDarkMode}
            />
          )}

          {currentTab === "quiz" && (
            <Quiz 
              selectedLecture={selectedLecture} 
              isDarkMode={isDarkMode}
            />
          )}
        </main>

      </div>

      {/* Elegant, humble, crafted Footer */}
      <footer className={`border-t transition-colors duration-300 py-6 mt-16 ${isDarkMode ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 order-2 sm:order-1 font-semibold text-zinc-500">
            <span>مختبر إدارة الشبكات — نظام Windows Server</span>
            <Network className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-650" />
          </div>
          <div className="flex gap-4 order-1 sm:order-2 font-mono text-zinc-500 font-medium">
            <span>Windows Server Explainer v1.3</span>
            <span className="text-zinc-300 dark:text-zinc-850">•</span>
            <span>By Eng. Gawhar Gamal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
