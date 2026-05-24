import { LegalLayout } from "@/components/LegalLayout";
import { useMeta } from "@/lib/useMeta";

export default function Page() {
  useMeta({ title: "LGPD — Jamilly Pacheco", description: "Compromisso com a Lei Geral de Proteção de Dados.", canonical: "/lgpd" });
  return (
    <LegalLayout eyebrow="Institucional" title="LGPD">
      <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
      <p>Atuamos em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantindo a transparência, segurança e o respeito aos direitos dos titulares dos dados.</p>
      <h2>Princípios adotados</h2>
      <ul>
        <li>Finalidade legítima e específica para a coleta</li>
        <li>Minimização dos dados utilizados</li>
        <li>Transparência sobre o tratamento realizado</li>
        <li>Segurança técnica e administrativa</li>
      </ul>
      <h2>Encarregado de Dados (DPO)</h2>
      <p>Para questões relativas à LGPD, entre em contato: contato@jamillypacheco.com.br</p>
    </LegalLayout>
  );
}
