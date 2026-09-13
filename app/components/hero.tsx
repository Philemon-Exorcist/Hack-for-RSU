import logoDark from "./logo-dark.svg";

const navItems = ["Home", "About Us", "Hackathon", "Sponsors", "FAQ"];

const countdown = [
  { value: "12", label: "Days" },
  { value: "23", label: "Hours" },
  { value: "43", label: "Minutes" },
  { value: "5", label: "Seconds" },
];

export function Hero() {
  return (
    <main className="min-h-screen bg-[#031a10] text-white">
      <section className="relative isolate min-h-screen overflow-hidden border border-[#18d96b]/35 bg-[#08381f]">
        <img
          src="https://www.ablskool.com/assets/program-hackathons-2Rv3T2_N.png"
          alt="Students collaborating at laptops during a university hackathon"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,24,13,0.68),rgba(2,24,13,0.2)_44%,rgba(2,24,13,0.56))]" />
        <div className="absolute inset-0 bg-[#10e56e]/20 mix-blend-multiply" />

        <div className="absolute inset-y-0 left-0 hidden w-[39vw] bg-[#13ee73]/85 [clip-path:polygon(0_0,75%_0,38%_100%,0_100%)] lg:block" />
        <div className="absolute inset-y-0 left-[18vw] hidden w-[32vw] bg-[#04170d]/72 [clip-path:polygon(45%_0,100%_0,56%_100%,0_100%)] lg:block" />
        <div className="absolute inset-y-0 right-0 hidden w-[19vw] bg-[#16ec75]/80 [clip-path:polygon(100%_0,100%_100%,35%_100%,100%_14%)] lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-[23vh] bg-[#13df6c]/45 [clip-path:polygon(0_42%,100%_76%,100%_100%,0_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-5 text-[0.68rem] font-semibold">
            <a href="/" className="flex items-center gap-3">
              <span className="grid h-16 w-20 place-items-center rounded-full border border-white/70 bg-white/95 px-3 shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
                <img
                  src={logoDark}
                  alt="Rovie logo"
                  className="h-auto w-full"
                />
              </span>
            </a>

            <div className="hidden items-center gap-7 rounded-full bg-[#02190e]/20 px-4 py-2 backdrop-blur-sm md:flex">
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
              className="rounded-md bg-[#18f47a] px-4 py-3 text-[0.68rem] font-bold text-[#042315] shadow-[0_12px_26px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Contact Us
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-8 pb-24 pt-16 lg:grid-cols-[1fr_0.72fr] lg:pt-10">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/18 px-3 py-1.5 text-[0.68rem] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#18f47a]" />
                Rivers State University innovation challenge
              </p>

              <h1 className="max-w-[680px] text-[clamp(2.65rem,6vw,4.95rem)] font-black leading-[0.98] tracking-normal text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.38)]">
                Hack For RSU:
                <span className="block">
                  Build The Next Campus Breakthrough
                  <span className="ml-2 text-[#18f47a]">*</span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-white/92 sm:text-base">
                Turn bold ideas into working products with students, mentors and
                industry partners solving real challenges for Rivers State
                University.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#join"
                  className="rounded-md bg-white px-5 py-3 text-sm font-bold text-[#06331d] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#18f47a]"
                >
                  Register Now
                </a>
                <a
                  href="#sponsors"
                  className="rounded-md border border-white/50 bg-[#02190e]/28 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#18f47a] hover:text-[#18f47a]"
                >
                  Sponsor Teams
                </a>
              </div>
            </div>

            <aside className="self-end justify-self-start rounded-xl border border-[#18f47a] bg-[#103724]/80 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-md lg:justify-self-end">
              <p className="mb-3 text-center text-sm font-black">Time Left:</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                {countdown.map((item) => (
                  <div key={item.label} className="min-w-11">
                    <p className="text-lg font-black leading-none text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[0.62rem] text-white/82">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
