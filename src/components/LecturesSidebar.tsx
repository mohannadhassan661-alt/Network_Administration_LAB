import { motion, AnimatePresence } from "motion/react";
import { BookOpen, BookOpenCheck, CheckCircle2, ChevronRight, X, Sparkles, Layers, ListTodo } from "lucide-react";
import { slidesData } from "../data/slidesData";

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
  { id: 7, title: "المحاضرة 7: خادم المجال الإضافي ADC", icon: "⚡", subtitle: "تأمين بيئة العمل ضد الأعطال الطارئة" },
  { id: 8, title: "المحاضرة 8: عنونة الشبكات DHCP", icon: "🌐", subtitle: "أتمتة توزيع الـ IPs وإعداد النطاقات Scope" },
];

interface LecturesSidebarProps {
  selectedLecture: number | "all";
  setSelectedLecture: (lecture: number | "all") => void;
  completedSlides: number[];
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export function LecturesSidebar({
  selectedLecture,
  setSelectedLecture,
  completedSlides,
  isOpen,
  onClose,
  isDarkMode,
}: LecturesSidebarProps) {
  
  // Calculate stats for a given lecture
  const getLectureStats = (lectureId: number | "all") => {
    const lectureSlides = slidesData.filter((s) => lectureId === "all" || s.lectureId === lectureId);
    const total = lectureSlides.length;
    const completed = lectureSlides.filter((s) => completedSlides.includes(s.id)).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percentage };
  };

  const allStats = getLectureStats("all");

  const sidebarContent = (
    <div className={`h-full flex flex-col justify-between font-sans selection:bg-red-500/20 text-right ${
      isDarkMode ? "text-zinc-100" : "text-zinc-900"
    }`}>
      
      {/* Sidebar Top Header */}
      <div>
        <div className={`p-4 border-b flex items-center justify-between select-none ${
          isDarkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-zinc-50/70 border-zinc-150"
        }`}>
          <div className="flex items-center gap-2">
            <span className={`p-2 rounded-xl border ${
              isDarkMode ? "bg-zinc-950 border-zinc-850 text-red-400" : "bg-red-50 border-red-100 text-red-650"
            }`}>
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h4 className={`text-xs font-bold leading-normal ${isDarkMode ? "text-zinc-200" : "text-zinc-800"}`}>
                قائمة فصول ومحاضرات المعمل
              </h4>
              <p className={`text-[10px] mt-0.5 ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                حدد المحاضرة للتركيز على محتوياتها
              </p>
            </div>
          </div>
          
          {/* Mobile close button only */}
          <button
            onClick={onClose}
            className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer border ${
              isDarkMode 
                ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white" 
                : "bg-white border-zinc-250 text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic List is scrollable */}
        <div className="p-3 space-y-2.5 overflow-y-auto max-h-[calc(100vh-210px)] xl:max-h-[500px]">
          {LECTURES.map((lecture) => {
            const isSelected = selectedLecture === lecture.id;
            const stats = getLectureStats(lecture.id);
            const isCompleted = stats.percentage === 100;

            return (
              <button
                key={lecture.id}
                onClick={() => {
                  setSelectedLecture(lecture.id);
                  onClose(); // Close mobile drawer automatically
                }}
                className={`w-full p-3.5 rounded-2xl text-right border transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-2.5 cursor-pointer group ${
                  isSelected
                    ? isDarkMode
                      ? "bg-red-950/30 border-red-900/80 shadow-xs"
                      : "bg-red-50/60 border-red-200 shadow-3xs"
                    : isDarkMode
                      ? "bg-zinc-900/40 border-zinc-850 text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900"
                      : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50"
                }`}
              >
                {/* Visual indicator line for active step */}
                {isSelected && (
                  <span className="absolute top-0 right-0 h-full w-1 bg-red-600 rounded-l-full" />
                )}

                <div className="flex items-start gap-3 justify-start w-full">
                  {/* Emoji wrapper */}
                  <span className={`h-8 w-8 text-sm flex items-center justify-center rounded-xl font-bold select-none shrink-0 ${
                    isSelected
                      ? isDarkMode ? "bg-red-900/50 text-red-400" : "bg-red-100 text-red-700"
                      : isDarkMode ? "bg-zinc-950 text-zinc-300" : "bg-zinc-100 text-zinc-650"
                  }`}>
                    {lecture.icon}
                  </span>

                  {/* Text labels */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 justify-start">
                      <h5 className={`text-xs font-black truncate leading-snug ${
                        isSelected
                          ? isDarkMode ? "text-red-400 font-bold" : "text-red-900 font-bold"
                          : isDarkMode ? "text-zinc-200" : "text-zinc-800"
                      }`}>
                        {lecture.title}
                      </h5>
                      {isCompleted && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      )}
                    </div>
                    <p className={`text-[9.5px] truncate mt-1 leading-normal ${
                      isDarkMode ? "text-zinc-400" : "text-zinc-500"
                    }`}>
                      {lecture.subtitle}
                    </p>
                  </div>
                </div>

                {/* Micro progress line for academic level */}
                <div className="w-full space-y-1">
                  <div className="flex justify-between items-center text-[9px] font-mono leading-none">
                    <span className={isDarkMode ? "text-zinc-550" : "text-zinc-400"}>
                      ({stats.completed} من {stats.total} شرائح)
                    </span>
                    <span className={`font-bold ${
                      isCompleted 
                        ? "text-emerald-500" 
                        : isSelected 
                          ? isDarkMode ? "text-red-400" : "text-red-650"
                          : isDarkMode ? "text-zinc-400" : "text-zinc-500"
                    }`}>
                      {stats.percentage}%
                    </span>
                  </div>
                  
                  {/* Real progress line */}
                  <div className={`h-1 w-full rounded-full overflow-hidden ${
                    isDarkMode ? "bg-zinc-950" : "bg-zinc-150"
                  }`}>
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted
                          ? "bg-emerald-500"
                          : isDarkMode ? "bg-red-500/80" : "bg-red-600"
                      }`}
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                </div>

              </button>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer Metrics */}
      <div className={`p-4 border-t select-none ${
        isDarkMode ? "bg-zinc-950/20 border-zinc-800" : "bg-zinc-50/40 border-zinc-150"
      }`}>
        <div className={`p-3.5 rounded-2xl border text-center space-y-2.5 ${
          isDarkMode 
            ? "bg-zinc-950 border-zinc-850 text-zinc-300" 
            : "bg-white border-zinc-150 text-zinc-700 shadow-2xs"
        }`}>
          <div className="flex items-center gap-2 justify-start mb-1 text-right border-b pb-2 border-zinc-800/20">
            <ListTodo className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className={`text-[10px] font-bold ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
              إجمالي التقدم بالمادة بالكامل
            </span>
          </div>
          
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold">المعدل العام للمنهج:</span>
            <span className="font-mono font-black text-red-500">
              {allStats.percentage}%
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-zinc-500">الشرائح المنجزة:</span>
            <span className="font-mono text-[11px] font-bold">
              {allStats.completed} من {allStats.total}
            </span>
          </div>

          <div className={`h-1.5 w-full rounded-full overflow-hidden ${
            isDarkMode ? "bg-zinc-950" : "bg-zinc-100"
          }`}>
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${allStats.percentage}%` }}
            />
          </div>
        </div>
      </div>

    </div>
  );

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

          {/* Slide-over Side Drawer (for ALL screen sizes, freeing up desktop workspace) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            className={`fixed top-0 right-0 h-full w-[320px] max-w-[85vw] z-50 shadow-2xl border-l overflow-hidden ${
              isDarkMode 
                ? "bg-zinc-950/98 border-zinc-900" 
                : "bg-white/98 border-zinc-150 backdrop-blur-md"
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
            <div className="p-3.5 space-y-2.5 overflow-y-auto h-[calc(100vh-210px)] select-none">
              {LECTURES.map((lecture) => {
                const isSelected = selectedLecture === lecture.id;
                const stats = getLectureStats(lecture.id);
                const isCompleted = stats.percentage === 100;

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
                          : isDarkMode ? "bg-zinc-900 text-zinc-300" : "bg-zinc-100 text-zinc-650"
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
                          {isCompleted && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                        </div>
                        <p className={`text-[9px] truncate mt-0.5 leading-normal ${
                          isDarkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}>
                          {lecture.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-full space-y-1">
                      <div className="flex justify-between items-center text-[9px] font-mono leading-none">
                        <span className={isDarkMode ? "text-zinc-400" : "text-zinc-500"}>
                          ({stats.completed} من {stats.total} شرائح)
                        </span>
                        <span className={`font-bold ${
                          isCompleted 
                            ? "text-emerald-500" 
                            : isSelected 
                              ? isDarkMode ? "text-red-400" : "text-red-650"
                              : isDarkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}>
                          {stats.percentage}%
                        </span>
                      </div>
                      
                      <div className={`h-1 w-full rounded-full overflow-hidden ${
                        isDarkMode ? "bg-zinc-900" : "bg-zinc-150"
                      }`}>
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCompleted
                              ? "bg-emerald-500"
                              : isDarkMode ? "bg-red-500/80" : "bg-red-600"
                          }`}
                          style={{ width: `${stats.percentage}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sidebar Footer Track Statistics */}
            <div className={`p-4 border-t select-none absolute bottom-0 left-0 right-0 ${
              isDarkMode ? "bg-zinc-950/80 border-zinc-900" : "bg-zinc-50/80 border-zinc-150"
            }`}>
              <div className={`p-3 rounded-xl border text-center space-y-2 ${
                isDarkMode 
                  ? "bg-zinc-950 border-zinc-900 text-zinc-300" 
                  : "bg-white border-zinc-150 text-zinc-700 shadow-3xs"
              }`}>
                <div className="flex items-center gap-2 justify-start mb-0.5 text-right border-b pb-1.5 border-zinc-800/20">
                  <ListTodo className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className={`text-[9.5px] font-bold ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
                    معدل التقدم الكلي لمادة ويندوز سيرفر
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-xs">المعدل العام للمنهج:</span>
                  <span className="font-mono font-black text-red-500">{allStats.percentage}%</span>
                </div>

                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-zinc-500">الشرائح المكتملة:</span>
                  <span className="font-mono text-[10.5px] font-bold">{allStats.completed} / {allStats.total}</span>
                </div>

                <div className={`h-1 w-full rounded-full overflow-hidden ${
                  isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}>
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${allStats.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
