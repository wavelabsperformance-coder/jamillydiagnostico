import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export function LegalLayout({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <main className="bg-background text-foreground antialiased">
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-3xl px-6 md:px-12 py-12 md:py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-background/70 hover:text-accent transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar
          </Link>
          <p className="eyebrow text-accent mt-10">{eyebrow}</p>
          <h1 className="serif-display text-4xl md:text-5xl text-background mt-6">{title}</h1>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-6 md:px-12 py-16 md:py-24 prose-legal">
        <div className="space-y-6 text-foreground/85 font-light leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-base [&_p]:md:text-lg [&_a]:text-wine [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
          {children}
        </div>
      </article>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}