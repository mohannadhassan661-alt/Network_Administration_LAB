import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { quizQuestions, essayQuestions } from "../data/slidesData";
import { 
  Award, 
  CheckCircle, 
  XCircle, 
  ChevronLeft, 
  RefreshCw, 
  Info, 
  HelpCircle, 
  BookOpen, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  Terminal, 
  Compass
} from "lucide-react";

interface QuizProps {
  selectedLecture?: number | "all";
  isDarkMode?: boolean;
}

export function Quiz({ selectedLecture = "all", isDarkMode = false }: QuizProps) {
  // Tabs: mcq = Multiple Choice Quiz, essay = Essay Questions Review
  const [activeTab, setActiveTab] = useState<"mcq" | "essay">("mcq");

  // --- MCQ States ---
  const activeMcqs = quizQuestions.filter(
    (q) => selectedLecture === "all" || q.lectureId === selectedLecture
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersLog, setAnswersLog] = useState<{ questionIndex: number; selectedOptionIndex: number; correct: boolean }[]>([]);

  // --- Essay States ---
  const activeEssays = essayQuestions.filter(
    (e) => selectedLecture === "all" || e.lectureId === selectedLecture
  );
  // Track open states for each essay ID
  const [expandedEssays, setExpandedEssays] = useState<Record<number, boolean>>({});

  // Reset states when switched lectures
  useEffect(() => {
    resetQuiz();
    setExpandedEssays({});
  }, [selectedLecture]);

  // Handle MCQ transitions
  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered || !activeMcqs[currentQuestionIndex]) return;
    
    const isCorrect = selectedOption === activeMcqs[currentQuestionIndex].correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersLog((prev) => [
      ...prev,
      {
        questionIndex: currentQuestionIndex,
        selectedOptionIndex: selectedOption,
        correct: isCorrect,
      },
    ]);

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeMcqs.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setAnswersLog([]);
  };

  const toggleEssayAnswer = (id: number) => {
    setExpandedEssays((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAllEssays = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    activeEssays.forEach((e) => {
      next[e.id] = expand;
    });
    setExpandedEssays(next);
  };

  const currentMcq = activeMcqs[currentQuestionIndex];
  const optionLetters = ["أ", "ب", "ج", "د"];

  return (
    <div className="py-6 px-4 max-w-4xl mx-auto text-right font-sans" dir="rtl" id="quiz-page-container">
      
      {/* Quiz Master Header Banner */}
      <div className={`mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border p-6 rounded-2xl transition-all duration-300 ${
        isDarkMode 
          ? "bg-zinc-900/80 border-zinc-800 text-zinc-100 shadow-md" 
          : "bg-white border-zinc-200/60 text-zinc-900 shadow-xs"
      }`} id="quiz-header-banner">
        <div className="flex items-center gap-3.5 justify-start">
          <div className={`p-3 rounded-2xl ${
            isDarkMode 
              ? "bg-red-500/10 text-red-400 border border-red-500/15" 
              : "bg-red-50 text-red-600 border border-red-100"
          }`}>
            <Award className="w-6 h-6 shrink-0" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">مقياس الفهم والاستيعاب الفني</h2>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
              منظومة قياس ذكية تطبق معايير الفهم الهيكلي والعملي لإدارة الخوادم والشبكات.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border ${
            isDarkMode ? "bg-zinc-950 border-zinc-800 text-zinc-400" : "bg-zinc-100 border-zinc-200 text-zinc-600"
          }`}>
            المحاضرة: {selectedLecture === "all" ? "مكثّف شامل بكافة الفروع" : `المحاضرة ${selectedLecture}`}
          </span>
        </div>
      </div>

      {/* Modern Segmented Navigation Tabs */}
      <div className={`flex p-1.5 rounded-xl mb-8 border ${
        isDarkMode ? "bg-zinc-900/40 border-zinc-800/80" : "bg-zinc-100 border-zinc-200"
      }`} id="quiz-view-tabs">
        <button
          onClick={() => setActiveTab("mcq")}
          className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "mcq"
              ? isDarkMode 
                ? "bg-zinc-800 text-white shadow-xs" 
                : "bg-white text-zinc-900 shadow-xs"
              : isDarkMode
                ? "text-zinc-500 hover:text-white"
                : "text-zinc-600 hover:text-zinc-950"
          }`}
          id="tab-mcq-trigger"
        >
          <Compass className="w-4 h-4" />
          <span>اختبار الخيارات المتعددة التفاعلي {activeMcqs.length > 0 && `(${activeMcqs.length})`}</span>
        </button>
        <button
          onClick={() => setActiveTab("essay")}
          className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "essay"
              ? isDarkMode 
                ? "bg-zinc-800 text-white shadow-xs" 
                : "bg-white text-zinc-900 shadow-xs"
              : isDarkMode
                ? "text-zinc-500 hover:text-white"
                : "text-zinc-600 hover:text-zinc-950"
          }`}
          id="tab-essay-trigger"
        >
          <BookOpen className="w-4 h-4" />
          <span>الأسئلة المقالية والمراجعة الشاملة {activeEssays.length > 0 && `(${activeEssays.length})`}</span>
        </button>
      </div>

      {/* TAB CONTENT AREA */}
      <AnimatePresence mode="wait">
        {activeTab === "mcq" ? (
          /* MCQ QUIZ CONTAINER */
          <motion.div
            key="mcq-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            id="mcq-view-content"
          >
            {activeMcqs.length === 0 ? (
              <div className={`border rounded-3xl p-12 text-center flex flex-col items-center justify-center transition-all ${
                isDarkMode ? "bg-zinc-900/50 border-zinc-800 text-zinc-400" : "bg-white border-zinc-200 text-zinc-700"
              }`} id="no-mcq-fallback">
                <HelpCircle className="w-12 h-12 text-zinc-500 stroke-1 mb-4" />
                <h4 className="font-bold text-sm text-zinc-950 dark:text-zinc-200">لا توجد أسئلة خيارات لهذه المحاضرة حالياً</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-xs leading-relaxed">
                  يرجى تغيير المحاضرة النشطة من القائمة المنسدلة بالأعلى لتفعيل أسئلتها، أو اختيار "مكثف شامل".
                </p>
              </div>
            ) : !isFinished ? (
              <div className={`border rounded-3xl p-6 md:p-8 shadow-xs transition-all duration-300 ${
                isDarkMode ? "bg-zinc-900/70 border-zinc-800 text-zinc-100" : "bg-white border-zinc-200 text-zinc-900"
              }`} id="mcq-active-card">
                
                {/* Modern Linear ProgressBar instead of dot pills to prevent overflow */}
                <div className="mb-6 flex flex-col gap-2.5" id="mcq-progress-container">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-zinc-500 dark:text-zinc-400">
                      السؤال <span className="font-mono text-zinc-700 dark:text-zinc-350">{currentQuestionIndex + 1}</span> من <span className="font-mono text-zinc-700 dark:text-zinc-350">{activeMcqs.length}</span>
                    </span>
                    <span className="font-bold text-red-650 dark:text-red-400 font-mono">
                      {Math.round(((currentQuestionIndex + 1) / activeMcqs.length) * 100)}% مكتمل
                    </span>
                  </div>
                  
                  {/* Styled continuous bar */}
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-zinc-950" : "bg-zinc-100"}`}>
                    <div 
                      className="bg-red-500 dark:bg-red-500 h-full transition-all duration-350 ease-out rounded-full"
                      style={{ width: `${((currentQuestionIndex + 1) / activeMcqs.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* The Current Lecture Badge */}
                <div className="flex mb-4">
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-md ${
                    isDarkMode ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-700"
                  }`}>
                    المستهدف: المحاضرة الثالثة والأقسام المعتمدة {currentMcq.lectureId}
                  </span>
                </div>

                {/* Animated Question Body to avoid any static flickering */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-base md:text-lg font-bold leading-relaxed mb-6 block text-zinc-900 dark:text-zinc-100 select-text">
                      {currentMcq.question}
                    </h3>

                    {/* Options List */}
                    <div className="space-y-3 mb-6" id="mcq-options-container">
                      {currentMcq.options.map((option, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrectAns = idx === currentMcq.correctAnswerIndex;
                        
                        let optionStyle = isDarkMode
                          ? "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800"
                          : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-100";
                          
                        let letterBadgeStyle = isDarkMode
                          ? "bg-zinc-900 text-zinc-400 border border-zinc-800"
                          : "bg-zinc-200 text-zinc-800 border border-zinc-300";

                        if (isAnswered) {
                          if (isCorrectAns) {
                            optionStyle = isDarkMode
                              ? "border-emerald-500 bg-emerald-950/20 text-emerald-300 font-bold"
                              : "border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
                            letterBadgeStyle = "bg-emerald-600 text-white border-transparent";
                          } else if (isSelected) {
                            optionStyle = isDarkMode
                              ? "border-rose-500 bg-rose-950/20 text-rose-300 font-bold"
                              : "border-rose-600 bg-rose-100 text-rose-950 font-bold";
                            letterBadgeStyle = "bg-rose-600 text-white border-transparent";
                          } else {
                            optionStyle = isDarkMode
                              ? "border-zinc-800/60 opacity-40 bg-zinc-900/10 text-zinc-500"
                              : "border-zinc-200 opacity-40 bg-zinc-50/10 text-zinc-500";
                            letterBadgeStyle = isDarkMode ? "bg-zinc-900 text-zinc-700" : "bg-zinc-100 text-zinc-500";
                          }
                        } else if (isSelected) {
                          optionStyle = isDarkMode
                            ? "border-red-500 bg-red-950/20 text-red-300 font-bold ring-1 ring-red-500/20 shadow-xs"
                            : "border-red-650 bg-red-50/80 text-red-950 font-bold ring-2 ring-red-350 shadow-xs";
                          letterBadgeStyle = isDarkMode 
                            ? "bg-red-500 text-white border-transparent" 
                            : "bg-red-650 text-white border-transparent";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={isAnswered}
                            onClick={() => handleOptionClick(idx)}
                            className={`w-full p-4 rounded-xl border transition-all text-xs md:text-sm flex items-center justify-between gap-4 cursor-pointer select-none text-right ${optionStyle}`}
                            id={`option-${idx}-btn`}
                          >
                            <div className="flex items-center gap-3.5 flex-1 min-w-0">
                              <span className={`h-7 w-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${letterBadgeStyle}`}>
                                {optionLetters[idx]}
                              </span>
                              <span className="leading-relaxed block flex-1 text-right">
                                {option}
                              </span>
                            </div>

                            <div className="flex items-center justify-center shrink-0">
                              {isAnswered && isCorrectAns && (
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                              )}
                              {isAnswered && isSelected && !isCorrectAns && (
                                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Action Button Row */}
                <div className={`flex flex-col sm:flex-row sm:justify-between items-center gap-4 pt-5 border-t ${isDarkMode ? "border-zinc-800" : "border-zinc-100"}`} id="mcq-action-bar">
                  {!isAnswered ? (
                    <button
                      disabled={selectedOption === null}
                      onClick={handleConfirmAnswer}
                      className={`w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs select-none shadow-xs transition-all tracking-wide text-center cursor-pointer ${
                        selectedOption !== null
                          ? isDarkMode
                            ? "bg-red-500 hover:bg-red-600 text-zinc-950 scale-102 font-bold shadow-red-500/5"
                            : "bg-red-600 hover:bg-red-700 text-white scale-102 font-bold"
                          : isDarkMode
                            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                      }`}
                      id="confirm-btn"
                    >
                      تأكيد إجابتي النهائية
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className={`w-full sm:w-auto px-7 py-3 font-bold rounded-xl text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all scale-102 ${
                        isDarkMode 
                          ? "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
                          : "bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-50"
                      }`}
                      id="next-question-btn"
                    >
                      <span>{currentQuestionIndex === activeMcqs.length - 1 ? "مشاهدة التقرير النهائي للنتيجة" : "انتقال للسؤال التالي"}</span>
                      <ChevronLeft className="w-4 h-4 shrink-0" />
                    </button>
                  )}
                </div>

                {/* Explanation Card */}
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                      id="mcq-explanation"
                    >
                      <div className={`mt-6 p-5 rounded-xl border text-right ${
                        isDarkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-zinc-100 border-zinc-200"
                      }`}>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-200 mb-2">
                          <Info className="w-4 h-4 text-zinc-500" />
                          <span>الشرح والتحليل الهندسي العملي:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-900 dark:text-zinc-300 font-medium">
                          {currentMcq.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ) : (
              /* Score Card Screen */
              <motion.div
                key="score-screen"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`border rounded-3xl p-8 text-center relative overflow-hidden shadow-md transition-all duration-300 ${
                  isDarkMode ? "bg-zinc-900/80 border-zinc-800 text-zinc-100" : "bg-white border-zinc-200 text-zinc-950"
                }`}
                id="mcq-results-card"
              >
                <div className={`absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-30 ${
                  isDarkMode ? "bg-red-950" : "bg-red-150"
                }`}></div>
                
                <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-inner border ${
                  isDarkMode ? "bg-zinc-950 border-zinc-800 text-red-400" : "bg-red-50 text-red-650 border-red-100"
                }`}>
                  <Sparkles className="w-6 h-6 shrink-0" />
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2">تهانينا! لقد أكملت هذا الاختبار</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                  تمت مراجعة مخرجاتك وحساب نقاط الفهم الموصى بها لمختبري خوادم الشبكة.
                </p>

                {/* Score badge details */}
                <div className={`py-5 px-8 inline-block rounded-2xl border my-6 text-center ${
                  isDarkMode ? "bg-zinc-950 border-zinc-800/80" : "bg-zinc-50 border-zinc-200"
                }`} id="mcq-results-scorebox">
                  <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider select-none">نسبة الإجابات الصحيحة</div>
                  <div className="text-3xl font-extrabold mt-1 font-mono text-zinc-900 dark:text-white">
                    {score} <span className="text-zinc-500 text-lg font-medium">/ {activeMcqs.length}</span>
                  </div>
                  <p className="text-xs mt-2.5 font-bold text-zinc-600 dark:text-zinc-300">
                    {score === activeMcqs.length
                      ? "أداء مذهل واستثنائي! فهمك لشبكات المختبر فائق ومتكامل! 🌟"
                      : score >= activeMcqs.length * 0.7
                        ? "تقدير رائع وممتاز، أنت تفهم المعامل وهندسة النظم بدقة! 👍"
                        : "مراجعة شروحات السلايدات ثانية ستمنحك مهارة ورؤية أفضل! 📚"}
                  </p>
                </div>

                {/* Collapse answers overview */}
                <div className="mt-4 text-right max-w-xl mx-auto" id="mcq-detailed-logs">
                  <h4 className="font-bold text-xs pb-2 mb-3 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-300">
                    تقرير وتفصيل إجاباتك الفورية بالأسئلة:
                  </h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {activeMcqs.map((q, idx) => {
                      const log = answersLog.find((l) => l.questionIndex === idx);
                      const isCorrect = log?.correct ?? false;
                      return (
                        <div key={idx} className={`flex justify-between items-center text-xs p-3.5 border rounded-xl ${
                          isDarkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-zinc-50/50 border-zinc-150"
                        }`}>
                          <div className="shrink-0 flex items-center pr-2">
                            {isCorrect ? (
                              <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-555 dark:text-emerald-400 border border-emerald-500/10">
                                صحيحة ✓
                              </span>
                            ) : (
                              <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-rose-500/10 text-rose-555 dark:text-rose-400 border border-rose-500/10">
                                خاطئة ✗
                              </span>
                            )}
                          </div>
                          <p className="font-bold text-right truncate flex-1 pl-4 text-zinc-900 dark:text-zinc-300 leading-relaxed">
                            {q.question}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white select-none"
                    id="replay-test-btn"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>إعادة تقديم هذا الاختبار ثانية</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* ESSAY QUESTIONS ACCORDION VIEW */
          <motion.div
            key="essay-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            id="essay-view-content"
          >
            {activeEssays.length === 0 ? (
              <div className={`border rounded-3xl p-12 text-center flex flex-col items-center justify-center transition-all ${
                isDarkMode ? "bg-zinc-900/50 border-zinc-800 text-zinc-400" : "bg-white border-zinc-200 text-zinc-700"
              }`} id="no-essay-fallback">
                <HelpCircle className="w-12 h-12 text-zinc-500 stroke-1 mb-4" />
                <h4 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">لا توجد أسئلة مقالية متوفرة لهذه المحاضرة حالياً</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-xs leading-relaxed">
                  يرجى تغيير المحاضرة النشطة من القائمة المنسدلة بالأعلى أو تفعيل خيار "شامل لكافة المناهج المحاضرات".
                </p>
              </div>
            ) : (
              <div className="space-y-4" id="essay-list-container">
                
                {/* Control Action Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-400">
                    يوجد <span className="font-mono text-zinc-950 dark:text-zinc-200">{activeEssays.length}</span> أسئلة مقالية وشروحات معتمدة للمراجعة.
                  </span>
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => toggleAllEssays(true)}
                      className={`text-[10px] font-bold px-2.5 py-1.5 rounded-md border ${
                        isDarkMode
                          ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
                          : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                      }`}
                      id="expand-all-essays-btn"
                    >
                      كشف كافة الإجابات
                    </button>
                    <button
                      onClick={() => toggleAllEssays(false)}
                      className={`text-[10px] font-bold px-2.5 py-1.5 rounded-md border ${
                        isDarkMode
                          ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                          : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                      }`}
                      id="collapse-all-essays-btn"
                    >
                      طي الإجابات
                    </button>
                  </div>
                </div>

                {/* Essay Accordion Cards list */}
                {activeEssays.map((essay, index) => {
                  const isOpen = !!expandedEssays[essay.id];
                  return (
                    <div 
                      key={essay.id}
                      className={`border rounded-2xl overflow-hidden transition-all duration-305 ${
                        isOpen 
                          ? isDarkMode 
                            ? "border-red-500/20 bg-zinc-900/50 shadow-xs" 
                            : "border-red-200 bg-red-50/5 shadow-3xs"
                          : isDarkMode
                            ? "border-zinc-800 bg-zinc-900/20 hover:border-zinc-750"
                            : "border-zinc-200/80 bg-white hover:border-zinc-300"
                      }`}
                      id={`essay-card-${essay.id}`}
                    >
                      
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleEssayAnswer(essay.id)}
                        className="w-full p-5 flex items-start justify-between gap-4 text-right cursor-pointer select-none"
                        id={`essay-card-${essay.id}-header-trigger`}
                      >
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] bg-red-500/15 text-red-500 dark:text-red-400 font-extrabold px-2.5 py-0.5 rounded-md font-sans">
                              سؤال مقالي {index + 1}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                              isDarkMode ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-650"
                            }`}>
                              المحاضرة {essay.lectureId}
                            </span>
                          </div>
                          
                          <h4 className="text-xs md:text-sm font-bold text-zinc-950 dark:text-zinc-50 leading-relaxed block pr-0.5">
                            {essay.question}
                          </h4>
                        </div>

                        {/* Interactive Expand indicators */}
                        <div className={`mt-1 p-1 rounded-lg border transition-all ${
                          isOpen 
                            ? "bg-red-500 text-white border-transparent rotate-180" 
                            : isDarkMode 
                              ? "bg-zinc-950 border-zinc-800 text-zinc-400" 
                              : "bg-zinc-50 border-zinc-200 text-zinc-600"
                        }`}>
                          <ChevronDown className="w-4 h-4 shrink-0" />
                        </div>
                      </button>

                      {/* Accordion Answer Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.23, ease: "easeInOut" }}
                            className="border-t border-zinc-200 dark:border-zinc-800"
                          >
                            <div className="p-5 md:p-6 text-right leading-relaxed flex flex-col gap-5">
                              
                              {/* Content text */}
                              <div className="text-right">
                                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-extrabold mb-1.5 uppercase tracking-wide">الإجابة التفصيلية المعتمدة:</div>
                                <p className="text-xs md:text-sm text-zinc-950 dark:text-zinc-200 leading-relaxed font-bold pr-1">
                                  {essay.answer}
                                </p>
                              </div>

                              {/* Key bullet points summary */}
                              {essay.keyPoints && essay.keyPoints.length > 0 && (
                                <div className={`p-4 rounded-xl ${
                                  isDarkMode ? "bg-zinc-900/40 border border-zinc-800" : "bg-zinc-50 border border-zinc-200/60"
                                }`}>
                                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold mb-2 flex items-center gap-1.5">
                                    <Layers className="w-3.5 h-3.5 text-zinc-500" />
                                    <span>الركائز والمفاهيم الجوهرية للجواب:</span>
                                  </div>
                                  <ul className="space-y-1.5 pr-1.5">
                                    {essay.keyPoints.map((pt, pIdx) => (
                                      <li key={pIdx} className="text-xs text-zinc-900 dark:text-zinc-300 flex items-start gap-2">
                                        <span className="text-red-500 font-bold mt-0.5">•</span>
                                        <span className="leading-relaxed font-semibold">{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* PowerShell command / Code examples if available */}
                              {essay.codeExample && (
                                <div className="rounded-xl overflow-hidden border border-zinc-800 dark:border-zinc-800 relative">
                                  <div className="bg-zinc-800 dark:bg-zinc-950 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 select-none">
                                    <div className="flex items-center gap-1.5">
                                      <Terminal className="w-3.5 h-3.5" />
                                      <span>نص وموجه الأوامر CMD / PowerShell</span>
                                    </div>
                                    <span>حقن الأوامر التأسيسية للمجال</span>
                                  </div>
                                  <pre className="bg-zinc-900 p-4 overflow-x-auto text-left text-[11px] font-mono leading-relaxed text-zinc-150 select-all" dir="ltr">
                                    {essay.codeExample}
                                  </pre>
                                </div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
