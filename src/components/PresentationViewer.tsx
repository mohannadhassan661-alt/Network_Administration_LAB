import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slidesData, Slide } from "../data/slidesData";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Volume2,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Info,
  Layers,
  AlignLeft,
  AlignRight,
  Terminal,
  Search,
  VolumeX,
  Menu,
  X,
  Lightbulb,
  Play,
  RotateCcw,
  BookMarked,
  ArrowRightLeft,
  ChevronsRight,
  CheckCircle2
} from "lucide-react";

interface PresentationViewerProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedSlides: number[];
  toggleSlideCompleted: (id: number) => void;
  selectedLecture: number | "all";
  isDarkMode: boolean;
}

export function PresentationViewer({
  searchQuery,
  setSearchQuery,
  completedSlides,
  toggleSlideCompleted,
  selectedLecture,
  isDarkMode,
}: PresentationViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"split" | "english" | "arabic">("split");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  // Reset index when changing selected lecture
  useEffect(() => {
    setCurrentSlideIndex(0);
    stopSpeech();
  }, [selectedLecture]);

  // Filter slides in the current view based on active lecture and search
  const filteredSlides = slidesData.filter((slide) => {
    if (selectedLecture !== "all" && slide.lectureId !== selectedLecture) {
      return false;
    }

    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    
    return (
      slide.titleEn.toLowerCase().includes(query) ||
      slide.titleAr.includes(query) ||
      slide.contentEn.some(b => b.toLowerCase().includes(query)) ||
      slide.contentAr.some(b => b.includes(query)) ||
      slide.explanation.toLowerCase().includes(query) ||
      slide.explanation.includes(query)
    );
  });

  // Sidebar list of active lecture slides (can be searched separately)
  const sidebarSlides = slidesData.filter((slide) => {
    if (selectedLecture !== "all" && slide.lectureId !== selectedLecture) {
      return false;
    }
    if (!sidebarSearch) return true;
    const sQuery = sidebarSearch.toLowerCase();
    return (
      slide.titleEn.toLowerCase().includes(sQuery) ||
      slide.titleAr.includes(sQuery) ||
      slide.id.toString() === sQuery
    );
  });

  // Adjust active slide index bounds
  useEffect(() => {
    if (filteredSlides.length > 0 && currentSlideIndex >= filteredSlides.length) {
      setCurrentSlideIndex(0);
    }
  }, [filteredSlides.length, currentSlideIndex]);

  const handleNext = () => {
    stopSpeech();
    setSelectedConcept(null);
    if (currentSlideIndex < filteredSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    stopSpeech();
    setSelectedConcept(null);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleJumpToSlide = (id: number) => {
    const idxInFiltered = filteredSlides.findIndex((s) => s.id === id);
    if (idxInFiltered !== -1) {
      setCurrentSlideIndex(idxInFiltered);
      setSelectedConcept(null);
      stopSpeech();
    } else {
      // If not found in filtered list (due to dynamic search filter), clear search
      setSearchQuery("");
      setTimeout(() => {
        const idxInFull = slidesData.filter(s => selectedLecture === "all" || s.lectureId === selectedLecture)
          .findIndex(s => s.id === id);
        if (idxInFull !== -1) {
          setCurrentSlideIndex(idxInFull);
          setSelectedConcept(null);
          stopSpeech();
        }
      }, 50);
    }
    
    // Automatically dismiss catalog index drawer on mobile & tablets to give room
    if (window.innerWidth < 1280) {
      setIsSidebarOpen(false);
    }
  };

  const currentSlide = filteredSlides[currentSlideIndex];

  // Text-to-speech engine
  const speakSlideContent = () => {
    if ("speechSynthesis" in window) {
      if (isPlayingAudio) {
        stopSpeech();
        return;
      }
      window.speechSynthesis.cancel();
      
      const enText = `${currentSlide.titleEn}. ${currentSlide.contentEn.join(". ")}`;
      const utterance = new SpeechSynthesisUtterance(enText);
      utterance.lang = "en-US";
      utterance.rate = 0.95;
      
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("عذراً، متصفحك الحالي لا يدعم ميزة نطق النصوص صوتياً.");
    }
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!currentSlide) {
    return (
      <div className={`py-24 text-center max-w-lg mx-auto px-4 text-right flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
        <HelpCircle className={`w-16 h-16 mb-4 stroke-1 animate-bounce ${isDarkMode ? "text-zinc-700" : "text-zinc-300"}`} />
        <h3 className={`text-lg font-bold ${isDarkMode ? "text-zinc-100" : "text-zinc-800"}`}>لا توجد شرائح مطابقة لبحثك</h3>
        <p className={`text-xs mt-2 ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>يرجى تجربة كلمات مفتاحية أخرى أو مسح صندوق البحث لعرض شرائح المحاضرة كاملة.</p>
        <button
          onClick={() => {
            setSearchQuery("");
            setSidebarSearch("");
          }}
          className="mt-6 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer select-none transition-all"
        >
          عرض كافة شرائح المحاضرة
        </button>
      </div>
    );
  }

  const isSlideCompleted = completedSlides.includes(currentSlide.id);
  const allLectureSlides = slidesData.filter((s) => s.lectureId === currentSlide.lectureId);
  const currentSlideIndexInLecture = allLectureSlides.findIndex((s) => s.id === currentSlide.id) + 1;
  const totalSlidesInLecture = allLectureSlides.length;

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto font-sans" dir="rtl">
      
      {/* Top Controller Row - Simplified, Beautiful, and Clear */}
      <div className={`mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border p-3.5 rounded-2xl transition-colors duration-300 ${
        isDarkMode 
          ? "bg-zinc-900 border-zinc-850 shadow-inner" 
          : "bg-white border-zinc-150 shadow-xs"
      }`}>
        
        {/* Navigation Actions and Pagination */}
        <div className="flex items-center gap-2.5">
          
          {/* Toggle sidebar index button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
              isSidebarOpen 
                ? isDarkMode 
                  ? "bg-red-950/50 border-red-950 text-red-400" 
                  : "bg-red-50 border-red-200 text-red-650"
                : isDarkMode 
                  ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-100" 
                  : "bg-white border-zinc-200 text-zinc-650 hover:bg-zinc-50"
            }`}
            title={isSidebarOpen ? "إخفاء فهرس المحتويات" : "عرض فهرس المحتويات"}
          >
            <Menu className="w-4 h-4" />
            <span className="hidden sm:inline">فهرس المحتويات</span>
          </button>

          <div className={`h-6 w-px hidden sm:block ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"}`}></div>

          {/* Pagination bar */}
          <div className={`flex items-center p-0.5 rounded-xl border ${
            isDarkMode ? "bg-zinc-950 border-zinc-850 text-zinc-300" : "bg-zinc-50 border-zinc-200/80 text-zinc-700"
          }`}>
            {/* Prev button */}
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                currentSlideIndex === 0
                  ? "text-zinc-500 cursor-not-allowed"
                  : isDarkMode
                    ? "text-zinc-300 hover:bg-zinc-805 hover:text-white"
                    : "text-zinc-700 hover:bg-white hover:shadow-2xs"
              }`}
              title="الشريحة السابقة"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>

            {/* Slide Count Indicator with high contrast */}
            <span className="text-xs font-semibold px-4 text-center select-none flex flex-col sm:flex-row sm:items-center gap-1">
              <span className={`font-mono text-xs font-bold ${isDarkMode ? "text-red-400" : "text-red-650"}`}>
                {currentSlideIndex + 1} / {filteredSlides.length}
              </span>
              <span className={`text-[10px] font-medium ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                (شريحة {currentSlideIndexInLecture} من {totalSlidesInLecture} بالمحاضرة)
              </span>
            </span>

            {/* Next button */}
            <button
              onClick={handleNext}
              disabled={currentSlideIndex === filteredSlides.length - 1}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                currentSlideIndex === filteredSlides.length - 1
                  ? "text-zinc-500 cursor-not-allowed"
                  : isDarkMode
                    ? "text-zinc-300 hover:bg-zinc-805 hover:text-white"
                    : "text-zinc-700 hover:bg-white hover:shadow-2xs"
              }`}
              title="الشريحة التالية"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* View Layout options & Interactive controls (TTS + Mark done) */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          
          {/* Elegant layout selector segmented control */}
          <div className={`flex items-center p-0.5 rounded-xl border text-xs ${
            isDarkMode ? "bg-zinc-950 border-zinc-850" : "bg-zinc-100 border-zinc-200"
          }`}>
            <button
              onClick={() => setViewMode("split")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                viewMode === "split"
                  ? isDarkMode
                    ? "bg-zinc-800 text-white shadow-xs"
                    : "bg-white text-zinc-900 shadow-2xs"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden sm:inline">عرض مزدوج</span>
            </button>
            <button
              onClick={() => setViewMode("arabic")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                viewMode === "arabic"
                  ? isDarkMode
                    ? "bg-zinc-800 text-white shadow-xs"
                    : "bg-white text-zinc-900 shadow-2xs"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <AlignRight className="w-3.5 h-3.5 text-emerald-500" />
              <span>الترجمة والشرح</span>
            </button>
            <button
              onClick={() => setViewMode("english")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                viewMode === "english"
                  ? isDarkMode
                    ? "bg-zinc-800 text-white shadow-xs"
                    : "bg-white text-zinc-900 shadow-2xs"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <AlignLeft className="w-3.5 h-3.5 text-indigo-400" />
              <span>الأصلية (EN)</span>
            </button>
          </div>

          <div className={`h-6 w-px hidden sm:block ${isDarkMode ? "bg-zinc-800" : "bg-zinc-250"}`}></div>

          {/* TTS text voice reader */}
          <button
            onClick={speakSlideContent}
            className={`p-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all select-none cursor-pointer ${
              isPlayingAudio
                ? "bg-rose-950/40 border-rose-900 text-rose-400 animate-pulse"
                : isDarkMode
                  ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-850 hover:text-white"
                  : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
            }`}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4 text-rose-400" />
                <span>إيقاف الصوت</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-zinc-400" />
                <span>نطق (EN)</span>
              </>
            )}
          </button>

          {/* Slide completed checkbox */}
          <button
            onClick={() => toggleSlideCompleted(currentSlide.id)}
            className={`p-2 px-3.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-300 cursor-pointer ${
              isSlideCompleted
                ? isDarkMode
                  ? "bg-emerald-950/40 border-emerald-900 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700"
                : isDarkMode
                  ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-emerald-900/10 hover:border-emerald-900 hover:text-emerald-400"
                  : "bg-white border-zinc-200 text-zinc-650 hover:bg-emerald-50/30 hover:border-emerald-200 focus:outline-hidden"
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isSlideCompleted ? "text-emerald-500 fill-emerald-950/20" : "text-zinc-400"}`} />
            <span>{isSlideCompleted ? "مكتملة ومحفوظة ✓" : "تحديد كمكتمل"}</span>
          </button>

        </div>

      </div>

      {/* Main Container Setup containing Sidebar Catalog AND Slide viewing cards */}
      <div className="flex flex-col xl:flex-row gap-6 items-start relative">
        
        {/* Toggleable Sidebar Slide Catalog Directory */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <>
              {/* Backdrop for slide catalog on mobile/tablet overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-3xs xl:hidden"
              />

              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 240 }}
                className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 shadow-2xl xl:shadow-none overflow-hidden flex flex-col xl:relative xl:top-auto xl:right-auto xl:h-[650px] xl:w-80 xl:z-auto xl:border xl:rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-zinc-950/98 border-zinc-900 xl:bg-zinc-90 w/100 xl:border-zinc-805 text-zinc-100" 
                    : "bg-white/98 border-zinc-150 xl:bg-white text-zinc-950 backdrop-blur-md xl:backdrop-blur-none"
                }`}
              >
                {/* Sidebar Header */}
                <div className={`p-4 border-b flex items-center justify-between select-none ${
                  isDarkMode ? "bg-zinc-950/40 border-zinc-900" : "bg-zinc-50/70 border-zinc-150"
                }`}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="xl:hidden p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-400 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <BookMarked className={`w-4 h-4 ${isDarkMode ? "text-red-400" : "text-red-650"}`} />
                  </div>
                  <div className="text-right">
                    <h4 className={`text-xs font-bold ${isDarkMode ? "text-zinc-200" : "text-zinc-850"}`}>فهرس محتويات المحاضرة</h4>
                    <p className={`text-[9px] mt-0.5 ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>قم بالاختيار للتنقل الفوري</p>
                  </div>
                </div>

                {/* Sidebar Search Bar */}
                <div className={`p-3 border-b ${isDarkMode ? "bg-zinc-900/45 border-zinc-900" : "bg-white border-zinc-100"}`}>
                  <div className="relative">
                    <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 w-3.5 h-3.5" />
                    <input
                      type="text"
                      value={sidebarSearch}
                      onChange={(e) => setSidebarSearch(e.target.value)}
                      placeholder="ابحث برقم الشريحة أو العنوان..."
                      className={`w-full pl-3 pr-8 py-1.5 text-[11px] rounded-lg text-right focus:outline-hidden border ${
                        isDarkMode 
                          ? "bg-zinc-950 border-zinc-900 text-zinc-200 focus:border-red-500" 
                          : "bg-zinc-50 border-zinc-200 text-zinc-800 focus:border-red-300"
                      }`}
                    />
                  </div>
                </div>

                {/* Sidebar Scrollable Slide Item List */}
                <div className="flex-grow overflow-y-auto p-2 space-y-1 select-none">
                  {sidebarSlides.map((slide, sIdx) => {
                    const isActive = slide.id === currentSlide.id;
                    const isDone = completedSlides.includes(slide.id);
                    return (
                      <button
                        key={slide.id}
                        onClick={() => handleJumpToSlide(slide.id)}
                        className={`w-full p-2.5 rounded-xl text-right transition-all flex items-start gap-2 border cursor-pointer select-none ${
                          isActive
                            ? isDarkMode
                              ? "bg-red-950/40 border-red-900/65 shadow-xs"
                              : "bg-red-50/75 border-red-200 shadow-3xs"
                            : isDarkMode
                              ? "bg-zinc-900/70 border-transparent text-zinc-300 hover:bg-zinc-850 hover:border-zinc-800"
                              : "bg-white border-transparent text-zinc-805 hover:bg-zinc-50/75 hover:border-zinc-100"
                        }`}
                      >
                        {/* Badge counter */}
                        <span className={`h-5 w-8 shrink-0 rounded-md text-[10px] font-mono font-bold flex items-center justify-center ${
                          isActive 
                            ? isDarkMode ? "bg-red-500 text-zinc-950" : "bg-red-650 text-white" 
                            : isDone 
                              ? isDarkMode ? "bg-emerald-950/40 text-emerald-450 border border-emerald-900/50" : "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                              : isDarkMode ? "bg-zinc-950 text-zinc-400" : "bg-zinc-100 text-zinc-500"
                        }`}>
                          {slide.id}
                        </span>

                        {/* Info & titles */}
                        <div className="flex-1 min-w-0">
                          <h5 className={`text-[11px] font-bold truncate ${
                            isActive 
                              ? isDarkMode ? "text-red-400" : "text-red-900" 
                              : isDarkMode ? "text-zinc-200" : "text-zinc-800"
                          }`}>
                            {slide.titleAr}
                          </h5>
                          <p className={`text-[9px] font-mono truncate mt-0.5 ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`} dir="ltr">
                            {slide.titleEn}
                          </p>
                        </div>

                        {/* Status indicator icon */}
                        <div className="shrink-0 flex items-center justify-center pt-0.5">
                          <div className={`h-2.5 w-2.5 rounded-full ${
                            isDone 
                              ? "bg-emerald-500 animate-pulse" 
                              : isDarkMode ? "border border-zinc-700 bg-zinc-900" : "bg-transparent border border-zinc-300"
                          }`} />
                        </div>
                      </button>
                    );
                  })}

                {sidebarSlides.length === 0 && (
                  <div className="text-center py-10 text-zinc-400 text-xs">
                    لا توجد سلايدات تطابق البحث في الفهرس
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

        {/* Dynamic Presentation Cards (Grid layout according to active layout settings) */}
        <div className="flex-grow w-full space-y-6">
          
          <div className={`grid grid-cols-1 ${viewMode === "split" ? "lg:grid-cols-2" : "grid-cols-1"} gap-6`}>
            
            {/* LTR: English Slide Deck Canvas (Original Visual style) */}
            {(viewMode === "split" || viewMode === "english") && (
              <motion.div
                key={`slide-en-${currentSlide.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                dir="ltr"
                className={`border rounded-3xl shadow-sm overflow-hidden flex flex-col h-[480px] justify-between group relative transition-all duration-350 ${
                  isDarkMode 
                    ? "bg-zinc-900/60 border-zinc-850 text-zinc-300" 
                    : "bg-[#fafafa] border-zinc-200"
                }`}
              >
                {/* PowerPoint Simulation Header bar */}
                <div className={`px-6 py-4 flex justify-between items-center select-none border-b transition-colors duration-300 ${
                  isDarkMode 
                    ? "bg-zinc-950/40 border-zinc-850 text-zinc-500" 
                    : "bg-white border-zinc-150 text-zinc-400"
                }`}>
                  <span className="text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 rounded-full bg-red-650"></span>
                    PowerPoint Viewer • Slide {currentSlide.id}
                  </span>
                  <div className="flex gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"}`}></span>
                    <span className={`h-2 w-2 rounded-full ${isDarkMode ? "bg-zinc-750" : "bg-zinc-300"}`}></span>
                    <span className={`h-2 w-2 rounded-full ${isDarkMode ? "bg-zinc-700" : "bg-zinc-400"}`}></span>
                  </div>
                </div>

                {/* Simulated PPT Content Body */}
                <div className="px-10 py-12 flex-1 flex flex-col justify-start relative overflow-y-auto">
                  
                  {/* PPT style elegant solid top border decoration */}
                  <div className="h-1 w-20 bg-red-650 rounded mb-8"></div>
                  
                  {/* Slide Main English Title */}
                  <h2 className={`text-2xl font-black font-sans tracking-tight text-left leading-normal transition-colors duration-300 ${
                    isDarkMode ? "text-zinc-100" : "text-zinc-850"
                  }`}>
                    {currentSlide.titleEn}
                  </h2>

                  {/* Bullet Elements */}
                  <div className="mt-8 space-y-4">
                    {/* Specialized Cover Layout for Title screens */}
                    {[1, 8, 15, 41, 47, 57].includes(currentSlide.id) ? (
                      <div className={`text-left py-6 flex flex-col justify-center border-t mt-6 ${isDarkMode ? "border-zinc-800/40" : "border-zinc-100"}`}>
                        <p className={`text-md font-mono font-bold tracking-wider uppercase mb-1 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                          Lecture {currentSlide.lectureId === 1 ? "I: Intro" : currentSlide.lectureId === 2 ? "II: Installation" : currentSlide.lectureId === 3 ? "III: AD DS" : currentSlide.lectureId === 4 ? "IV: Workstation" : "V: Group Policy Objects"}
                        </p>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mt-4 ${isDarkMode ? "text-zinc-500" : "text-zinc-600"}`}>Instructor:</p>
                        <h4 className={`text-lg font-black uppercase tracking-wide font-sans mt-0.5 ${isDarkMode ? "text-zinc-300" : "text-zinc-800"}`}>
                          ENG. GAWHAR GAMAL
                        </h4>
                      </div>
                    ) : (
                      /* Common PPT Bullet lines */
                      <ul className="space-y-4 text-left">
                        {currentSlide.contentEn.map((bullet, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-4"
                          >
                            <span className="h-2 w-2 rounded-full bg-red-500 mt-2.5 shrink-0 animate-pulse"></span>
                            <span className={`leading-relaxed text-sm md:text-base font-sans font-medium transition-colors duration-300 ${
                              isDarkMode ? "text-zinc-300" : "text-zinc-700"
                            }`}>
                              {bullet}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>

                {/* PPT Slide bottom footer */}
                <div className={`px-6 py-3.5 border-t flex justify-between items-center text-[10px] font-mono select-none transition-colors duration-300 ${
                  isDarkMode 
                    ? "bg-zinc-950/20 border-zinc-850 text-zinc-500" 
                    : "bg-zinc-100/50 border-zinc-100 text-zinc-400"
                }`}>
                  <span>Author: Eng. Gawhar Gamal</span>
                  <span>Windows Server Lab Handbook</span>
                </div>
              </motion.div>
            )}

            {/* RTL: Arabic Translate & Explanatory Side (Customized layout that solves user experience completely!) */}
            {(viewMode === "split" || viewMode === "arabic") && (
              <motion.div
                key={`slide-ar-${currentSlide.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                dir="rtl"
                className={`border rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] transition-all duration-350 ${
                  isDarkMode 
                    ? "bg-zinc-900 border-zinc-800 text-zinc-100" 
                    : "bg-white border-zinc-200/90 text-zinc-900 shadow-sm"
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Custom Explanatory Section Header */}
                  <div className={`flex items-center justify-between pb-4 border-b ${isDarkMode ? "border-zinc-800" : "border-zinc-100"}`}>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase select-none border ${
                      isDarkMode 
                        ? "text-red-400 bg-red-950/40 border-red-900/50" 
                        : "text-red-650 bg-red-50 border-red-100"
                    }`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      الترجمة والشرح الفني المعتمد
                    </span>
                    <span className={`text-[11px] font-mono ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>تراخيـص وإعـدادات دقيقـة</span>
                  </div>

                  {/* 1. Main Direct Arabic Translation card */}
                  <div className={`p-4 sm:p-5 rounded-2xl flex flex-col border ${
                    isDarkMode 
                      ? "bg-zinc-950/45 border-zinc-805" 
                      : "bg-red-50/20 border-red-100/40"
                  }`}>
                    <span className={`text-[10px] font-bold uppercase mb-2 select-none tracking-widest block text-right ${
                      isDarkMode ? "text-red-400" : "text-red-600"
                    }`}>المعنى الفوري المترجم للشريحة:</span>
                    <h3 className={`text-[15px] sm:text-[17px] font-extrabold leading-relaxed text-right ${
                      isDarkMode ? "text-white" : "text-zinc-900"
                    }`}>
                      {currentSlide.titleAr}
                    </h3>
                    
                    {/* Translated Bullets with guaranteed text-right bullet alignment */}
                    <ul className="space-y-2 mt-4">
                      {currentSlide.contentAr.map((bulletAr, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-right font-sans text-xs sm:text-sm leading-relaxed max-w-full font-medium ${
                          isDarkMode ? "text-zinc-350" : "text-zinc-700"
                        }`} dir="rtl">
                          <span className={`${isDarkMode ? "text-red-400" : "text-red-500"} font-black shrink-0 mt-0.5 text-xs`}>•</span>
                          <span className="flex-1 text-right">{bulletAr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Professional Engineering Explanation with explicit right alignment */}
                  <div className="space-y-2.5">
                    <h4 className={`text-xs font-bold flex items-center gap-1.5 select-none text-right justify-start ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-800"
                    }`}>
                      <BookOpen className="w-4 h-4 text-red-500" />
                      <span>الشرح الهندسي والدروس العملية من السلايد:</span>
                    </h4>
                    <div className={`text-xs sm:text-sm leading-relaxed text-right font-medium whitespace-pre-line p-5 rounded-2xl border ${
                      isDarkMode 
                        ? "bg-zinc-950 border-zinc-850 text-zinc-305" 
                        : "bg-zinc-50 border-zinc-100 text-zinc-700"
                    }`}>
                      {currentSlide.explanation}
                    </div>
                  </div>

                  {/* 3. Interactive Key Concepts Section */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase mb-2.5 flex items-center gap-1 select-none text-right justify-start">
                      <span>المصطلحات والمفاهيم المرتبطة بالشريحة:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {currentSlide.keyConcepts.map((concept, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedConcept(selectedConcept === concept ? null : concept);
                          }}
                          className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-xl transition-all cursor-pointer border flex items-center gap-1 ${
                            selectedConcept === concept
                              ? isDarkMode
                                ? "bg-red-900 border-red-800 text-white shadow-xs"
                                : "bg-zinc-900 text-white border-zinc-900 shadow-2xs"
                              : isDarkMode
                                ? "bg-zinc-950 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-white"
                                : "bg-zinc-50 text-zinc-655 border-zinc-200 hover:bg-zinc-100 hover:border-zinc-305"
                          }`}
                        >
                          <Terminal className="w-3 h-3 text-red-500" />
                          <span>{concept}</span>
                        </button>
                      ))}
                    </div>

                    {/* Pop-out quick explanation drawer of selected technical concept */}
                    <AnimatePresence>
                      {selectedConcept && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`mt-3 p-4 rounded-xl border overflow-hidden ${
                            isDarkMode 
                              ? "bg-zinc-950 text-zinc-100 border-zinc-800" 
                              : "bg-zinc-900 text-zinc-100 border-zinc-850"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-xs font-bold text-red-400 flex items-center gap-1 leading-normal font-mono" dir="ltr">
                              <Info className="w-3.5 h-3.5 shrink-0" />
                              {selectedConcept}
                            </h5>
                            <button
                              onClick={() => setSelectedConcept(null)}
                              className="text-zinc-500 hover:text-white p-0.5 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className={`text-xs leading-relaxed mt-2 text-right ${isDarkMode ? "text-zinc-400" : "text-zinc-350"}`}>
                            هذا المفهوم {selectedConcept} هو ركيزة تقنية أساسية مذكورة في مستندات إدارة أنظمة التشغيل والشبكات لويندوز سيرفر. لمعرفة المزيد من شروحه المتقدمة، يمكنك التوجّه إلى تبويب "قاموس المصطلحات المعرب" في الأعلى والبحث عنه!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* 4. Instructor advice with interactive lightbulb badge */}
                {currentSlide.technicalTips && (
                  <div className={`mt-8 pt-6 border-t ${isDarkMode ? "border-zinc-800" : "border-zinc-100"}`}>
                    <div className={`p-4 rounded-2xl border flex flex-col gap-1.5 ${
                      isDarkMode 
                        ? "bg-amber-500/5 border-amber-950/40 text-amber-300" 
                        : "bg-amber-500/5 border-amber-200/40 text-amber-900"
                    }`}>
                      <div className="flex items-center gap-1.5 font-bold text-xs select-none justify-start">
                        <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/10" />
                        <span>نصيحة المهندس لبيئة العمل (Network Lab Expert Tip):</span>
                      </div>
                      <p className={`text-xs leading-relaxed text-right font-semibold ${isDarkMode ? "text-zinc-300" : "text-zinc-650"}`}>
                        {currentSlide.technicalTips[0]}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
