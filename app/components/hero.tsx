const navItems = ["Home", "About Us", "Hackathon", "Sponsors", "FAQ"];

export function Hero() {
  return (
    <main className="min-h-screen bg-[#031a10] text-white">
      <section className="hero-gradient-bg relative isolate min-h-screen overflow-hidden border border-[#18d96b]/25 bg-[#04140e]">
        <div className="hero-aurora absolute inset-0" />
        <div className="hero-depth absolute inset-0" />
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-14 xl:px-16">
          <nav className="flex items-center justify-between gap-5 text-[0.62rem] font-semibold">
            <a href="/" className="text-sm font-black tracking-tight text-white">
              Hack for <span className="text-[#18f47a]">RSU</span>
            </a>

            <div className="hidden items-center gap-6 rounded-full bg-[#02190e]/20 px-4 py-2 backdrop-blur-sm md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-white transition hover:text-[#18f47a]"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-md bg-[#18f47a] px-3.5 py-2.5 text-[0.62rem] font-bold text-[#042315] shadow-[0_12px_26px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Register
            </a>
          </nav>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-20 pt-12 text-center lg:pt-6">
            <div className="max-w-3xl">
              <p className="mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/18 px-3 py-1.5 text-[0.6rem] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#18f47a]" />
                Rivers State University innovation challenge
              </p>

              <h1 className="mx-auto max-w-[760px] text-[clamp(2.2rem,4.7vw,4.1rem)] font-black leading-[0.98] tracking-normal text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.38)]">
                Hack For RSU 1.0
                <span className="block">
                  <span className="ml-2 text-[#18f47a]">*</span>
                  Build The Next Campus Breakthrough
                  <span className="ml-2 text-[#18f47a]">*</span>
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-xs font-medium leading-6 text-white/92 sm:text-sm">
                Turn bold ideas into working products with students, mentors and
                industry partners solving real challenges for Rivers State
                University.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#join"
                  className="rounded-md bg-white px-4 py-2.5 text-xs font-bold text-[#06331d] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#18f47a]"
                >
                  Register Now
                </a>
                <a
                  href="#sponsors"
                  className="rounded-md border border-white/50 bg-[#02190e]/28 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition hover:border-[#18f47a] hover:text-[#18f47a]"
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
