import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-background/15">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl md:text-4xl text-background mb-4">Jamilly Pacheco</p>
            <p className="text-background/65 font-light leading-relaxed max-w-sm text-sm">
              Imersão que Transforma individual para mulheres que querem trocar a confusão por clareza, direção e
              próximos passos com inteligência.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-background/30 hover:bg-accent hover:border-accent hover:text-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="px-5 h-11 border border-background/30 hover:bg-accent hover:border-accent hover:text-foreground flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-accent mb-5">Contato</p>
            <ul className="space-y-3 text-sm text-background/75 font-light">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {SITE.whatsappDisplay}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {SITE.address}
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-accent mb-5">Institucional</p>
            <ul className="space-y-3 text-sm text-background/75 font-light">
              <li><Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/politica-de-cookies" className="hover:text-accent transition-colors">Política de Cookies</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
              <li><Link to="/lgpd" className="hover:text-accent transition-colors">LGPD</Link></li>
            </ul>
           
             
          </div>
        </div>

       <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/50">
  <p>
    © {new Date().getFullYear()} Jamilly Pacheco. Todos os direitos reservados.
  </p>

  <a
    href="https://www.instagram.com/wavelabsperformance/"
    target="_blank"
    rel="noreferrer"
    className="
      font-serif
      italic
      tracking-wide
      transition-colors
      hover:text-accent
    "
  >
    Desenvolvido por{" "}
    <span className="text-accent">
      Wave Labs Performance
    </span>
  </a>
</div>
      </div>
    </footer>
  );
}