import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { glossaryData, GlossaryItem } from "../data/slidesData";
import { BookOpen, Search, HelpCircle, Star, Terminal, Sparkles, BookMarked, Layers, X } from "lucide-react";

interface GlossaryProps {
  initialSearch?: string;
  selectedLecture?: number | "all";
  isDarkMode?: boolean;
}

export function Glossary({ initialSearch = "", selectedLecture = "all", isDarkMode = false }: GlossaryProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(null);

  const filteredGlossary = glossaryData.filter((item) => {
    if (selectedLecture !== "all" && item.lectureId !== selectedLecture) {
      return false;
    }
    const q = search.toLowerCase();
    return (
      item.term.toLowerCase().includes(q) ||
      item.definitionAr.includes(q) ||
      item.definitionEn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto font-sans" dir="rtl">
      
      {/* Page Title Section & Description */}
      <div className={`mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-3xl transition-all duration-300 border ${
        isDarkMode 
          ? "bg-zinc-900 border-zinc-850 shadow-inner" 
          : "bg-white border-zinc-100 shadow-3xs"
      }`}>
        <div className="text-right space-y-2">
          <div className="flex items-center gap-2 justify-start">
            <span className={`p-2 rounded-xl border ${
              isDarkMode 
                ? "bg-zinc-950 border-zinc-800 text-red-400" 
                : "bg-red-50 border-red-105 text-red-650"
            }`}>
              <BookOpen className="w-5 h-5" />
            </span>
            <h2 className={`text-2xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              قاموس المصطلحات المعرب والهندسي
            </h2>
          </div>
          <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
            دليل مبسط وشامل يعرّب ويشرح أهم مفاهيم الشبكات وإدارة الخوادم المذكورة بمختبر Windows Server. صُمم هذا الدليل لمساعدتك على فك التلاسم الفنية وربطها بالواقع العملي والوظائف الهندسية.
          </p>
        </div>

        {/* Global Statistics for glossary */}
        <div className={`p-4 rounded-2xl flex items-center gap-4 select-none shrink-0 w-full md:w-auto border ${
          isDarkMode 
            ? "bg-zinc-950 border-zinc-800 text-zinc-300" 
            : "bg-zinc-50 border-zinc-200/60 text-zinc-800"
        }`}>
          <div className="text-right">
            <span className={`text-[10px] font-bold block uppercase ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>إجمالي المصطلحات المتاحة</span>
            <span className={`text-xl font-extrabold font-mono mt-0.5 block ${isDarkMode ? "text-red-400" : "text-zinc-800"}`}>
              {filteredGlossary.length} مصطلحاً
            </span>
          </div>
          <BookMarked className={`w-8 h-8 stroke-1 ${isDarkMode ? "text-red-400/80" : "text-red-655"}`} />
        </div>
      </div>

      {/* Styled search & Lecture status */}
      <div className="relative max-w-lg mb-8">
        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4.5 h-4.5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن مصطلح بعينه بالإنجليزية أو العربية..."
          className={`w-full pl-4 pr-11 py-3 text-xs sm:text-sm rounded-2xl text-right focus:outline-hidden border transition-all ${
            isDarkMode 
              ? "bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-red-500" 
              : "bg-white border-zinc-200 text-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-105 shadow-3xs"
          }`}
        />
      </div>

      <div className="w-full">
        {filteredGlossary.length === 0 ? (
          <div className={`text-center py-20 rounded-3xl border border-dashed p-6 ${
            isDarkMode 
              ? "bg-zinc-900/40 border-zinc-800" 
              : "bg-white border-zinc-200/80"
          }`}>
            <HelpCircle className="w-12 h-12 text-zinc-500 mx-auto mb-3 stroke-1" />
            <p className={`font-bold text-sm ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
              لم يتم العثور على مصطلحات تطابق بحثك الحالي
            </p>
            <button
              onClick={() => setSearch("")}
              className={`text-xs font-bold mt-2 hover:underline cursor-pointer select-none ${
                isDarkMode ? "text-red-400" : "text-red-655"
              }`}
            >
              مسح مربع البحث والبدء مجدداً
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredGlossary.map((item, index) => {
                const isCur = selectedTerm?.term === item.term;
                return (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2, delay: Math.min(index * 0.04, 0.4) }}
                    onClick={() => setSelectedTerm(item)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-right flex flex-col justify-between group h-44 hover:shadow-2xs select-none ${
                      isCur
                        ? isDarkMode
                          ? "bg-red-950/20 border-red-900/50"
                          : "bg-red-50/70 border-red-200 shadow-2xs"
                        : isDarkMode
                          ? "bg-zinc-900 border-zinc-850 text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900/85"
                          : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50"
                    }`}
                  >
                    {/* Term Title top row */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center gap-3 w-full">
                        <h3 className={`font-bold transition-colors tracking-tight text-md font-mono flex-1 text-right truncate ${
                          isDarkMode 
                            ? "text-zinc-100 group-hover:text-red-400" 
                            : "text-zinc-900 group-hover:text-red-655"
                        }`}>
                          {item.term}
                        </h3>
                        <span className={`text-[9px] font-sans font-bold px-2 py-0.5 rounded-md select-none shrink-0 transition-all ${
                          isDarkMode ? "bg-zinc-950 text-zinc-500" : "bg-zinc-100 text-zinc-500"
                        }`}>
                          {item.lectureId === 1 
                            ? "المحاضرة الأولى" 
                            : item.lectureId === 2 
                            ? "المحاضرة الثانية" 
                            : item.lectureId === 3 
                            ? "المحاضرة الثالثة" 
                            : item.lectureId === 4 
                            ? "المحاضرة الرابعة" 
                            : item.lectureId === 5
                            ? "المحاضرة الخامسة"
                            : item.lectureId === 7
                            ? "المحاضرة السابعة"
                            : "المحاضرة الثامنة"}
                        </span>
                      </div>
                      
                      {/* Brief descriptive definition with clamped lines */}
                      <p className={`text-xs leading-relaxed line-clamp-3 text-right ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`} dir="rtl">
                        {item.definitionAr}
                      </p>
                    </div>

                    {/* Interactive read more icon link */}
                    <div className={`mt-3 pt-3 border-t flex justify-between items-center text-[10px] font-bold group-hover:translate-x-[-2px] transition-transform ${
                      isDarkMode 
                        ? "border-zinc-800 text-red-400" 
                        : "border-zinc-100/60 text-red-600"
                    }`}>
                      <span className="text-[11px]">انقر لعرض دليل المهندس الفوري ←</span>
                      <Terminal className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Modern High-End Overlay Dialog popup */}
      <AnimatePresence>
        {selectedTerm && (
          <>
            {/* Dark translucent backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerm(null)}
              className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md"
            />

            {/* Centered spacious modal card */}
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className={`w-full max-w-2xl border rounded-3xl p-6 sm:p-8 shadow-2xl text-right overflow-hidden relative ${
                  isDarkMode 
                    ? "bg-zinc-950 border-zinc-900 text-zinc-100" 
                    : "bg-white border-zinc-200 text-zinc-900"
                }`}
              >
                {/* Soft backdrop radial accent */}
                <div className={`absolute -top-12 -left-12 w-44 h-44 rounded-full blur-3xl opacity-50 ${
                  isDarkMode ? "bg-red-950/40" : "bg-red-100/50"
                }`} />

                <div className="relative z-10 space-y-6">
                  {/* Modal Header */}
                  <div className={`flex items-start justify-between gap-4 pb-4 border-b w-full ${
                    isDarkMode ? "border-zinc-900" : "border-zinc-150"
                  }`}>
                    <div className="text-right flex-1 min-w-0">
                      <div className="flex items-center gap-2 justify-start mb-1 flex-wrap">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${
                          isDarkMode ? "bg-zinc-900 text-zinc-400" : "bg-zinc-100 text-zinc-500"
                        }`}>
                          {selectedTerm.lectureId === 1 
                            ? "المحاضرة الأولى" 
                            : selectedTerm.lectureId === 2 
                            ? "المحاضرة الثانية" 
                            : selectedTerm.lectureId === 3 
                            ? "المحاضرة الثالثة" 
                            : selectedTerm.lectureId === 4 
                            ? "المحاضرة الرابعة" 
                            : selectedTerm.lectureId === 5
                            ? "المحاضرة الخامسة"
                            : selectedTerm.lectureId === 7
                            ? "المحاضرة السابعة"
                            : "المحاضرة الثامنة"}
                        </span>
                        <span className="text-[10px] text-zinc-400">• مفهوم وهندسة الشبكات</span>
                      </div>
                      
                      <h3 className={`text-xl sm:text-2xl font-black font-mono tracking-tight text-right ${
                        isDarkMode ? "text-zinc-50" : "text-zinc-950"
                      }`}>
                        {selectedTerm.term}
                      </h3>
                    </div>

                    {/* Exit/Dismiss button */}
                    <button
                      onClick={() => setSelectedTerm(null)}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        isDarkMode 
                          ? "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white" 
                          : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
                      }`}
                      title="إغلاق النافذة"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-5">
                    
                    {/* EN definition */}
                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase text-left block select-none">
                        English Technical Terminology & Guide
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed text-left font-sans p-4 rounded-2xl border ${
                        isDarkMode 
                          ? "bg-zinc-900/60 border-zinc-900 text-zinc-300" 
                          : "bg-zinc-50/60 border-zinc-150 text-zinc-800"
                      }`} dir="ltr">
                        {selectedTerm.definitionEn}
                      </p>
                    </div>

                    {/* AR definition with absolute right alignment */}
                    <div className="space-y-1.5" dir="rtl">
                      <h4 className={`text-[10.5px] font-bold uppercase flex items-center gap-1.5 text-right select-none ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-500"
                      }`}>
                        <Layers className="w-4 h-4 text-red-500 shrink-0" />
                        <span>التعريف والترجمة باللغة العربية:</span>
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed text-right font-semibold p-4 rounded-2xl border ${
                        isDarkMode 
                          ? "bg-red-955/10 border-red-900/40 text-red-200" 
                          : "bg-red-500/5 border border-red-100 text-zinc-850"
                      }`} dir="rtl">
                        {selectedTerm.definitionAr}
                      </p>
                    </div>

                    {/* Importance details block with absolute right alignment */}
                    <div className="space-y-1.5" dir="rtl">
                      <h4 className={`text-[11px] font-bold flex items-center gap-1.5 text-right select-none ${
                        isDarkMode ? "text-amber-450" : "text-amber-800"
                      }`}>
                        <Star className="w-4 h-4 text-amber-500 fill-amber-150 shrink-0" />
                        <span>الأهمية الميدانية في بيئة العمل (Enterprise Importance):</span>
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed text-right font-medium p-4 rounded-2xl border border-dashed ${
                        isDarkMode 
                          ? "bg-amber-500/5 border-amber-955/20 text-amber-350" 
                          : "bg-amber-500/5 border-amber-200/60 text-zinc-650"
                      }`} dir="rtl">
                        {selectedTerm.importance}
                      </p>
                    </div>

                  </div>

                  {/* Close Action in Footer */}
                  <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-900 flex justify-end">
                    <button
                      onClick={() => setSelectedTerm(null)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        isDarkMode 
                          ? "bg-zinc-900 border border-zinc-805 text-zinc-200 hover:bg-zinc-850"
                          : "bg-zinc-900 text-white hover:bg-zinc-850"
                      }`}
                    >
                      فهمت الدليل، إغلاق
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
