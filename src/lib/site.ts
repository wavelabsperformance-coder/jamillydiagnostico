export const SITE = {
  whatsapp: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  whatsappMessage: "Olá Jamilly, vim pelo site e quero agendar meu Diagnóstico Estratégico.",
  email: "contato@jamillypacheco.com.br",
  instagram: "https://www.instagram.com/empowercompaany/",
  address: "Aracaju — SE, Brasil",
  cnpj: "00.000.000/0001-00",
  legalName: "Jamilly Pacheco — Consultoria Estratégica",
};

export const waLink = (text = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;