import { motion } from "motion/react";
import { Network, Search, BookOpen, Layers, Award, Sparkles, BookOpenCheck, Sun, Moon, Menu, HelpCircle } from "lucide-react";

interface HeaderProps {
  currentTab: "viewer" | "glossary" | "quiz";
  setCurrentTab: (tab: "viewer" | "glossary" | "quiz") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedSlidesCount: number;
  totalSlides: number;
  selectedLecture: number | "all";
  setSelectedLecture: (lecture: number | "all") => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onToggleLecturesSidebar: () => void;
}

export function Header({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  completedSlidesCount,
  totalSlides,
  selectedLecture,
  setSelectedLecture,
  isDarkMode,
  toggleDarkMode,
  onToggleLecturesSidebar,
}: HeaderProps) {
  const progressPercent = totalSlides > 0 ? (completedSlidesCount / totalSlides) * 100 : 0;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 border-b ${
      isDarkMode 
        ? "bg-zinc-950/90 border-zinc-900 text-zinc-100 backdrop-blur-md" 
        : "bg-white/95 border-zinc-150 text-zinc-900 shadow-3xs backdrop-blur-md"
    }`}>
      {/* 1. Miniature Top Accent Progress bar of Active Lecture */}
      <div className="h-0.5 w-full bg-zinc-200/40 dark:bg-zinc-900 flex">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4 }}
          className="h-full bg-red-600 shadow-xs"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Core Header Row - Extremely Compact & Streamlined */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2.5 md:py-3 gap-2.5">
          
          {/* Mobile-First Optimized Top Row */}
          <div className="flex items-center justify-between gap-3 w-full md:w-auto">
            {/* 📚 Lectures Sidebar Activator */}
            <button
              onClick={onToggleLecturesSidebar}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isDarkMode 
                  ? "bg-red-950/30 border-red-900/60 text-red-400 hover:bg-red-900 hover:text-white" 
                  : "bg-red-50 border-red-100 text-red-750 hover:bg-red-100"
              }`}
              title="عرض قائمة المحاضرات"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>فصول المنهج</span>
            </button>

            {/* Application Brand / Small Logo & badge */}
            <div className="flex items-center gap-2 select-none">
              <Network className="w-4 h-4 text-red-500 shrink-0" />
              <div className="text-right">
                <h1 className="text-xs sm:text-sm font-black tracking-tight leading-none">
                  مترجم معمل الشبكات
                </h1>
                <p className="hidden xs:block md:hidden lg:block text-[8px] font-mono text-zinc-500 mt-0.5">
                  WINDOWS SERVER HANDBOOK
                </p>
              </div>
            </div>

            {/* Dark Mode Theme Switcher button for Mobile (visible here to save space) */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-zinc-900 border-zinc-850 text-amber-400" 
                    : "bg-zinc-50 border-zinc-200 text-zinc-650"
                }`}
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Bottom Row on mobile, Center on Desktop: Tabs + Search */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
            
            {/* Simplified Navigation Pills (Extremely optimized) */}
            <div className={`p-0.5 rounded-xl border flex items-center justify-center w-full sm:w-auto transition-all ${
              isDarkMode ? "bg-zinc-900/50 border-zinc-850" : "bg-zinc-100/80 border-zinc-250/50"
            }`}>
              <button
                onClick={() => setCurrentTab("viewer")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  currentTab === "viewer"
                    ? isDarkMode
                      ? "bg-zinc-800 text-white shadow-xs"
                      : "bg-white text-zinc-950 shadow-3xs border border-zinc-200/50"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-350"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-red-500" />
                <span>الشرائح</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("glossary")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  currentTab === "glossary"
                    ? isDarkMode
                      ? "bg-zinc-800 text-white shadow-xs"
                      : "bg-white text-zinc-950 shadow-3xs border border-zinc-200/50"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-350"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-red-500" />
                <span>القاموس</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("quiz")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  currentTab === "quiz"
                    ? isDarkMode
                      ? "bg-zinc-800 text-white shadow-xs"
                      : "bg-white text-zinc-950 shadow-3xs border border-zinc-200/50"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-350"
                }`}
              >
                <Award className="w-3.5 h-3.5 text-red-500" />
                <span>الاختبار</span>
              </button>
            </div>

            {/* Search + Dark Mode alignment on Desktop */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Quick Search Input */}
              <div className="relative flex-grow sm:w-44">
                <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3 h-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث بالشرائح ..."
                  className={`w-full pl-2 pr-7 py-1.5 text-xs rounded-lg text-right focus:outline-hidden border transition-all ${
                    isDarkMode 
                      ? "bg-zinc-900 border-zinc-800 text-zinc-200 focus:border-red-500" 
                      : "bg-zinc-50 border-zinc-200 text-zinc-700 focus:border-red-500"
                  }`}
                />
              </div>

              {/* Desktop Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`hidden md:flex p-2 rounded-lg border items-center justify-center transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-zinc-900 border-zinc-850 text-amber-400 hover:bg-zinc-800" 
                    : "bg-zinc-50 border-zinc-200 text-zinc-650 hover:bg-zinc-100"
                }`}
                title={isDarkMode ? "تفعيل الوضع المضيء" : "تفعيل الوضع الداكن"}
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
