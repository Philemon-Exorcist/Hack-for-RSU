import { useState } from "react";

import { ThemeSwitcher } from "./theme-switcher";

const navItems = ["Home", "About Us", "Hackathon", "Sponsors", "FAQ"];

export function Hero() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f7f8] text-[#0b0d0e]">
      <section
        className={`hero-gradient-bg relative isolate min-h-screen overflow-hidden rounded-[1.25rem] border border-black/10 ${isDark ? "hero-dark" : ""}`}
      >
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="hero-side-art hero-side-art-left" aria-hidden="true" />
        <div className="hero-side-art hero-side-art-right" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-14 xl:px-16">
          <nav className="flex items-center justify-between gap-5 text-[0.62rem] font-semibold text-[#111516]">
            <a href="/" className="text-sm font-black tracking-tight">
              Hack for <span className="text-[#20b957]">RSU</span>
            </a>

            <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur-sm md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="rounded-full px-3 py-1.5 transition hover:bg-white hover:text-[#20a94f]"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeSwitcher
                isDark={isDark}
                onToggle={() => setIsDark((current) => !current)}
              />
              <a
                href="#contact"
                className="rounded-full border border-black/15 bg-white/70 px-4 py-2.5 text-[0.62rem] font-bold shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Register
              </a>
            </div>
          </nav>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-20 pt-12 text-center lg:pt-6">
            <div className="max-w-3xl">
              <p className="mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[0.6rem] font-semibold text-[#555d5f] shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#20b957]" />
                Rivers State University innovation challenge
              </p>

              <h1 className="mx-auto max-w-[900px] text-[clamp(2.6rem,6vw,5.2rem)] font-black leading-[0.94] tracking-normal text-[#090b0c]">
                
                <span className="block">
                  HACK FOR RSU <span className="text-[#20b957]">1.0</span>
                </span>
                <span className="block">
                  
                  
                  
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-xs font-medium leading-6 text-[#626a6d] sm:text-sm">
                Build The Next Campus Breakthrough, turn bold ideas into working products with students, mentors and
                industry partners solving real challenges for Rivers State
                University.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#join"
                  className="rounded-full bg-[#20b957] px-5 py-3 text-xs font-bold text-white shadow-[0_10px_24px_rgba(32,185,87,0.22)] transition hover:-translate-y-0.5 hover:bg-[#169342]"
                >
                  Register Now
                </a>
                <a
                  href="#sponsors"
                  className="rounded-full border border-black/15 bg-white/65 px-5 py-3 text-xs font-bold text-[#111516] shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#20b957] hover:text-[#169342]"
                >
                  Sponsor Teams
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
