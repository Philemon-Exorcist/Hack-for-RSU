const ecosystemNodes = [
  { label: "IDEAS", x: 18, y: 27, size: 86, value: "128" },
  { label: "PEOPLE", x: 78, y: 24, size: 76, value: "04" },
  { label: "TECH", x: 84, y: 62, size: 92, value: "72H" },
  { label: "PROBLEMS", x: 27, y: 74, size: 70, value: "06" },
  { label: "SOLUTIONS", x: 62, y: 80, size: 82, value: "24" },
  { label: "IMPACT", x: 13, y: 57, size: 64, value: "01" },
];

const experiencePoints = [
  {
    number: "01",
    title: "DISCOVER",
    text: "Find problems worth solving.",
  },
  {
    number: "02",
    title: "BUILD",
    text: "Turn ideas into working solutions.",
  },
  {
    number: "03",
    title: "CONNECT",
    text: "Meet mentors, companies and fellow builders.",
  },
  {
    number: "04",
    title: "IMPACT",
    text: "Take ideas beyond the event.",
  },
];

export function MoreThanHackathon() {
  return (
    <section className="section-idea relative overflow-hidden px-4 py-16 text-[#090b0c] sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="section-idea-grid pointer-events-none absolute inset-0" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#20b957]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-black/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-8 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
              The idea behind Hack For RSU
            </p>

            <h2 className="max-w-[480px] text-[clamp(2.6rem,5.4vw,3.15rem)] font-black uppercase leading-[0.9] tracking-normal text-[#090b0c]">
              More Than A
              <span className="mt-2 block text-[#20b957]">Hackathon.</span>
            </h2>

            <p className="mt-8 text-[clamp(1.35rem,2.2vw,2rem)] font-black leading-tight text-[#090b0c]">
              A platform for people who want to build.
            </p>

            <p className="mt-2 max-w-xl text-sm font-medium leading-7 text-[#626a6d] sm:text-base">
              HACK FOR RSU brings together emerging talent, bold ideas and
              industry expertise to turn real-world challenges into prototypes,
              products and possibilities.
            </p>
          </div>

          <div className="innovation-system group relative mx-auto aspect-square w-full max-w-[680px]">
            <div className="absolute inset-[9%] rounded-full border border-black/10" />
            <div className="absolute inset-[20%] rounded-full border border-dashed border-[#20b957]/30" />
            <div className="absolute left-[8%] top-[12%] h-[76%] w-[76%] rotate-[-8deg] border border-black/10" />
            <div className="absolute left-[18%] top-[18%] h-[62%] w-[62%] rotate-[18deg] border border-[#20b957]/20" />

            <svg
              className="ecosystem-lines absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path d="M50 50 L18 27 L13 57 L27 74 L62 80 L84 62 L78 24 Z" />
              <path d="M50 50 L78 24 M50 50 L84 62 M50 50 L62 80 M50 50 L27 74 M50 50 L13 57 M50 50 L18 27" />
              <path className="ecosystem-gold-line" d="M18 27 C39 14 59 15 78 24" />
              <path className="ecosystem-gold-line" d="M27 74 C42 93 67 94 84 62" />
            </svg>

            <div className="absolute left-1/2 top-1/2 z-20 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-black text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-105 group-hover:border-[#20b957]">
              <span>
                <span className="block text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
                  Focus
                </span>
                <span className="mt-2 block text-4xl font-black leading-none">
                  BUILD
                </span>
              </span>
            </div>

            {ecosystemNodes.map((node, index) => (
              <div
                key={node.label}
                className="ecosystem-node absolute z-10 grid place-items-center rounded-full border border-black/10 bg-white/86 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#20b957] hover:bg-white"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                  animationDelay: `${index * -1.3}s`,
                }}
              >
                <span>
                  <span className="block text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#090b0c]">
                    {node.label}
                  </span>
                  <span className="mt-1 block text-xl font-black text-[#20b957]">
                    {node.value}
                  </span>
                </span>
              </div>
            ))}

            <div className="absolute right-[9%] top-[42%] h-10 w-10 rotate-45 border border-[#20b957]/70 bg-[#20b957]/10" />
            <div className="absolute bottom-[18%] left-[44%] h-3 w-28 bg-black/10" />
            <div className="absolute left-[35%] top-[10%] h-2 w-20 bg-[#20b957]/40" />
          </div>
        </div>

        <div className="mt-14 border-y border-black/10 lg:mt-16">
          <div className="grid lg:grid-cols-4">
            {experiencePoints.map((point) => (
              <a
                key={point.number}
                href={`#${point.title.toLowerCase()}`}
                className="experience-point group relative flex min-h-36 gap-5 border-black/10 py-8 transition hover:bg-black/[0.035] lg:border-r lg:px-7"
              >
                  <span className="text-5xl font-black leading-none text-black/15 transition group-hover:text-[#20b957]">
                  {point.number}
                </span>
                <span className="pt-1">
                  <span className="block text-sm font-black uppercase tracking-[0.18em] text-[#090b0c]">
                    {point.title}
                  </span>
                  <span className="mt-3 block max-w-[14rem] text-sm font-medium leading-6 text-[#626a6d]">
                    {point.text}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
