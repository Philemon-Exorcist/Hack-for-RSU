const challengeTracks = [
  {
    number: "01",
    name: "Artificial Intelligence",
    shortName: "AI",
    description: "Build intelligent tools that solve practical problems.",
    className: "lg:col-span-5 lg:row-span-2",
  },
  {
    number: "02",
    name: "Campus & Education",
    shortName: "EDU",
    description: "Improve learning, campus life and student support systems.",
    className: "lg:col-span-4",
  },
  {
    number: "03",
    name: "Fintech",
    shortName: "FIN",
    description: "Create safer, simpler ways to move, manage and understand money.",
    className: "lg:col-span-3",
  },
  {
    number: "04",
    name: "Health",
    shortName: "HLT",
    description: "Design tools for care access, awareness and better health decisions.",
    className: "lg:col-span-3",
  },
  {
    number: "05",
    name: "Agriculture",
    shortName: "AGR",
    description: "Use technology to support food systems, growers and local markets.",
    className: "lg:col-span-4",
  },
  {
    number: "06",
    name: "Sustainability",
    shortName: "ECO",
    description: "Build solutions for energy, waste, climate and resilient communities.",
    className: "lg:col-span-5 lg:min-h-full",
  },
];

export function TheChallenge() {
  return (
    <section className="challenge-section relative overflow-hidden px-4 py-16 text-[#090b0c] sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="challenge-grid-bg pointer-events-none absolute inset-0" />
      <div className="absolute left-0 top-0 h-px w-full bg-black/10" />

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl lg:sticky lg:top-10">
            <p className="mb-5 text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
              The Challenge
            </p>

            <h2 className="tmax-w-[480px] text-[clamp(2.6rem,5.4vw,3.15rem)] font-black uppercase leading-[0.9] tracking-normal text-[#090b0c]">
              Real Problems.
              <span className="block text-[#20b957]">Real Builders.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-[#626a6d] sm:text-base">
              Bring your ideas, skills and curiosity. Choose a challenge, form a
              team and build something that can make a difference.
            </p>

          </div>

          <div className="challenge-board grid auto-rows-[minmax(11rem,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-12">
            {challengeTracks.map((track) => (
              <a
                key={track.number}
                href={`#challenge-${track.number}`}
                className={`challenge-module challenge-module-${track.number} group relative isolate flex min-h-44 overflow-hidden border border-black/10 bg-white/72 p-5 transition duration-300 hover:border-[#20b957] hover:bg-white sm:min-h-48 ${track.className}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#20b957] transition duration-300 group-hover:scale-x-100" />
                <div className="absolute right-4 top-4 h-9 w-9 rotate-45 border border-black/10 bg-[#20b957]/0 transition duration-300 group-hover:border-[#20b957]/50 group-hover:bg-[#20b957]/10" />
                <div className="absolute bottom-4 right-5 text-[0.66rem] font-black uppercase tracking-[0.2em] text-black/10 transition group-hover:text-[#20b957]/40">
                  {track.shortName}
                </div>

                <div className="flex h-full w-full flex-col justify-between gap-8">
                  <div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span className="text-5xl font-black leading-none text-black/15 transition group-hover:text-[#20b957]">
                        {track.number}
                      </span>
                      <span className="challenge-arrow translate-x-0 text-lg font-black text-[#090b0c] transition duration-300 group-hover:translate-x-1 group-hover:text-[#20b957]">
                        →
                      </span>
                    </div>

                    <h3 className="max-w-[18rem] text-xl font-black uppercase leading-tight tracking-normal text-[#090b0c] sm:text-2xl">
                      {track.name}
                    </h3>
                  </div>

                  <p className="challenge-description max-w-sm text-sm font-medium leading-6 text-[#626a6d] opacity-80 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-3 lg:opacity-0">
                    {track.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#090b0c]">
            Have a problem worth solving?
          </p>
          <a
            href="#submit-challenge"
            className="group inline-flex w-fit items-center gap-3 text-sm font-black text-[#20b957]"
          >
            Submit a Challenge
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
