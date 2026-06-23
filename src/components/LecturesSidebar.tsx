import { motion, AnimatePresence } from "motion/react";
import { BookOpen, ChevronRight, X } from "lucide-react";

interface LectureItem {
  id: number | "all";
  title: string;
  subtitle: string;
  icon: string;
}

const LECTURES: LectureItem[] = [
  { id: "all", title: "كافة المحاضرات المتاحة", subtitle: "منهج معمل ويندوز سيرفر الشامل", icon: "📚" },
  { id: 1, title: "المحاضرة 1: مقدمة وعناوين العمل المحددة", subtitle: "التعريف بالمعمل وتدشين التراخيص", icon: "🔑" },
  { id: 2, title: "المحاضرة 2: التثبيت والأنوية Core", subtitle: "تنزيل النظام ومميزات سطر الأوامر", icon: "💿" },
  { id: 3, title: "المحاضرة 3: الدليل النشط والمستخدمين", subtitle: "تنصيب الـ Active Directory والمجموعات", icon: "👥" },
  { id: 4, title: "المحاضرة 4: إلحاق أجهزة العملاء بالدومين", subtitle: "ربط Windows 10/11 بخادم الدومين", icon: "💻" },
  { id: 5, title: "المحاضرة 5: سياسات المجموعة GPO", subtitle: "ضبط الإعدادات عن بعد وتأمين الحسابات", icon: "🛡️" },
  { id: 7, title: "المحاضرة 7: بروتوكول الـ DHCP - الجزء الأول", icon: "🌐", subtitle: "بناء المجالات Scopes وتأجير المعرّفات" },
  { id: 8, title: "المحاضرة 8: الـ DHCP والجاهزية العالية - الجزء الثاني", icon: "⚡", subtitle: "عزل الـ MAC وتكرار السيرفرات Failover" },
];

interface LecturesSidebarProps {
  selectedLecture: number | "all";
  setSelectedLecture: (lecture: number | "all") => void;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export function LecturesSidebar({
  selectedLecture,
  setSelectedLecture,
  isOpen,
  onClose,
  isDarkMode,
}: LecturesSidebarProps) {
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop cover with blur - click away to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
          />

          {/* Slide-over Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            className={`fixed top-0 right-0 h-full w-[320px] max-w-[85vw] z-50 shadow-2xl border-l overflow-hidden ${
              isDarkMode 
                ? "bg-zinc-950/98 border-zinc-900 text-zinc-100" 
                : "bg-white/98 border-zinc-150 text-zinc-900 backdrop-blur-md"
            }`}
          >
            {/* Sidebar Top Header with Close Icon */}
            <div className={`p-4 border-b flex items-center justify-between select-none ${
              isDarkMode ? "bg-zinc-950/40 border-zinc-900" : "bg-zinc-50/70 border-zinc-150"
            }`}>
              <div className="flex items-center gap-2">
                <span className={`p-2 rounded-xl border ${
                  isDarkMode ? "bg-zinc-900 border-zinc-800 text-red-400" : "bg-red-50 border-red-100 text-red-650"
                }`}>
                  <BookOpen className="w-4 h-4" />
                </span>
                <div className="text-right">
                  <h4 className={`text-xs font-bold leading-normal ${isDarkMode ? "text-zinc-200" : "text-zinc-800"}`}>
                    قائمة الفصول والمحاضرات
                  </h4>
                  <p className={`text-[9px] mt-0.5 ${isDarkMode ? "text-zinc-550" : "text-zinc-400"}`}>
                    اختر محاضرة للتركيز على محتوياتها
                  </p>
                </div>
              </div>
              
              {/* Sleek Close Button visible on all sizes */}
              <button
                onClick={onClose}
                className={`p-2 rounded-xl transition-all cursor-pointer border ${
                  isDarkMode 
                    ? "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-805" 
                    : "bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable list container */}
            <div className="p-3.5 space-y-2.5 overflow-y-auto h-[calc(100vh-90px)] select-none">
              {LECTURES.map((lecture) => {
                const isSelected = selectedLecture === lecture.id;

                return (
                  <button
                    key={lecture.id}
                    onClick={() => {
                      setSelectedLecture(lecture.id);
                      onClose(); // Close drawer dynamically
                    }}
                    className={`w-full p-3.5 rounded-2xl text-right border transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-2.5 cursor-pointer group ${
                      isSelected
                        ? isDarkMode
                          ? "bg-red-950/20 border-red-900/50 shadow-xs text-red-400"
                          : "bg-red-500/5 border-red-200 shadow-3xs text-red-950"
                        : isDarkMode
                          ? "bg-zinc-900/30 border-zinc-900 text-zinc-300 hover:border-zinc-800 hover:bg-zinc-90 w-full"
                          : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-0 right-0 h-full w-1 bg-red-600 rounded-l-full" />
                    )}

                    <div className="flex items-start gap-2.5 justify-start w-full">
                      <span className={`h-8 w-8 text-sm flex items-center justify-center rounded-xl font-bold select-none shrink-0 ${
                        isSelected
                          ? isDarkMode ? "bg-red-900/40 text-red-400" : "bg-red-100 text-red-705"
                          : isDarkMode ? "bg-zinc-900 text-zinc-300" : "bg-zinc-100 text-zinc-655"
                      }`}>
                        {lecture.icon}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 justify-start">
                          <h5 className={`text-xs font-black truncate leading-snug ${
                            isSelected
                              ? isDarkMode ? "text-red-400 font-bold" : "text-red-900 font-bold"
                              : isDarkMode ? "text-zinc-200" : "text-zinc-850"
                          }`}>
                            {lecture.title}
                          </h5>
                        </div>
                        <p className={`text-[9px] truncate mt-0.5 leading-normal ${
                          isDarkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}>
                          {lecture.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
