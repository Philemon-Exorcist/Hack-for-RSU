const journeySteps = [
  {
    number: "01",
    title: "Register",
    text: "Sign up and secure your place.",
  },
  {
    number: "02",
    title: "Form a Team",
    text: "Find people with complementary skills.",
  },
  {
    number: "03",
    title: "Build",
    text: "Turn your idea into a working solution.",
  },
  {
    number: "04",
    title: "Pitch",
    text: "Present your solution to the judges.",
  },
  {
    number: "05",
    title: "Win",
    text: "Earn recognition, opportunities and prizes.",
  },
];

export function HowItWorks() {
  return (
    <section className="journey-section relative overflow-hidden px-4 py-14 text-[#090b0c] sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="journey-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="mb-10 grid gap-5 border-b border-black/10 pb-7 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
              How It Works
            </p>
            <h2 className="text-[clamp(2.35rem,5vw,4.4rem)] font-black uppercase leading-[0.9] tracking-normal">
              From Idea
              <span className="block text-[#20b957]">To Impact.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-[#626a6d] sm:text-base lg:justify-self-end">
            Everything you need to go from your first idea to the final pitch.
          </p>
        </div>

        <div className="journey-path relative">
          <div className="journey-line absolute bg-black/10" />
          <div className="journey-line-active absolute bg-[#20b957]" />

          <div className="grid gap-5 md:grid-cols-5 md:gap-3">
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className="journey-step group relative grid grid-cols-[3.75rem_1fr] gap-4 pb-2 md:block md:min-h-44 md:pb-0"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="journey-dot absolute rounded-full border border-[#20b957]/40 bg-[#f8faf7]" />

                <div className="relative z-10">
                  <span className="journey-number block text-5xl font-black leading-none text-black/15 transition group-hover:text-[#20b957] md:text-6xl">
                    {step.number}
                  </span>
                </div>

                <div className="relative z-10 md:mt-8">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#090b0c]">
                      {step.title}
                    </h3>
                    {index < journeySteps.length - 1 ? (
                      <span className="hidden text-sm font-black text-[#20b957] transition group-hover:translate-x-1 md:inline-block">
                        →
                      </span>
                    ) : null}
                  </div>
                  <p className="max-w-[13rem] text-sm font-medium leading-6 text-[#626a6d]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
