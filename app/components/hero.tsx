const navItems = ["About", "The Hackathon", "Challenges", "Sponsors", "FAQ"];

const ecosystemNodes = [
  { label: "IDEAS", value: "128", className: "left-[9%] top-[22%]" },
  { label: "PEOPLE", value: "04", className: "right-[14%] top-[15%]" },
  { label: "BUILD", value: "72H", className: "left-[18%] bottom-[26%]" },
  { label: "IMPACT", value: "01", className: "right-[11%] bottom-[18%]" },
];

const infoItems = [
  "Hackathon",
  "Industry Connection",
  "Real-World Challenges",
  "Building The Future",
];

export function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ea] text-[#101512]">
      <section className="relative flex min-h-screen flex-col px-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,91,57,0.10),transparent_42%),radial-gradient(circle_at_78%_28%,rgba(234,179,8,0.22),transparent_28%)]" />
        <div className="absolute inset-y-0 left-0 w-[54vw] bg-[#005b39]" />
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#e8bd3f]/30" />
        <div className="absolute left-[37%] top-0 h-full w-px bg-white/10" />

        <nav className="relative z-20 flex h-24 items-center justify-between gap-5 border-b border-[#005b39]/15 text-sm font-semibold">
          <a href="/" className="group flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center border-2 border-[#e8bd3f] bg-[#f8f5ea] text-sm font-black text-[#005b39]">
              HF
            </span>
            <span className="leading-none">
              <span className="block text-base font-black tracking-[-0.01em]">
                HACK FOR
              </span>
              <span className="block text-[#e8bd3f]">RSU</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-none border-x border-[#005b39]/15 px-8 text-[#1b2720] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-[#005b39]"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#sponsor"
            className="border-2 border-[#005b39] bg-[#005b39] px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#f8f5ea] shadow-[6px_6px_0_#e8bd3f] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#e8bd3f] sm:px-5"
          >
            Become a Sponsor →
          </a>
        </nav>

        <div className="relative z-10 grid flex-1 items-center gap-10 py-8 lg:grid-cols-[0.94fr_1.06fr] lg:py-0">
          <div className="max-w-[760px] text-white">
            <p className="mb-7 max-w-[360px] border-l-4 border-[#e8bd3f] pl-4 text-xs font-black uppercase leading-6 tracking-[0.22em] text-[#f3e8bd] sm:text-sm">
              Rivers State University
              <span className="block text-white">
                Technology × Innovation × Impact
              </span>
            </p>

            <h1 className="relative text-[clamp(5rem,16vw,12.8rem)] font-black uppercase leading-[0.72] tracking-normal">
              <span className="block text-[#f8f5ea] drop-shadow-[10px_10px_0_rgba(16,21,18,0.22)]">
                Hack
              </span>
              <span className="block translate-x-[0.16em] text-transparent [-webkit-text-stroke:2px_#e8bd3f]">
                For
              </span>
              <span className="relative block text-[#e8bd3f]">
                <span className="absolute -left-3 top-2 -z-10 text-[#093a27]">
                  RSU
                </span>
                RSU
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#f6efd8] sm:text-xl">
              Where bold ideas, emerging talent and real-world challenges come
              together to build what&apos;s next.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#join"
                className="bg-[#e8bd3f] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#101512] transition hover:bg-[#f5d76c]"
              >
                Join the Hackathon →
              </a>
              <a
                href="#partner"
                className="border-2 border-[#f8f5ea] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#f8f5ea] transition hover:border-[#e8bd3f] hover:text-[#e8bd3f]"
              >
                Partner With Us ↗
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[660px]">
            <div className="absolute inset-0 translate-x-4 skew-x-[-7deg] border-l-[18px] border-[#e8bd3f] bg-[#101512]" />
            <div className="absolute inset-y-10 left-8 right-0 border border-[#005b39]/20 bg-[#fbf8ee]" />
            <div className="absolute inset-y-10 left-8 right-0 opacity-[0.18] [background-image:linear-gradient(#005b39_1px,transparent_1px),linear-gradient(90deg,#005b39_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="absolute left-[12%] top-[14%] h-[66%] w-[72%] border border-[#005b39]/25" />
            <div className="absolute left-[18%] top-[25%] h-px w-[62%] rotate-[17deg] bg-[#005b39]/45" />
            <div className="absolute left-[22%] top-[61%] h-px w-[55%] -rotate-[22deg] bg-[#e8bd3f]" />
            <div className="absolute left-[48%] top-[18%] h-[62%] w-px bg-[#005b39]/35" />

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[18px] border-[#005b39]" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 border-[12px] border-[#e8bd3f] bg-[#f8f5ea]" />
            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 bg-[#101512]" />

            <p className="absolute right-[7%] top-[31%] text-right text-[clamp(3.5rem,8vw,7rem)] font-black leading-none text-[#005b39]/10">
              72
              <span className="block text-[#e8bd3f]/40">HR</span>
            </p>

            {ecosystemNodes.map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.className} border-l-4 border-[#e8bd3f] bg-[#101512] px-4 py-3 text-[#f8f5ea] shadow-[8px_8px_0_rgba(0,91,57,0.16)]`}
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#e8bd3f]">
                  {node.label}
                </p>
                <p className="mt-1 text-2xl font-black">{node.value}</p>
              </div>
            ))}

            <div className="absolute bottom-[10%] left-[12%] flex max-w-[260px] flex-wrap gap-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#005b39]">
              <span className="border border-[#005b39]/25 px-2 py-1">Campus</span>
              <span className="border border-[#005b39]/25 px-2 py-1">Industry</span>
              <span className="border border-[#005b39]/25 px-2 py-1">Prototype</span>
              <span className="border border-[#005b39]/25 px-2 py-1">Scale</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 grid border-y border-[#005b39]/20 bg-[#f8f5ea]/95 lg:grid-cols-4">
          {infoItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 border-[#005b39]/20 px-5 py-5 lg:border-r"
            >
              <span className="text-sm font-black text-[#e0aa19]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-black uppercase tracking-[0.08em] text-[#101512]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
