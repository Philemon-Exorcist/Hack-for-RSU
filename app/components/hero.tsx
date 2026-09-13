import { useEffect, useState } from "react";

import { ThemeSwitcher } from "./theme-switcher";

const navItems = ["Home", "About Us", "Hackathon", "Sponsors", "FAQ"];
const themeStorageKey = "rsu-theme";

export function Hero() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
      setIsDark(savedTheme === "dark");
      return;
    }

    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const nextIsDark = !current;
      window.localStorage.setItem(
        themeStorageKey,
        nextIsDark ? "dark" : "light",
      );
      return nextIsDark;
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f7f8] text-[#0b0d0e]">
      <section
        className={`hero-gradient-bg relative isolate min-h-[100svh] overflow-hidden border border-black/10 sm:rounded-[1.25rem] ${isDark ? "hero-dark" : ""}`}
      >
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="hero-side-art hero-side-art-left" aria-hidden="true" />
        <div className="hero-side-art hero-side-art-right" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[92rem] flex-col px-3 py-3 sm:px-6 sm:py-4 lg:px-10 xl:px-12">
          <nav className="relative flex items-center justify-between gap-3 text-[0.62rem] font-semibold text-[#111516] sm:gap-5">
            <a href="/" className="shrink-0 text-sm font-black tracking-tight sm:text-base">
              Hack for RSU
            </a>

            <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur-sm md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="rounded-full px-3 py-1.5 transition hover:bg-white hover:text-black"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hero-actions flex shrink-0 items-center gap-1.5 sm:gap-2">
              <ThemeSwitcher
                isDark={isDark}
                onToggle={toggleTheme}
              />
              <a
                href="#contact"
                className="rounded-full border border-[#20b957] bg-[#20b957] px-3 py-2 text-[0.6rem] font-bold text-black shadow-sm transition hover:-translate-y-0.5 sm:px-4 sm:py-2.5 sm:text-[0.62rem]"
              >
                Register
              </a>
              <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((current) => !current)}
                className="hero-menu-button grid h-8 w-8 place-items-center rounded-full border border-black/15 text-base leading-none md:hidden"
              >
                <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
              </button>
            </div>

            {isMenuOpen && (
              <div className="hero-mobile-menu absolute right-0 top-full z-20 mt-3 flex w-44 flex-col gap-1 rounded-2xl border border-black/10 bg-white/95 p-2 text-right shadow-lg backdrop-blur-md md:hidden">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2.5 transition hover:bg-black/5"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <div className="flex flex-1 flex-col items-center justify-center gap-6 pb-10 pt-8 text-center sm:gap-7 sm:pb-14 sm:pt-10 lg:pb-12 lg:pt-4">
            <div className="mt-10 w-full max-w-4xl">
              <p className="mb-4 mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[0.64rem] font-semibold text-[#555d5f] shadow-sm backdrop-blur-md sm:mt-5 sm:text-[0.66rem]">
                <span className="h-2 w-2 rounded-full bg-black" />
                <span className="truncate">
                  Rivers State University innovation challenge
                </span>
              </p>

              <h1 className="mx-auto flex max-w-[1080px] flex-col items-center text-center text-[clamp(3.65rem,18vw,5.7rem)] font-black leading-[0.84] tracking-normal text-[#090b0c] sm:text-[clamp(4.4rem,9.8vw,7.4rem)] sm:leading-[0.9] lg:text-[clamp(5.4rem,8.8vw,8.6rem)]">
                <span className="hidden sm:block">
                  HACK FOR RSU <span className="text-[#20b957]">1.0</span>
                </span>
                <span className="block sm:hidden">
                  HACK FOR
                  <span className="block">
                    RSU <span className="text-[#20b957]">1.0</span>
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl px-1 text-base font-medium leading-7 text-[#626a6d] sm:px-0 md:text-lg md:leading-8">
                Build The Next Campus Breakthrough, turn bold ideas into
                working products with students, mentors and industry partners
                solving real challenges for Rivers State University.
              </p>

              <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#join"
                  className="rounded-full bg-black px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#222] sm:text-xs"
                >
                  Register Now
                </a>
                <a
                  href="#sponsors"
                  className="rounded-full border border-black/15 bg-white/65 px-6 py-3.5 text-center text-sm font-bold text-[#111516] shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-black hover:text-black sm:text-xs"
                >
                  Sponsor Teams
                </a>
              </div>
            </div>

            <div className="hidden w-full max-w-2xl grid-cols-3 gap-3 text-left sm:grid">
              {["Students", "Mentors", "Partners"].map((item) => (
                <span
                  key={item}
                  className="border-t border-black/10 pt-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#81898a]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
