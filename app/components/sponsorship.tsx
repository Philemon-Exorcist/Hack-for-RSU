import { useState } from "react";

const sponsorBenefits = [
  {
    title: "Talent",
    text: "Meet emerging developers, designers and innovators.",
  },
  {
    title: "Visibility",
    text: "Put your brand in front of a highly engaged technology community.",
  },
  {
    title: "Collaboration",
    text: "Connect with students, creators and industry professionals.",
  },
  {
    title: "Impact",
    text: "Support technology, innovation and problem-solving at Rivers State University.",
  },
];

const sponsorshipTiers = [
  {
    number: "01",
    label: "Community",
    title: "Community Partner",
    intro: "For organizations supporting the movement.",
    contribution: "Suggested contribution: ₦250K+",
    details: [
      "Brand listed across event sponsor materials.",
      "Community presence during key event moments.",
      "Access to public demo sessions and team showcases.",
      "Recognition as a supporter of student innovation.",
    ],
  },
  {
    number: "02",
    label: "Innovation",
    title: "Innovation Partner",
    intro: "For organizations looking for deeper engagement.",
    contribution: "Suggested contribution: ₦750K+",
    details: [
      "Stronger brand visibility across digital and venue touchpoints.",
      "Opportunity to support one challenge track.",
      "Team interaction during build and showcase periods.",
      "Talent access through curated participant introductions.",
    ],
  },
  {
    number: "03",
    label: "Strategic",
    title: "Strategic Partner",
    intro: "For organizations seeking strong visibility and collaboration.",
    contribution: "Suggested contribution: ₦1.5M+",
    details: [
      "Premium brand placement across the event experience.",
      "Speaking opportunity during a major program segment.",
      "Mentor, judge or workshop participation pathway.",
      "Activation space for product, talent or innovation engagement.",
    ],
  },
  {
    number: "04",
    label: "Title",
    title: "Title Partner",
    intro: "For organizations seeking the highest level of partnership.",
    contribution: "Suggested contribution: ₦3M+",
    details: [
      "Top-tier brand association with HACK FOR RSU.",
      "Highest visibility across stage, media and event communications.",
      "Priority speaking, judging and activation opportunities.",
      "Deep collaboration with organizers, mentors and standout teams.",
    ],
  },
];

const supportOptions = ["₦10K", "₦25K", "₦50K", "Custom"];

export function Sponsorship() {
  const [selectedTier, setSelectedTier] = useState(sponsorshipTiers[2]);

  return (
    <section id="sponsors" className="sponsorship-section relative overflow-hidden px-4 py-16 text-[#090b0c] sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="sponsorship-grid-bg pointer-events-none absolute inset-0" />
      <div className="absolute left-0 top-0 h-px w-full bg-black/10" />

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#20b957]">
              Sponsorship
            </p>
            <h2 className="max-w-4xl text-[clamp(2.55rem,5.6vw,5.25rem)] font-black uppercase leading-[0.9] tracking-normal">
              Power The Next Generation
              <span className="block text-[#20b957]">Of Builders.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-7 text-[#626a6d] sm:text-base lg:justify-self-end">
            Put your organization closer to the people building the ideas,
            products and technology of tomorrow.
          </p>
        </div>

        <div className="mt-10 grid border-y border-black/10 lg:grid-cols-4">
          {sponsorBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="sponsor-benefit border-black/10 py-6 lg:border-r lg:px-6"
            >
              {benefit.title === "Talent" ? (
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                  alt="Builders collaborating around a table"
                  className="mb-5 aspect-[16/9] w-full object-cover grayscale-[20%]"
                />
              ) : null}
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#20b957]">
                {benefit.title}
              </p>
              <p className="max-w-[18rem] text-sm font-medium leading-6 text-[#626a6d]">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.54fr_1fr] lg:items-start">
          <div>
            <p className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#090b0c]">
              Choose Your Level Of Impact
            </p>

            <div className="sponsor-tier-selector grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {sponsorshipTiers.map((tier) => {
                const isSelected = selectedTier.number === tier.number;

                return (
                  <button
                    key={tier.number}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`sponsor-tier-button group flex items-center justify-between gap-4 border px-4 py-4 text-left transition duration-300 ${
                      isSelected
                        ? "border-[#20b957] bg-[#082014] text-white"
                        : "border-black/10 bg-white/68 text-[#090b0c] hover:border-[#20b957]/50 hover:bg-white"
                    } ${tier.label === "Title" ? "sponsor-tier-title" : ""}`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`text-2xl font-black leading-none ${
                          isSelected ? "text-[#f2c84b]" : "text-black/18"
                        }`}
                      >
                        {tier.number}
                      </span>
                      <span>
                        <span className="block text-sm font-black uppercase tracking-[0.16em]">
                          {tier.label}
                        </span>
                        <span
                          className={`mt-1 block text-xs font-medium ${
                            isSelected ? "text-white/70" : "text-[#626a6d]"
                          }`}
                        >
                          {tier.intro}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`text-lg transition group-hover:translate-x-1 ${
                        isSelected ? "text-[#f2c84b]" : "text-[#20b957]"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sponsor-detail-panel relative overflow-hidden border border-[#20b957]/35 bg-white p-6 sm:p-8 lg:min-h-[27rem]">
            <div className="absolute right-0 top-0 h-28 w-28 bg-[#20b957]/10 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#20b957]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
              <div>
                <p className="mb-4 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#20b957]">
                  {selectedTier.number} Selected Tier
                </p>
                <h3 className="max-w-sm text-[clamp(2rem,3.8vw,3.65rem)] font-black uppercase leading-[0.92]">
                  {selectedTier.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm font-medium leading-7 text-[#626a6d]">
                  {selectedTier.intro}
                </p>
                <p className="mt-6 inline-flex border-l-2 border-[#f2c84b] pl-4 text-sm font-black uppercase tracking-[0.12em] text-[#090b0c]">
                  {selectedTier.contribution}
                </p>
              </div>

              <div className="grid gap-3">
                {selectedTier.details.map((detail) => (
                  <div
                    key={detail}
                    className="sponsor-detail-item flex gap-3 border-b border-black/10 pb-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#20b957]" />
                    <p className="text-sm font-medium leading-6 text-[#3f484a]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full bg-[#20b957] px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#f2c84b]"
            >
              Become a Sponsor
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-5 border border-black/10 bg-white/70 p-5 sm:grid-cols-[1fr_auto] sm:items-center lg:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#626a6d]">
              Not ready for a sponsorship package?
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-normal">
              Back The Builders
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-[#626a6d]">
              You can still support the next generation of innovators with a
              contribution of your choice.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            {supportOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#090b0c] transition hover:border-[#20b957] hover:text-[#20b957]"
              >
                {option}
              </button>
            ))}
            <a
              href="#support"
              className="inline-flex items-center gap-2 bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#20b957] hover:text-black"
            >
              Support Innovation
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
