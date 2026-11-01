// Script xử lý giao diện và tương tác cho Website Ôn tập Vật Lí 11 KNTT

document.addEventListener("DOMContentLoaded", () => {
  // ================= STATE =================
  let currentChapter = "all";
  let searchQuery = "";
  let showOnlyFavorites = false;
  let activeTab = "quiz"; // Default to quiz mode!

  // Load favorites from localStorage
  let favorites = new Set();
  try {
    const saved = localStorage.getItem("vl11_favs");
    if (saved) favorites = new Set(JSON.parse(saved));
  } catch (e) {
    console.warn("Could not load favorites:", e);
  }

  // Flashcards state
  let fcChapter = "all";
  let fcList = [];
  let fcIndex = 0;
  let fcFlipped = false;
  let fcMastered = new Set();
  try {
    const savedFc = localStorage.getItem("vl11_mastered");
    if (savedFc) fcMastered = new Set(JSON.parse(savedFc));
  } catch (e) {}

  // Calculator state
  let activeCalcId = calculatorPresets[0].id;
  let calcInputValues = {};
  calculatorPresets.forEach(preset => {
    calcInputValues[preset.id] = {};
    preset.inputs.forEach(inp => {
      calcInputValues[preset.id][inp.id] = inp.default;
    });
  });

  // ================= QUIZ STATE =================
  let quizMode = "practice"; // 'practice' | 'exam'
  let quizLevelFilter = "all";
  let quizTypeFilter = "all"; // 'all' | 'multiple_choice' | 'short_answer'
  let currentQuizChapter = "1";
  let activeQuizList = [];
  let quizCurrentIndex = 0;
  let quizUserAnswers = {}; // { [qId]: 'A'|'B'|'C'|'D' | string }
  let quizFlagged = new Set();
  let quizSubmitted = false;
  let quizTimerInterval = null;
  let quizSecondsLeft = 900;
  let quizSecondsSpent = 0;
  let quizFilterOnlyWrong = false;

  // Chapter best scores
  let chapterScores = {};
  try {
    const savedScores = localStorage.getItem("vl11_quiz_scores");
    if (savedScores) chapterScores = JSON.parse(savedScores);
  } catch (e) {}

  // Dark Mode detection & restore
  const initTheme = () => {
    const isDark = localStorage.getItem("vl11_theme") === "dark" ||
      (!("vl11_theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  initTheme();

  // Initialize Lucide icons
  const refreshIcons = () => {
    if (window.lucide) {
      lucide.createIcons();
    }
  };

  // Helper for rendering Math via KaTeX with robust loading check
  const renderMath = (element = document.body) => {
    const doRender = () => {
      if (window.renderMathInElement) {
        renderMathInElement(element, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      }
    };

    if (window.renderMathInElement) {
      doRender();
    } else {
      // Retry in case KaTeX CDN script is still resolving
      const interval = setInterval(() => {
        if (window.renderMathInElement) {
          clearInterval(interval);
          doRender();
        }
      }, 100);
      setTimeout(() => clearInterval(interval), 5000);
    }
  };

  // Toast Notification
  const showToast = (message) => {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-msg");
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
    toast.classList.add("opacity-100", "translate-y-0");
    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0");
      toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    }, 2200);
  };

  // ================= DOM ELEMENTS =================
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const formulaCountEl = document.getElementById("formula-count");
  const formulaContainer = document.getElementById("formula-container");
  const noResultEl = document.getElementById("no-results");
  const favCountBadge = document.getElementById("fav-count-badge");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const printBtn = document.getElementById("print-btn");

  // Tab containers
  const viewQuiz = document.getElementById("view-quiz");
  const viewList = document.getElementById("view-list");
  const viewFlashcards = document.getElementById("view-flashcards");
  const viewCalc = document.getElementById("view-calc");
  const viewCheatsheet = document.getElementById("view-cheatsheet");
  const listControls = document.getElementById("list-controls");

  // Tab switch buttons
  const tabButtons = document.querySelectorAll(".tab-switch-btn");

  // Chapter filter buttons
  const chapterButtons = document.querySelectorAll(".chapter-btn");
  const favFilterBtn = document.getElementById("fav-filter-btn");

  // ================= FUNCTIONS =================

  // Save favorites
  const saveFavorites = () => {
    try {
      localStorage.setItem("vl11_favs", JSON.stringify(Array.from(favorites)));
    } catch (e) {}
    updateFavBadge();
  };

  const updateFavBadge = () => {
    if (favCountBadge) {
      favCountBadge.textContent = favorites.size;
      if (favorites.size > 0) {
        favCountBadge.classList.remove("hidden");
      } else {
        favCountBadge.classList.add("hidden");
      }
    }
  };
  updateFavBadge();

  // Switch Tab
  const setTab = (tab) => {
    activeTab = tab;
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === tab) {
        btn.classList.add("bg-primary-600", "text-white", "shadow-sm");
        btn.classList.remove("text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      } else {
        btn.classList.remove("bg-primary-600", "text-white", "shadow-sm");
        btn.classList.add("text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-800");
      }
    });

    viewQuiz.classList.toggle("hidden", tab !== "quiz");
    viewList.classList.toggle("hidden", tab !== "list");
    viewFlashcards.classList.toggle("hidden", tab !== "flashcards");
    viewCalc.classList.toggle("hidden", tab !== "calc");
    viewCheatsheet.classList.toggle("hidden", tab !== "cheatsheet");

    if (listControls) {
      listControls.classList.toggle("hidden", tab !== "list");
    }

    if (tab === "quiz") {
      initQuizHub();
    } else if (tab === "list") {
      renderFormulas();
    } else if (tab === "flashcards") {
      initFlashcards();
    } else if (tab === "calc") {
      renderCalculatorView();
    } else if (tab === "cheatsheet") {
      renderCheatsheet();
    }
    refreshIcons();
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });

  // Chapter filter logic
  chapterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      chapterButtons.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white", "shadow-md");
        b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      });
      btn.classList.add("bg-blue-600", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");

      currentChapter = btn.dataset.chapter;
      renderFormulas();
    });
  });

  // Toggle favorite filter
  if (favFilterBtn) {
    favFilterBtn.addEventListener("click", () => {
      showOnlyFavorites = !showOnlyFavorites;
      if (showOnlyFavorites) {
        favFilterBtn.classList.add("bg-amber-500", "text-white");
        favFilterBtn.classList.remove("bg-amber-50", "text-amber-700", "dark:bg-amber-950/40", "dark:text-amber-300");
      } else {
        favFilterBtn.classList.remove("bg-amber-500", "text-white");
        favFilterBtn.classList.add("bg-amber-50", "text-amber-700", "dark:bg-amber-950/40", "dark:text-amber-300");
      }
      renderFormulas();
    });
  }

  // Search input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle("hidden", searchQuery === "");
    renderFormulas();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    renderFormulas();
    searchInput.focus();
  });

  // Theme toggle
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("vl11_theme", isDark ? "dark" : "light");
    refreshIcons();
  });

  // Print button
  printBtn.addEventListener("click", () => {
    setTab("list");
    // Show all chapters before printing
    currentChapter = "all";
    showOnlyFavorites = false;
    renderFormulas();
    setTimeout(() => {
      window.print();
    }, 300);
  });

  // ================= RENDER FORMULAS LIST =================
  const renderFormulas = () => {
    const filtered = physicsData.filter(item => {
      // Chapter filter
      if (currentChapter !== "all" && item.chapterId.toString() !== currentChapter) {
        return false;
      }
      // Favorites filter
      if (showOnlyFavorites && !favorites.has(item.id)) {
        return false;
      }
      // Search filter
      if (searchQuery) {
        const matchName = item.name.toLowerCase().includes(searchQuery);
        const matchLesson = item.lesson.toLowerCase().includes(searchQuery);
        const matchChapter = item.chapterName.toLowerCase().includes(searchQuery);
        const matchFormula = item.formulaLatex.toLowerCase().includes(searchQuery);
        const matchTags = item.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        const matchVars = item.variables.some(v => v.name.toLowerCase().includes(searchQuery) || v.sym.toLowerCase().includes(searchQuery));
        if (!matchName && !matchLesson && !matchChapter && !matchFormula && !matchTags && !matchVars) {
          return false;
        }
      }
      return true;
    });

    formulaCountEl.textContent = `${filtered.length} công thức`;
    formulaContainer.innerHTML = "";

    if (filtered.length === 0) {
      noResultEl.classList.remove("hidden");
      return;
    }
    noResultEl.classList.add("hidden");

    // Group or display items
    filtered.forEach(item => {
      const isFav = favorites.has(item.id);
      const card = document.createElement("div");
      card.className = "formula-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between";
      card.id = `card-${item.id}`;

      // Chapter badge color
      const badgeColors = {
        1: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-900",
        2: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900",
        3: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-900",
        4: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-900"
      };

      const badgeColor = badgeColors[item.chapterId] || badgeColors[1];

      // Derivatives HTML
      let derivativesHtml = "";
      if (item.derivativesLatex && item.derivativesLatex.length > 0) {
        derivativesHtml = `
          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Hệ quả & Công thức liên quan</div>
            <div class="flex flex-wrap gap-2">
              ${item.derivativesLatex.map(d => `
                <div class="bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg text-sm text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 font-mono">
                  $${d}$
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }

      // Variables table HTML
      const varsHtml = `
        <div class="mt-4 overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                <th class="pb-1.5 font-medium">Kí hiệu</th>
                <th class="pb-1.5 font-medium">Đại lượng</th>
                <th class="pb-1.5 font-medium text-right">Đơn vị chuẩn</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/50">
              ${item.variables.map(v => `
                <tr class="text-slate-700 dark:text-slate-300">
                  <td class="py-1.5 font-semibold text-blue-600 dark:text-blue-400 pr-2">$${v.sym}$</td>
                  <td class="py-1.5 pr-2">${v.name}</td>
                  <td class="py-1.5 text-right font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">${v.unit}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;

      // Pitfalls / Tips box
      const pitfallsHtml = `
        <div class="mt-4 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 rounded-xl p-3 text-xs text-amber-900 dark:text-amber-200">
          <div class="flex items-center gap-1.5 font-semibold mb-1 text-amber-800 dark:text-amber-300">
            <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>Lưu ý & Điểm bẫy trắc nghiệm:</span>
          </div>
          <ul class="list-disc pl-4 space-y-1">
            ${item.pitfalls.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      `;

      card.innerHTML = `
        <div>
          <!-- Header -->
          <div class="flex items-start justify-between gap-3 mb-2">
            <div>
              <span class="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md border ${badgeColor} mb-1.5">
                ${item.lesson}
              </span>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                ${item.name}
              </h3>
            </div>
            
            <div class="flex items-center gap-1 shrink-0">
              <button class="bookmark-btn p-2 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors" data-id="${item.id}" title="${isFav ? 'Bỏ lưu' : 'Lưu công thức'}">
                <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}"></i>
              </button>
              <button class="copy-btn p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors" data-latex="${encodeURIComponent(item.formulaLatex)}" title="Sao chép mã LaTeX">
                <i data-lucide="copy" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Main Formula Display -->
          <div class="my-3 py-3 px-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-center flex items-center justify-center overflow-x-auto text-blue-700 dark:text-blue-300 font-bold text-lg">
            $$${item.formulaLatex}$$
          </div>

          <!-- Derivatives -->
          ${derivativesHtml}

          <!-- Variables details -->
          ${varsHtml}

          <!-- Pitfalls -->
          ${pitfallsHtml}
        </div>

        <!-- Tags Footer -->
        <div class="mt-4 pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800/80">
          ${item.tags.map(t => `<span class="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">#${t}</span>`).join("")}
        </div>
      `;

      formulaContainer.appendChild(card);
    });

    // Attach bookmark events
    document.querySelectorAll(".bookmark-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (favorites.has(id)) {
          favorites.delete(id);
          showToast("Đã bỏ khỏi danh sách yêu thích");
        } else {
          favorites.add(id);
          showToast("Đã lưu vào danh sách yêu thích ⭐");
        }
        saveFavorites();
        renderFormulas();
      });
    });

    // Attach copy LaTeX events
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const latex = decodeURIComponent(btn.dataset.latex);
        navigator.clipboard.writeText(latex).then(() => {
          showToast("Đã sao chép mã công thức LaTeX!");
        }).catch(() => {
          showToast("Không thể sao chép");
        });
      });
    });

    // Render KaTeX for cards
    renderMath(formulaContainer);
    refreshIcons();
  };

  // ================= FLASHCARDS MODE =================
  const initFlashcards = () => {
    // Filter list according to fcChapter
    fcList = physicsData.filter(item => {
      if (fcChapter === "all") return true;
      return item.chapterId.toString() === fcChapter;
    });

    // Reset index
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcardUI();
  };

  const renderFlashcardUI = () => {
    const fcCard = document.getElementById("fc-card");
    const fcFrontText = document.getElementById("fc-front-text");
    const fcBackFormula = document.getElementById("fc-back-formula");
    const fcBackLesson = document.getElementById("fc-back-lesson");
    const fcBackVars = document.getElementById("fc-back-vars");
    const fcBackPitfall = document.getElementById("fc-back-pitfall");
    const fcProgressEl = document.getElementById("fc-progress-text");
    const fcProgressBar = document.getElementById("fc-progress-bar");
    const fcMasteredCountEl = document.getElementById("fc-mastered-count");

    if (!fcList || fcList.length === 0) {
      return;
    }

    const currentItem = fcList[fcIndex];
    const isMastered = fcMastered.has(currentItem.id);

    // Update Progress
    fcProgressEl.textContent = `Thẻ ${fcIndex + 1} / ${fcList.length}`;
    fcProgressBar.style.width = `${((fcIndex + 1) / fcList.length) * 100}%`;
    fcMasteredCountEl.textContent = `${fcMastered.size} đã thuộc`;

    // Front content
    fcFrontText.innerHTML = `
      <div class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 inline-block mb-3">
        ${currentItem.chapterName}
      </div>
      <div class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        ${currentItem.name}
      </div>
      <div class="text-sm text-slate-500 dark:text-slate-400 mt-2">
        ${currentItem.lesson}
      </div>
      <div class="mt-8 text-xs text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 font-medium animate-pulse">
        <i data-lucide="rotate-cw" class="w-4 h-4"></i> Nhấp để lật thẻ xem công thức
      </div>
    `;

    // Back content
    fcBackLesson.textContent = currentItem.lesson;
    fcBackFormula.innerHTML = `$$${currentItem.formulaLatex}$$`;
    
    // Back variables preview
    fcBackVars.innerHTML = currentItem.variables.slice(0, 3).map(v => `
      <div class="text-xs text-slate-600 dark:text-slate-300">
        <span class="font-bold text-blue-600 dark:text-blue-400">$${v.sym}$</span>: ${v.name} (${v.unit})
      </div>
    `).join("");

    // Back pitfall preview
    fcBackPitfall.innerHTML = currentItem.pitfalls.length > 0 ? currentItem.pitfalls[0] : "";

    // Reset flip state
    fcCard.classList.remove("rotate-y-180");
    fcFlipped = false;

    // Render KaTeX for flashcard
    renderMath(fcCard);
    refreshIcons();
  };

  // Flip flashcard event
  const fcCardElement = document.getElementById("fc-card");
  if (fcCardElement) {
    fcCardElement.addEventListener("click", () => {
      fcFlipped = !fcFlipped;
      fcCardElement.classList.toggle("rotate-y-180", fcFlipped);
    });
  }

  // Next / Prev flashcard
  document.getElementById("fc-prev-btn")?.addEventListener("click", () => {
    if (fcIndex > 0) {
      fcIndex--;
      renderFlashcardUI();
    }
  });

  document.getElementById("fc-next-btn")?.addEventListener("click", () => {
    if (fcIndex < fcList.length - 1) {
      fcIndex++;
      renderFlashcardUI();
    }
  });

  // Shuffle flashcards
  document.getElementById("fc-shuffle-btn")?.addEventListener("click", () => {
    fcList = [...fcList].sort(() => Math.random() - 0.5);
    fcIndex = 0;
    showToast("Đã xáo trộn danh sách thẻ!");
    renderFlashcardUI();
  });

  // ================= QUIZ IMPLEMENTATION =================
  const quizHub = document.getElementById("quiz-hub");
  const quizTest = document.getElementById("quiz-test");
  const quizResult = document.getElementById("quiz-result");

  const modePracticeBtn = document.getElementById("mode-practice-btn");
  const modeExamBtn = document.getElementById("mode-exam-btn");
  const quizLevelSelect = document.getElementById("quiz-level-filter");
  const quizTypeSelect = document.getElementById("quiz-type-filter");
  const quizCountSelect = document.getElementById("quiz-count-select");
  const quizShuffleCheckbox = document.getElementById("quiz-shuffle-checkbox");
  const quizShuffleTestBtn = document.getElementById("quiz-shuffle-test-btn");

  const quizHeaderTitle = document.getElementById("quiz-header-title");
  const quizHeaderModeBadge = document.getElementById("quiz-header-mode-badge");
  const quizTimerBadge = document.getElementById("quiz-timer-badge");
  const quizTimeLeftEl = document.getElementById("quiz-time-left");
  const quizPaletteToggleBtn = document.getElementById("quiz-palette-toggle-btn");
  const quizPalettePanel = document.getElementById("quiz-palette-panel");
  const quizPaletteGrid = document.getElementById("quiz-palette-grid");

  const quizQNumber = document.getElementById("quiz-q-number");
  const quizQLesson = document.getElementById("quiz-q-lesson");
  const quizQLevel = document.getElementById("quiz-q-level");
  const quizQText = document.getElementById("quiz-q-text");
  const quizFlagBtn = document.getElementById("quiz-flag-btn");
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const quizExplanationBox = document.getElementById("quiz-explanation-box");
  const quizResultAlert = document.getElementById("quiz-result-alert");
  const quizExplanationText = document.getElementById("quiz-explanation-text");

  const quizPrevBtn = document.getElementById("quiz-prev-btn");
  const quizNextBtn = document.getElementById("quiz-next-btn");
  const quizBottomIndicator = document.getElementById("quiz-bottom-indicator");
  const quizSubmitBtn = document.getElementById("quiz-submit-btn");
  const quizBackHubBtn = document.getElementById("quiz-back-hub-btn");

  // Fisher-Yates array shuffle helper
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Flexible numeric parser supporting dot (.), comma (,), and negative (-)
  const parseShortAnswer = (val) => {
    if (val === undefined || val === null) return NaN;
    if (typeof val === "number") return val;
    const clean = val.toString().trim().replace(/,/g, ".");
    return parseFloat(clean);
  };

  // Compare user input with correct numeric answer within tolerance
  const isShortAnswerCorrect = (userAns, correctVal, tolerance = 0.05) => {
    const userNum = parseShortAnswer(userAns);
    if (isNaN(userNum)) return false;
    return Math.abs(userNum - correctVal) <= (tolerance || 0.05);
  };

  // Shuffle question options A, B, C, D and recalculate correct option letter
  const prepareShuffledQuestion = (origQ) => {
    // If question is short answer or has no options, do not shuffle options
    if (origQ.type === "short_answer" || !origQ.options) {
      return { ...origQ };
    }

    const letters = ["A", "B", "C", "D"];
    // Find text of original correct option
    const origCorrect = origQ.options.find(o => o.id === origQ.correct);
    const correctText = origCorrect ? origCorrect.text : "";

    // Shuffle options array
    const shuffledOpts = shuffleArray(origQ.options);
    let newCorrectLetter = "A";

    const remappedOptions = shuffledOpts.map((opt, idx) => {
      const letter = letters[idx];
      if (opt.text === correctText) {
        newCorrectLetter = letter;
      }
      return {
        id: letter,
        text: opt.text
      };
    });

    return {
      ...origQ,
      options: remappedOptions,
      correct: newCorrectLetter
    };
  };

  // Mode buttons event
  if (modePracticeBtn && modeExamBtn) {
    modePracticeBtn.addEventListener("click", () => {
      quizMode = "practice";
      modePracticeBtn.classList.add("bg-blue-600", "text-white");
      modePracticeBtn.classList.remove("text-slate-600", "dark:text-slate-300");
      modeExamBtn.classList.remove("bg-blue-600", "text-white");
      modeExamBtn.classList.add("text-slate-600", "dark:text-slate-300");
    });

    modeExamBtn.addEventListener("click", () => {
      quizMode = "exam";
      modeExamBtn.classList.add("bg-blue-600", "text-white");
      modeExamBtn.classList.remove("text-slate-600", "dark:text-slate-300");
      modePracticeBtn.classList.remove("bg-blue-600", "text-white");
      modePracticeBtn.classList.add("text-slate-600", "dark:text-slate-300");
    });
  }

  // Level filter event
  if (quizLevelSelect) {
    quizLevelSelect.addEventListener("change", (e) => {
      quizLevelFilter = e.target.value;
    });
  }

  // Type filter event
  if (quizTypeSelect) {
    quizTypeSelect.addEventListener("change", (e) => {
      quizTypeFilter = e.target.value;
    });
  }

  // Question count selector event
  if (quizCountSelect) {
    quizCountSelect.addEventListener("change", (e) => {
      showToast(`Đã chọn làm: ${quizCountSelect.options[quizCountSelect.selectedIndex].text}`);
    });
  }

  // Shuffle checkbox event
  if (quizShuffleCheckbox) {
    quizShuffleCheckbox.addEventListener("change", (e) => {
      showToast(e.target.checked ? "Bật tự động xáo trộn câu hỏi & đáp án 🔀" : "Tắt tự động xáo trộn");
    });
  }

  // Start quiz buttons
  document.querySelectorAll(".start-quiz-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const chapter = btn.dataset.chapter;
      startQuiz(chapter);
    });
  });

  const initQuizHub = () => {
    // Show hub, hide test and result
    quizHub.classList.remove("hidden");
    quizTest.classList.add("hidden");
    quizResult.classList.add("hidden");

    // Stop any active timer
    if (quizTimerInterval) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
    }

    // Update chapter statistics
    [1, 2, 3, 4].forEach(ch => {
      const statEl = document.getElementById(`stat-c${ch}`);
      if (statEl) {
        if (chapterScores[ch] !== undefined) {
          statEl.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">Điểm cao nhất: ${chapterScores[ch]}/10</span>`;
        } else {
          statEl.textContent = "Chưa làm bài";
        }
      }
    });

    refreshIcons();
  };

  const startQuiz = (chapterId) => {
    currentQuizChapter = chapterId;

    // Get count and shuffle preferences
    const reqCount = quizCountSelect ? quizCountSelect.value : "10";
    const shuffleEnabled = quizShuffleCheckbox ? quizShuffleCheckbox.checked : true;

    // 1. Filter questions by chapter, level, and question type
    let candidates = quizData.filter(q => {
      if (chapterId !== "all" && q.chapterId.toString() !== chapterId) return false;
      if (quizLevelFilter !== "all" && q.level !== quizLevelFilter) return false;
      if (quizTypeFilter === "multiple_choice" && q.type === "short_answer") return false;
      if (quizTypeFilter === "short_answer" && q.type !== "short_answer") return false;
      return true;
    });

    if (candidates.length === 0) {
      alert("Không có câu hỏi phù hợp với mức độ này trong chương đã chọn! Vui lòng chọn lại.");
      return;
    }

    // 2. Shuffle candidate order if enabled
    if (shuffleEnabled) {
      candidates = shuffleArray(candidates);
    }

    // 3. Slice to selected question count
    let targetCount = candidates.length;
    if (reqCount !== "all") {
      const parsed = parseInt(reqCount);
      if (!isNaN(parsed) && parsed > 0) {
        targetCount = Math.min(parsed, candidates.length);
      }
    }
    const sampledQuestions = candidates.slice(0, targetCount);

    // 4. Randomize options A, B, C, D for each question if shuffle is enabled
    if (shuffleEnabled) {
      activeQuizList = sampledQuestions.map(q => prepareShuffledQuestion(q));
    } else {
      activeQuizList = sampledQuestions;
    }

    // Reset test state
    quizCurrentIndex = 0;
    quizUserAnswers = {};
    quizFlagged = new Set();
    quizSubmitted = false;
    quizSecondsSpent = 0;

    // Set time dynamically: 90 seconds (1.5 phút) per question in Exam mode
    quizSecondsLeft = activeQuizList.length * 90;

    // Update Header
    const chapterNames = {
      1: "Chương I: Dao động điều hòa",
      2: "Chương II: Sóng cơ & Sóng điện từ",
      3: "Chương III: Điện trường",
      4: "Chương IV: Dòng điện không đổi & Mạch điện",
      all: "Đề Thi Tổng Hợp Cả 4 Chương"
    };
    quizHeaderTitle.textContent = `${chapterNames[chapterId] || "Luyện trắc nghiệm"} (${activeQuizList.length} câu)`;
    quizHeaderModeBadge.textContent = (quizMode === "practice") ? "⚡ Chế độ Luyện tập (Xem giải ngay)" : `⏱️ Chế độ Thi thử (${Math.round(quizSecondsLeft/60)} phút)`;
    quizHeaderModeBadge.className = (quizMode === "practice") 
      ? "text-xs font-semibold text-blue-600 dark:text-blue-400" 
      : "text-xs font-semibold text-rose-600 dark:text-rose-400";

    // Show/hide timer
    if (quizMode === "exam") {
      quizTimerBadge.classList.remove("hidden");
      quizTimerBadge.classList.add("flex");
      updateTimerDisplay();
      if (quizTimerInterval) clearInterval(quizTimerInterval);
      quizTimerInterval = setInterval(() => {
        quizSecondsLeft--;
        quizSecondsSpent++;
        updateTimerDisplay();
        if (quizSecondsLeft <= 0) {
          clearInterval(quizTimerInterval);
          alert("Hết giờ làm bài! Hệ thống sẽ tự động nộp bài thi của bạn.");
          submitQuiz();
        }
      }, 1000);
    } else {
      quizTimerBadge.classList.add("hidden");
      quizTimerBadge.classList.remove("flex");
    }

    // Show test screen, hide hub
    quizHub.classList.add("hidden");
    quizTest.classList.remove("hidden");
    quizResult.classList.add("hidden");

    renderQuizPalette();
    renderQuizQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateTimerDisplay = () => {
    const mins = Math.floor(quizSecondsLeft / 60);
    const secs = quizSecondsLeft % 60;
    quizTimeLeftEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Render question palette (1, 2, 3...)
  const renderQuizPalette = () => {
    quizPaletteGrid.innerHTML = "";
    activeQuizList.forEach((q, idx) => {
      const btn = document.createElement("button");
      const isAnswered = quizUserAnswers[q.id] !== undefined && quizUserAnswers[q.id].toString().trim() !== "";
      const isCurrent = idx === quizCurrentIndex;
      const isFlagged = quizFlagged.has(q.id);

      btn.className = `q-btn w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center border ${
        isCurrent ? "current border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300" :
        isAnswered ? "answered border-blue-600 bg-blue-600 text-white" :
        "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
      } ${isFlagged ? "flagged" : ""}`;

      btn.textContent = idx + 1;
      btn.addEventListener("click", () => {
        quizCurrentIndex = idx;
        renderQuizQuestion();
        quizPalettePanel.classList.add("hidden");
      });
      quizPaletteGrid.appendChild(btn);
    });
  };

  // Toggle Palette Panel
  if (quizPaletteToggleBtn) {
    quizPaletteToggleBtn.addEventListener("click", () => {
      quizPalettePanel.classList.toggle("hidden");
    });
  }

  // Render single question
  const renderQuizQuestion = () => {
    const currentQ = activeQuizList[quizCurrentIndex];
    if (!currentQ) return;

    // Meta
    quizQNumber.textContent = `Câu ${quizCurrentIndex + 1} / ${activeQuizList.length}`;
    quizBottomIndicator.textContent = `${quizCurrentIndex + 1} / ${activeQuizList.length}`;
    quizQLesson.textContent = currentQ.lesson;
    quizQLevel.textContent = currentQ.level;

    // Level badge color
    const levelColors = {
      "Nhận biết": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      "Thông hiểu": "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
      "Vận dụng": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
    };
    quizQLevel.className = `text-xs font-semibold px-2.5 py-0.5 rounded-md ${levelColors[currentQ.level] || levelColors["Nhận biết"]}`;

    // Flag button state
    const isFlagged = quizFlagged.has(currentQ.id);
    quizFlagBtn.innerHTML = `
      <i data-lucide="bookmark" class="w-4 h-4 ${isFlagged ? 'fill-amber-400 text-amber-500' : ''}"></i>
      <span class="${isFlagged ? 'text-amber-600 dark:text-amber-400 font-bold' : ''}">${isFlagged ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
    `;

    // Question content
    quizQText.innerHTML = currentQ.question;

    // Render Question Body (Options or Short Answer input)
    quizOptionsContainer.innerHTML = "";
    const selectedOpt = quizUserAnswers[currentQ.id];
    const isAnswered = selectedOpt !== undefined && selectedOpt.toString().trim() !== "";

    if (currentQ.type === "short_answer") {
      // Short Answer Question Type
      const isCorrect = isAnswered && isShortAnswerCorrect(selectedOpt, currentQ.correctValue, currentQ.tolerance);
      let inputBorderClass = "border-slate-300 dark:border-slate-700";

      if (quizMode === "practice" && isAnswered) {
        inputBorderClass = isCorrect 
          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20"
          : "border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/20";
      }

      const saContainer = document.createElement("div");
      saContainer.className = "space-y-4";
      saContainer.innerHTML = `
        <!-- Formatting Rules Notice -->
        <div class="bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-2xl p-4 text-xs text-blue-950 dark:text-blue-200">
          <div class="flex items-center gap-1.5 font-bold mb-1.5 text-blue-800 dark:text-blue-300">
            <i data-lucide="info" class="w-4 h-4 text-blue-600 shrink-0"></i>
            <span>Quy định định dạng nhập đáp số:</span>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
            <li>Dùng <b>dấu chấm (.)</b> hoặc <b>dấu phẩy (,)</b> cho số thập phân (Ví dụ: <code class="bg-blue-100 dark:bg-blue-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-blue-800 dark:text-blue-200">0.4</code> hoặc <code class="bg-blue-100 dark:bg-blue-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-blue-800 dark:text-blue-200">0,4</code>).</li>
            <li>Nếu kết quả là số âm, thêm <b>dấu trừ (-)</b> ở phía trước (Ví dụ: <code class="bg-blue-100 dark:bg-blue-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-blue-800 dark:text-blue-200">-2</code> hoặc <code class="bg-blue-100 dark:bg-blue-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-blue-800 dark:text-blue-200">-120</code>).</li>
            <li>Chỉ nhập số, <b>không</b> nhập kèm đơn vị hay chữ cái vào ô.</li>
          </ul>
        </div>

        <!-- Input Box -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Điền kết quả tính toán:
          </label>
          <div class="flex items-center gap-2 max-w-md">
            <div class="relative flex-1">
              <input 
                type="text" 
                id="sa-input-field" 
                value="${selectedOpt || ''}" 
                placeholder="Nhập kết quả (VD: 0.4 hoặc -2)..." 
                class="w-full px-4 py-3 rounded-2xl border ${inputBorderClass} bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-base font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <span class="absolute right-4 top-3 text-xs font-bold text-slate-400 font-mono">${currentQ.unit}</span>
            </div>
            ${
              quizMode === "practice" 
                ? `<button id="sa-confirm-btn" class="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition shrink-0 flex items-center gap-1.5">
                     <i data-lucide="check" class="w-3.5 h-3.5"></i> Xác Nhận
                   </button>` 
                : ''
            }
          </div>
        </div>
      `;

      quizOptionsContainer.appendChild(saContainer);

      const saInput = document.getElementById("sa-input-field");
      const saConfirmBtn = document.getElementById("sa-confirm-btn");

      // Exam mode: update answer on input immediately
      if (saInput) {
        saInput.addEventListener("input", (e) => {
          quizUserAnswers[currentQ.id] = e.target.value.trim();
          renderQuizPalette();
        });

        // Press Enter to confirm or advance
        saInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            const val = saInput.value.trim();
            if (val !== "") {
              quizUserAnswers[currentQ.id] = val;
              renderQuizQuestion();
            }
          }
        });
      }

      // Practice mode confirm button
      if (saConfirmBtn) {
        saConfirmBtn.addEventListener("click", () => {
          const val = saInput.value.trim();
          if (val === "") {
            showToast("Vui lòng nhập kết quả trước khi bấm Xác nhận!");
            saInput.focus();
            return;
          }
          quizUserAnswers[currentQ.id] = val;

          // If correct in practice mode, celebrate
          if (isShortAnswerCorrect(val, currentQ.correctValue, currentQ.tolerance) && window.confetti) {
            confetti({ particleCount: 25, spread: 60, origin: { y: 0.8 } });
          }

          renderQuizQuestion();
        });
      }

      // Explanation Box (in practice mode)
      if (quizMode === "practice" && isAnswered) {
        quizExplanationBox.classList.remove("hidden");
        if (isCorrect) {
          quizResultAlert.className = "p-3.5 rounded-xl font-bold text-sm mb-3 flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800";
          quizResultAlert.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i> Chính xác! Kết quả bạn nhập (${selectedOpt} ${currentQ.unit}) trùng khớp với đáp số.`;
        } else {
          quizResultAlert.className = "p-3.5 rounded-xl font-bold text-sm mb-3 flex items-center gap-2 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800";
          quizResultAlert.innerHTML = `<i data-lucide="x-circle" class="w-5 h-5 text-rose-600"></i> Chưa chính xác! Bạn đã nhập: ${selectedOpt} ${currentQ.unit}. Đáp án đúng là: ${currentQ.correctValue} ${currentQ.unit}.`;
        }
        quizExplanationText.innerHTML = currentQ.explanation;
      } else {
        quizExplanationBox.classList.add("hidden");
      }

    } else {
      // Multiple Choice Question Type
      currentQ.options.forEach(opt => {
        const optBtn = document.createElement("button");
        let optClass = "quiz-opt w-full text-left p-4 rounded-2xl border text-sm font-medium flex items-start gap-3 transition ";

        if (quizMode === "practice" && isAnswered) {
          // In practice mode, reveal correct/incorrect immediately
          if (opt.id === currentQ.correct) {
            optClass += "correct border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 font-semibold";
          } else if (opt.id === selectedOpt && selectedOpt !== currentQ.correct) {
            optClass += "incorrect border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200";
          } else {
            optClass += "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 opacity-60";
          }
        } else {
          // Exam mode or unselected
          if (opt.id === selectedOpt) {
            optClass += "selected border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 font-bold";
          } else {
            optClass += "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50";
          }
        }

        optBtn.className = optClass;
        optBtn.innerHTML = `
          <span class="w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
            opt.id === selectedOpt 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
          }">${opt.id}</span>
          <div class="pt-0.5 leading-relaxed">${opt.text}</div>
        `;

        optBtn.addEventListener("click", () => {
          selectQuizOption(opt.id);
        });

        quizOptionsContainer.appendChild(optBtn);
      });

      // Explanation Box (in practice mode)
      if (quizMode === "practice" && isAnswered) {
        quizExplanationBox.classList.remove("hidden");
        const isCorrect = selectedOpt === currentQ.correct;
        if (isCorrect) {
          quizResultAlert.className = "p-3.5 rounded-xl font-bold text-sm mb-3 flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800";
          quizResultAlert.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i> Chính xác! Bạn đã chọn đúng phương án ${currentQ.correct}.`;
        } else {
          quizResultAlert.className = "p-3.5 rounded-xl font-bold text-sm mb-3 flex items-center gap-2 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800";
          quizResultAlert.innerHTML = `<i data-lucide="x-circle" class="w-5 h-5 text-rose-600"></i> Chưa chính xác! Đáp án đúng là phương án ${currentQ.correct}.`;
        }
        quizExplanationText.innerHTML = currentQ.explanation;
      } else {
        quizExplanationBox.classList.add("hidden");
      }
    }

    // Prev / Next button state
    quizPrevBtn.disabled = quizCurrentIndex === 0;
    quizPrevBtn.classList.toggle("opacity-40", quizCurrentIndex === 0);
    quizPrevBtn.classList.toggle("pointer-events-none", quizCurrentIndex === 0);

    const isLastQ = quizCurrentIndex === activeQuizList.length - 1;
    if (isLastQ) {
      quizNextBtn.innerHTML = `<span>Nộp bài</span> <i data-lucide="check" class="w-4 h-4"></i>`;
      quizNextBtn.className = "px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition";
    } else {
      quizNextBtn.innerHTML = `<span>Câu sau</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
      quizNextBtn.className = "px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition";
    }

    renderMath(quizTest);
    renderQuizPalette();
    refreshIcons();
  };

  const selectQuizOption = (optId) => {
    const currentQ = activeQuizList[quizCurrentIndex];
    if (!currentQ) return;

    quizUserAnswers[currentQ.id] = optId;

    if (quizMode === "practice") {
      // In practice mode, if correct, play a small cheer
      if (optId === currentQ.correct && window.confetti) {
        confetti({ particleCount: 20, spread: 50, origin: { y: 0.8 } });
      }
    }

    renderQuizQuestion();
  };

  // Flag button event
  quizFlagBtn?.addEventListener("click", () => {
    const currentQ = activeQuizList[quizCurrentIndex];
    if (!currentQ) return;
    if (quizFlagged.has(currentQ.id)) {
      quizFlagged.delete(currentQ.id);
      showToast("Đã bỏ đánh dấu câu này");
    } else {
      quizFlagged.add(currentQ.id);
      showToast("Đã đánh dấu câu phân vân ★");
    }
    renderQuizQuestion();
  });

  // Prev / Next navigation
  quizPrevBtn?.addEventListener("click", () => {
    if (quizCurrentIndex > 0) {
      quizCurrentIndex--;
      renderQuizQuestion();
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  });

  quizNextBtn?.addEventListener("click", () => {
    if (quizCurrentIndex < activeQuizList.length - 1) {
      quizCurrentIndex++;
      renderQuizQuestion();
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      // Last question clicked -> confirm submit
      submitQuiz();
    }
  });

  // Back to Hub
  quizBackHubBtn?.addEventListener("click", () => {
    if (!quizSubmitted && Object.keys(quizUserAnswers).length > 0) {
      if (!confirm("Bạn có chắc muốn thoát bài làm hiện tại không? Tiến trình bài này sẽ không được lưu.")) {
        return;
      }
    }
    initQuizHub();
  });

  // Submit Quiz
  quizSubmitBtn?.addEventListener("click", () => {
    const answeredCount = Object.keys(quizUserAnswers).length;
    const unanswered = activeQuizList.length - answeredCount;
    let msg = "Bạn có chắc chắn muốn nộp bài thi?";
    if (unanswered > 0) {
      msg = `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
    }
    if (confirm(msg)) {
      submitQuiz();
    }
  });

  const submitQuiz = () => {
    quizSubmitted = true;
    if (quizTimerInterval) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
    }

    // Compute score
    let correctCount = 0;
    activeQuizList.forEach(q => {
      const userAns = quizUserAnswers[q.id];
      if (q.type === "short_answer") {
        if (isShortAnswerCorrect(userAns, q.correctValue, q.tolerance)) {
          correctCount++;
        }
      } else {
        if (userAns === q.correct) {
          correctCount++;
        }
      }
    });

    const total = activeQuizList.length;
    const incorrectCount = total - correctCount;
    const score = Math.round((correctCount / total) * 10 * 10) / 10;

    // Save best score
    if (currentQuizChapter !== "all") {
      const prev = chapterScores[currentQuizChapter] || 0;
      if (score > prev) {
        chapterScores[currentQuizChapter] = score;
        try {
          localStorage.setItem("vl11_quiz_scores", JSON.stringify(chapterScores));
        } catch (e) {}
      }
    }

    // Switch screen
    quizTest.classList.add("hidden");
    quizResult.classList.remove("hidden");
    quizFilterOnlyWrong = false;

    // Result card UI
    document.getElementById("quiz-result-score").textContent = `${score.toFixed(1)} / 10`;
    document.getElementById("quiz-correct-count").textContent = `${correctCount} / ${total}`;
    document.getElementById("quiz-incorrect-count").textContent = `${incorrectCount}`;

    // Format time spent
    const mins = Math.floor(quizSecondsSpent / 60);
    const secs = quizSecondsSpent % 60;
    document.getElementById("quiz-time-spent").textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    // Rating
    const ratingEl = document.getElementById("quiz-result-rating");
    if (score >= 9) {
      ratingEl.textContent = "Xếp loại: Xuất sắc! Bạn nắm bài cực kì chắc chắn 🌟";
    } else if (score >= 8) {
      ratingEl.textContent = "Xếp loại: Giỏi! Nắm tốt kiến thức trọng tâm 🎉";
    } else if (score >= 6.5) {
      ratingEl.textContent = "Xếp loại: Khá! Hãy củng cố thêm một số dạng bài khó 💡";
    } else if (score >= 5) {
      ratingEl.textContent = "Xếp loại: Trung bình! Cần xem lại các công thức và bẫy trắc nghiệm 📚";
    } else {
      ratingEl.textContent = "Xếp loại: Cần cố gắng nhiều hơn! Hãy ôn lại sổ tay công thức 🚀";
    }

    // Confetti celebration if score is good
    if (score >= 8 && window.confetti) {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }

    renderQuizReview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshIcons();
  };

  // Render review detailed list
  const renderQuizReview = (onlyWrong = false) => {
    const container = document.getElementById("quiz-review-container");
    container.innerHTML = "";

    const listToRender = activeQuizList.filter(q => {
      if (onlyWrong) {
        const userAns = quizUserAnswers[q.id];
        if (q.type === "short_answer") {
          return !isShortAnswerCorrect(userAns, q.correctValue, q.tolerance);
        } else {
          return userAns !== q.correct;
        }
      }
      return true;
    });

    if (listToRender.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <i data-lucide="check-circle-2" class="w-12 h-12 text-emerald-500 mx-auto mb-2"></i>
          <h5 class="font-bold text-slate-800 dark:text-slate-100">Tuyệt vời! Bạn không làm sai câu nào cả.</h5>
        </div>
      `;
      refreshIcons();
      return;
    }

    listToRender.forEach((q, idx) => {
      const userAnswer = quizUserAnswers[q.id];
      const isUnanswered = userAnswer === undefined || userAnswer.toString().trim() === "";
      let isCorrect = false;

      if (q.type === "short_answer") {
        isCorrect = !isUnanswered && isShortAnswerCorrect(userAnswer, q.correctValue, q.tolerance);
      } else {
        isCorrect = userAnswer === q.correct;
      }

      const card = document.createElement("div");
      card.className = `p-5 rounded-2xl border ${
        isCorrect 
          ? "border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-slate-900" 
          : "border-rose-200 dark:border-rose-900/60 bg-white dark:bg-slate-900"
      } shadow-sm space-y-3`;

      card.innerHTML = `
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-sm text-slate-900 dark:text-white">Câu ${activeQuizList.indexOf(q) + 1}:</span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${q.lesson}</span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">${q.level}</span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded ${q.type === 'short_answer' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}">${q.type === 'short_answer' ? 'Điền số' : 'Trắc nghiệm'}</span>
          </div>
          <div>
            ${
              isCorrect ? `<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg"><i data-lucide="check" class="w-3.5 h-3.5"></i> Trả lời đúng</span>` :
              isUnanswered ? `<span class="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950 px-2.5 py-1 rounded-lg"><i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Chưa trả lời (Đáp án đúng: ${q.type === 'short_answer' ? q.correctValue + ' ' + q.unit : q.correct})</span>` :
              `<span class="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-950 px-2.5 py-1 rounded-lg"><i data-lucide="x" class="w-3.5 h-3.5"></i> Đã điền: ${userAnswer}${q.unit ? ' ' + q.unit : ''} (Đáp án đúng: ${q.type === 'short_answer' ? q.correctValue + ' ' + q.unit : q.correct})</span>`
            }
          </div>
        </div>

        <div class="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
          ${q.question}
        </div>

        ${
          q.type === "short_answer" ? `
            <div class="p-3.5 rounded-xl border ${isCorrect ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30' : 'border-rose-300 dark:border-rose-800 bg-rose-50/60 dark:bg-rose-950/30'} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <div>
                <span class="text-slate-500 dark:text-slate-400">Kết quả bạn đã nhập: </span>
                <span class="font-mono font-bold text-sm ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}">${isUnanswered ? '(Bỏ trống)' : userAnswer + ' ' + q.unit}</span>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400">Đáp án chính xác: </span>
                <span class="font-mono font-bold text-sm text-emerald-700 dark:text-emerald-300">${q.correctValue} ${q.unit}</span>
              </div>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${q.options.map(opt => {
                let optBorder = "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300";
                if (opt.id === q.correct) {
                  optBorder = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold";
                } else if (opt.id === userAnswer && !isCorrect) {
                  optBorder = "border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 font-bold";
                }
                return `
                  <div class="p-2.5 rounded-xl border ${optBorder} flex items-start gap-2">
                    <span class="font-bold shrink-0">${opt.id}.</span>
                    <span>${opt.text}</span>
                  </div>
                `;
              }).join("")}
            </div>
          `
        }

        <!-- Explanation -->
        <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 text-xs text-slate-700 dark:text-slate-200">
          <div class="font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Lời giải chi tiết:
          </div>
          <div class="whitespace-pre-line leading-relaxed">${q.explanation}</div>
        </div>
      `;

      container.appendChild(card);
    });

    renderMath(container);
    refreshIcons();
  };

  // Shuffle button during test screen
  quizShuffleTestBtn?.addEventListener("click", () => {
    if (confirm("Bạn có muốn xáo trộn lại thứ tự các câu hỏi và phương án của đề thi này không?")) {
      activeQuizList = shuffleArray(activeQuizList).map(q => prepareShuffledQuestion(q));
      quizUserAnswers = {};
      quizFlagged = new Set();
      quizCurrentIndex = 0;
      renderQuizPalette();
      renderQuizQuestion();
      showToast("Đã đảo ngẫu nhiên toàn bộ câu hỏi & đáp án! 🔀");
    }
  });

  // Result Action buttons
  document.getElementById("quiz-retry-btn")?.addEventListener("click", () => {
    startQuiz(currentQuizChapter);
    showToast("Đã đảo ngẫu nhiên đề thi & phương án trả lời! 🔀");
  });

  document.getElementById("quiz-filter-wrong-btn")?.addEventListener("click", (e) => {
    quizFilterOnlyWrong = !quizFilterOnlyWrong;
    e.target.innerHTML = quizFilterOnlyWrong 
      ? `<i data-lucide="list" class="w-4 h-4"></i> Xem Tất Cả Các Câu`
      : `<i data-lucide="alert-circle" class="w-4 h-4"></i> Chỉ Xem Các Câu Làm Sai`;
    renderQuizReview(quizFilterOnlyWrong);
  });

  document.getElementById("quiz-finish-to-hub-btn")?.addEventListener("click", () => {
    initQuizHub();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mark Mastered button
  document.getElementById("fc-mark-mastered-btn")?.addEventListener("click", () => {
    const currentItem = fcList[fcIndex];
    if (currentItem) {
      fcMastered.add(currentItem.id);
      try {
        localStorage.setItem("vl11_mastered", JSON.stringify(Array.from(fcMastered)));
      } catch (e) {}
      showToast("Tuyệt vời! Đã ghi nhớ công thức này 🎉");
      
      // If canvas confetti is available
      if (window.confetti) {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      }

      if (fcIndex < fcList.length - 1) {
        fcIndex++;
      }
      renderFlashcardUI();
    }
  });

  // Mark Need Review button
  document.getElementById("fc-mark-review-btn")?.addEventListener("click", () => {
    const currentItem = fcList[fcIndex];
    if (currentItem) {
      fcMastered.delete(currentItem.id);
      try {
        localStorage.setItem("vl11_mastered", JSON.stringify(Array.from(fcMastered)));
      } catch (e) {}
      showToast("Đã lưu vào danh sách cần ôn lại 🔄");
      if (fcIndex < fcList.length - 1) {
        fcIndex++;
      }
      renderFlashcardUI();
    }
  });

  // ================= CALCULATOR MODE =================
  const renderCalculatorView = () => {
    const selectEl = document.getElementById("calc-select");
    const container = document.getElementById("calc-content-area");

    // Populate select if empty
    if (selectEl && selectEl.children.length === 0) {
      selectEl.innerHTML = calculatorPresets.map(preset => `
        <option value="${preset.id}">${preset.name}</option>
      `).join("");

      selectEl.addEventListener("change", (e) => {
        activeCalcId = e.target.value;
        renderActiveCalculator();
      });
    }

    renderActiveCalculator();
  };

  const renderActiveCalculator = () => {
    const container = document.getElementById("calc-content-area");
    if (!container) return;

    const preset = calculatorPresets.find(p => p.id === activeCalcId) || calculatorPresets[0];
    const currentValues = calcInputValues[preset.id];

    // Compute result
    const calculation = preset.calculate(currentValues);

    container.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div class="mb-4">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">${preset.name}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${preset.desc}</p>
          <div class="my-3 py-2 px-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-300 font-semibold text-center overflow-x-auto">
            $$${preset.formula}$$
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <!-- Inputs Column -->
          <div class="space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400">Thông số đầu vào</h4>
            ${preset.inputs.map(inp => `
              <div>
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" for="inp-${inp.id}">
                  ${inp.label}
                </label>
                <div class="relative">
                  <input type="number" step="any" id="inp-${inp.id}" data-inpid="${inp.id}" value="${currentValues[inp.id]}"
                    class="calc-input w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  <span class="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">${inp.unit}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Outputs Column -->
          <div class="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Kết quả tính toán</h4>
              ${calculation.error ? `
                <div class="text-rose-500 font-semibold text-sm">${calculation.error}</div>
              ` : `
                <div class="space-y-3">
                  ${calculation.results.map(res => `
                    <div class="flex items-center justify-between py-2 border-b border-slate-200/70 dark:border-slate-700/60">
                      <span class="text-sm text-slate-600 dark:text-slate-300">${res.label}:</span>
                      <span class="text-base font-bold text-blue-600 dark:text-blue-400 font-mono">${res.value} ${res.unit}</span>
                    </div>
                  `).join("")}
                </div>
              `}
            </div>

            ${calculation.step ? `
              <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <span class="text-xs text-slate-400 block mb-1">Bước thế số chi tiết:</span>
                <div class="text-xs font-mono text-slate-700 dark:text-slate-300 overflow-x-auto py-1">
                  $$${calculation.step}$$
                </div>
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    `;

    // Listen to input changes
    container.querySelectorAll(".calc-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const inpId = e.target.dataset.inpid;
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
          calcInputValues[preset.id][inpId] = val;
          renderActiveCalculator();
        }
      });
    });

    renderMath(container);
  };

  // ================= CHEAT SHEET MODE =================
  const renderCheatsheet = () => {
    const container = document.getElementById("cheatsheet-content");
    if (!container) return;

    const chapters = [
      { id: 1, name: "Chương I: Dao động" },
      { id: 2, name: "Chương II: Sóng" },
      { id: 3, name: "Chương III: Điện trường" },
      { id: 4, name: "Chương IV: Dòng điện không đổi" }
    ];

    container.innerHTML = `
      <div class="space-y-8">
        ${chapters.map(ch => {
          const items = physicsData.filter(d => d.chapterId === ch.id);
          return `
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">${ch.name}</h3>
                <span class="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                  ${items.length} công thức cốt lõi
                </span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${items.map(item => `
                  <div class="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">${item.name}</div>
                    <div class="font-bold text-slate-900 dark:text-white py-1.5 overflow-x-auto">
                      $$${item.formulaLatex}$$
                    </div>
                    ${item.derivativesLatex && item.derivativesLatex.length > 0 ? `
                      <div class="text-[11px] text-slate-600 dark:text-slate-300 border-t border-slate-200/50 dark:border-slate-700/50 pt-1.5 mt-1.5">
                        <span class="font-medium text-slate-400">Hệ quả:</span> $${item.derivativesLatex[0]}$
                      </div>
                    ` : ""}
                  </div>
                `).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    renderMath(container);
  };

  // Flashcard chapter select
  document.getElementById("fc-chapter-select")?.addEventListener("change", (e) => {
    fcChapter = e.target.value;
    initFlashcards();
  });

  // Initial render
  setTab("quiz");
  renderMath(document.body);
  refreshIcons();
});
