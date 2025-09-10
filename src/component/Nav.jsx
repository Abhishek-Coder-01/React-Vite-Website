import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  // Apply theme to <html> and persist
  const applyTheme = (mode) => {
    const html = document.documentElement;
    html.classList.remove("dark");

    if (mode === "light") {
      localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
      }
    }
  };

  // Init theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      applyTheme(stored);
    } else {
      setTheme("system");
      applyTheme("system");
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onPrefChange = () => {
      if (localStorage.getItem("theme") === null) {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", onPrefChange);
    return () => mq.removeEventListener("change", onPrefChange);
  }, []);

  const handleSetTheme = (mode) => {
    setTheme(mode);
    applyTheme(mode);
  };

  const activeClasses = (btn) => {
    if (theme === btn) {
      if (btn === "system") return "bg-gray-200 dark:bg-[#0B545D]";
      if (btn === "light") return "bg-gray-200";
      if (btn === "dark") return "bg-[#0B545D] text-white";
    }
    return "";
  };

  // Detect if device is mobile (for better hamburger menu control)
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[70px] items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-[hsl(var(--primary-foreground))] font-bold text-lg shadow-md">
            A
          </span>
          <span className="text-lg font-bold tracking-tight text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
            Abhishek Yadav
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {["features", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative px-3 py-2 text-lg font-semibold text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] transition group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[hsl(var(--foreground))] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right side (theme + clerk buttons) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full shadow px-4 py-[7px] dark:bg-[#09474F]">
            <button
              onClick={() => handleSetTheme("system")}
              className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center dark:hover:bg-[#0B545D] transition ${activeClasses("system")}`}
              aria-label="System theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>

            <button
              onClick={() => handleSetTheme("light")}
              className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center dark:hover:bg-[#0B545D] transition ${activeClasses("light")}`}
              aria-label="Light mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 6.5-1.5-1.5M8 7 6.5 5.5m11 0L16.5 7M7 17l-1.5 1.5" />
              </svg>
            </button>

            <button
              onClick={() => handleSetTheme("dark")}
              className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center dark:hover:bg-[#0B545D] transition ${activeClasses("dark")}`}
              aria-label="Dark mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-lg h-10 px-3 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 active:scale-95 transition-transform duration-150">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { userButtonAvatarBox: "h-10 w-10", userButtonAvatarImage: "h-10 w-10" } }} />
          </SignedIn>
        </div>

        {/* Mobile Menu Button (show on mobile devices, even in desktop mode) */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-[#2A676D] text-[#FFFFFF] dark:bg-[#E2E7DC] dark:text-black transition flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current mb-1 transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current mb-1 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[hsl(var(--background))]/95 backdrop-blur border-t border-[hsl(var(--border))]">
          <nav className="flex flex-col p-4 gap-3">
            {["features", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="px-3 py-2 text-lg font-semibold hover:text-[hsl(var(--foreground))]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {/* Theme buttons mobile */}
            <div className="w-full flex justify-center mt-2">
              <div className="flex w-[180px] justify-center items-center gap-2 bg-white/70 backdrop-blur-md rounded-full shadow px-4 py-[7px] dark:bg-[#09474F]">
                <button
                  onClick={() => handleSetTheme("system")}
                  className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center dark:hover:bg-[#0B545D] transition ${activeClasses("system")}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </button>
                <button
                  onClick={() => handleSetTheme("light")}
                  className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center transition dark:hover:bg-[#0B545D] ${activeClasses("light")}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 6.5-1.5-1.5M8 7 6.5 5.5m11 0L16.5 7M7 17l-1.5 1.5" />
                  </svg>
                </button>
                <button
                  onClick={() => handleSetTheme("dark")}
                  className={`theme-btn h-9 w-9 rounded-full hover:bg-gray-200 grid place-items-center dark:hover:bg-[#0B545D] transition ${activeClasses("dark")}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Get Started */}
            <SignedOut>
              <div className="mt-2">
                <SignInButton mode="modal">
                  <button
                    className="w-full rounded-lg h-10 px-3 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 active:scale-95 transition-transform duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;