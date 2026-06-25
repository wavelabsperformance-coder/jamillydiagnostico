export const SITE = {
  whatsapp: "5579999201224",
  whatsappDisplay: "(79) 99920-1224",
  whatsappMessage: "Olá Jamilly, vim pelo site e quero agendar minha Imersão.",
  email: "contato@jamillypacheco.com.br",
  instagram: "https://www.instagram.com/empowercompaany/",
  address: "Aracaju — SE, Brasil",

  legalName: "Jamilly Pacheco — Consultoria Estratégica",
};

export const waLink = (text = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;