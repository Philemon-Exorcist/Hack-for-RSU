import type { Route } from "./+types/home";
import { Hero } from "../components/hero";

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
  return <Hero />;
}
