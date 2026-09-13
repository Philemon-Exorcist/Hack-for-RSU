const partnerGroups = [
  {
    title: "Title Partners",
    weight: "title",
    partners: ["Rivers State University", "RSU Innovation Hub"],
  },
  {
    title: "Strategic Partners",
    weight: "strategic",
    partners: ["Tech Rivers", "Niger Delta Founders", "Civic Lab"],
  },
  {
    title: "Community Partners",
    weight: "community",
    partners: ["Student Builders Guild", "Design Circle", "Code Campus", "Makers Network"],
  },
  {
    title: "Media / Community Supporters",
    weight: "supporters",
    partners: ["Campus Radio", "Builder Notes", "Port Harcourt Tech", "Youth Innovation Forum"],
  },
];

const movementStats = [
  { value: "500+", label: "Builders" },
  { value: "20+", label: "Mentors" },
  { value: "10+", label: "Partners" },
  { value: "1", label: "Innovation Movement" },
];

export function BackingTheMovement() {
  return (
    <section className="movement-section relative overflow-hidden px-4 py-16 text-[#090b0c] sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="movement-grid-bg pointer-events-none absolute inset-0" />
      <div className="absolute left-0 top-0 h-px w-full bg-black/10" />

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
              Backing The Movement
            </p>
            <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] font-black uppercase leading-[0.9] tracking-normal">
              Built With The
              <span className="block text-[#20b957]">Right People.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#626a6d] sm:text-base lg:justify-self-end">
            HACK FOR RSU brings together organizations, communities and
            individuals committed to building the next generation of innovators.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {partnerGroups.map((group) => (
            <div
              key={group.title}
              className={`movement-logo-group movement-logo-group-${group.weight} grid gap-4 border-t border-black/10 pt-5 lg:grid-cols-[15rem_1fr] lg:items-center`}
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#090b0c]">
                {group.title}
              </p>

              <div className="movement-logo-row flex flex-wrap gap-x-8 gap-y-4">
                {group.partners.map((partner) => (
                  <a
                    key={partner}
                    href="#sponsors"
                    className="movement-logo relative inline-flex items-center text-[#090b0c]/42 transition duration-300 hover:text-[#20b957]"
                  >
                    <span>{partner}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-y border-black/10 py-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-3xl text-[clamp(1.45rem,2.5vw,2.3rem)] font-black leading-tight text-[#090b0c]">
            Together, we&apos;re creating more opportunities for young people to
            build, connect and innovate.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 lg:min-w-[32rem]">
            {movementStats.map((stat) => (
              <div key={stat.label} className="movement-stat">
                <p className="text-3xl font-black leading-none text-[#20b957]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.62rem] font-black uppercase leading-4 tracking-[0.16em] text-[#626a6d]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
