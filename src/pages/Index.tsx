import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { courses, languages } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

const ease = [0.16, 1, 0.3, 1] as const;

const Index = () => {
  const [query, setQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return languages.filter((l) => l.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const results = useMemo(() => {
    if (!activeSearch.trim()) return [];
    const q = activeSearch.toLowerCase();
    return courses.filter(
      (c) =>
        c.language.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [activeSearch]);

  const handleSelect = useCallback((lang: string) => {
    setQuery(lang);
    setActiveSearch(lang);
    setShowSuggestions(false);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        setActiveSearch(query.trim());
        setShowSuggestions(false);
      }
    },
    [query]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    },
    []
  );

  // close suggestions on outside click
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const hasResults = activeSearch && results.length > 0;
  const noResults = activeSearch && results.length === 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4">
        {/* Search Stage */}
        <motion.div
          layout
          transition={{ duration: 0.3, ease }}
          className={hasResults || noResults ? "pt-8" : "pt-[25vh]"}
        >
          {/* Branding */}
          <AnimatePresence>
            {!hasResults && !noResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease }}
                className="mb-8 text-center"
              >
                <h1 className="text-3xl font-medium tracking-tighter text-foreground">
                  Master the <span className="text-primary">syntax</span>.
                </h1>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  Search courses across platforms. Learn faster.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search */}
          <div ref={containerRef} className="relative">
            <form onSubmit={handleSubmit}>
              <motion.div
                layout
                className={`relative flex items-center gap-3 px-4 py-3 bg-card border border-border transition-shadow ${
                  showSuggestions && suggestions.length > 0
                    ? "search-glow-active"
                    : "search-glow"
                }`}
                style={{ borderRadius: "var(--radius)" }}
              >
                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={handleKeyDown}
                  placeholder="What do you want to master?"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveSearch("");
                      inputRef.current?.focus();
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground font-mono press-recede"
                  >
                    ESC
                  </button>
                )}
              </motion.div>
            </form>

            {/* Suggestions dropdown */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-50 w-full mt-1 bg-card border border-border overflow-hidden"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  {suggestions.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleSelect(lang)}
                      className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-surface-hover transition-colors flex items-center gap-3"
                    >
                      <span className="font-mono text-xs text-muted-foreground w-6">→</span>
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {hasResults && (
            <motion.div
              key={activeSearch}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 pb-16"
            >
              <p className="text-xs font-mono text-muted-foreground mb-4">
                Found{" "}
                <span className="text-foreground">{results.length}</span>{" "}
                courses for{" "}
                <span className="text-primary">'{activeSearch}'</span>{" "}
                across {new Set(results.map((r) => r.platform)).size} platforms.
              </p>

              <div className="space-y-2">
                {results.map((course, i) => (
                  <CourseCard key={course.id} course={course} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {noResults && (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground font-mono">
                No courses found for{" "}
                <span className="text-primary">'{activeSearch}'</span>.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for Python, JavaScript, Java, SQL, Go, Rust...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
