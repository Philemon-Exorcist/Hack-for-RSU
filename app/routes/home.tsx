import type { Route } from "./+types/home";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/how-it-works";
import { MoreThanHackathon } from "../components/more-than-hackathon";
import { TheChallenge } from "../components/the-challenge";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HACK FOR RSU | Rivers State University" },
    {
      name: "description",
      content:
        "A premium university innovation and hackathon event hosted at Rivers State University.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <MoreThanHackathon />
      <TheChallenge />
      <HowItWorks />
    </>
  );
}
