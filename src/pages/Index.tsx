import { useMeta } from "@/lib/useMeta";
import { Hero } from "@/sections/Hero";
import { EmotionalConnection } from "@/sections/EmotionalConnection";
import { BeliefBreak } from "@/sections/BeliefBreak";
import { About } from "@/sections/About";
import { HowItWorks } from "@/sections/HowItWorks";
import { WhatYouGet } from "@/sections/WhatYouGet";
import { Authority } from "@/sections/Authority";
import { ForWho } from "@/sections/ForWho";
import { Transformation } from "@/sections/Transformation";
import { Investment } from "@/sections/Investment";
import { Testimonials } from "@/sections/Testimonials";
import { Gallery } from "@/sections/Gallery";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieBanner } from "@/components/CookieBanner";

export default function Index() {
  useMeta({
    title: "Diagnóstico Estratégico — Jamilly Pacheco",
    description: "Processo estratégico individual conduzido por Jamilly Pacheco para identificar bloqueios e revelar o caminho mais inteligente para sua próxima fase.",
    canonical: "/",
  });
  return (
    <main className="bg-background text-foreground antialiased">
      <Hero />
      <EmotionalConnection />
      <BeliefBreak />
      <About />
      <HowItWorks />
      <WhatYouGet />
      <Authority />
      <ForWho />
      <Transformation />
      <Investment />
      <Testimonials />
      <Gallery />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </main>
  );
}
