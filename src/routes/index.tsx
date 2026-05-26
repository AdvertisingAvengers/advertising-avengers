import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { IndustryShowcase } from "@/components/site/IndustryShowcase";
import { Capabilities } from "@/components/site/Capabilities";
import { Intelligence } from "@/components/site/Intelligence";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Conversion } from "@/components/site/Conversion";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aetheria — AI-Powered Creative Marketing Studio" },
      {
        name: "description",
        content:
          "Next-generation creative marketing studio powered by AI. Cinematic ads, brand campaigns, reels, and high-performance digital growth for modern brands.",
      },
      { property: "og:title", content: "Aetheria — AI Creative Studio" },
      {
        property: "og:description",
        content:
          "High-performance creative campaigns powered by proprietary AI workflows for brands that demand cinematic excellence.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-brand-bg text-white min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <IndustryShowcase />
      <Capabilities />
      <Intelligence />
      <Portfolio />
      <WhyUs />
      <Conversion />
      <Footer />
    </main>
  );
}
