import { LegalLayout } from "@/components/LegalLayout";
import { useMeta } from "@/lib/useMeta";

export default function Page() {
  useMeta({ title: "Política de Privacidade — Jamilly Pacheco", description: "Como tratamos seus dados pessoais em conformidade com a LGPD.", canonical: "/politica-de-privacidade" });
  return (
    <LegalLayout eyebrow="Institucional" title="Política de Privacidade">
      <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
      <p>Respeitamos integralmente a sua privacidade e seguimos a Lei Geral de Proteção de Dados (LGPD).</p>
      <h2>1. Dados coletados</h2>
      <p>Coletamos apenas os dados necessários para contato e prestação dos serviços (nome, e-mail, telefone e mensagens enviadas).</p>
      <h2>2. Finalidade</h2>
      <p>Utilizamos seus dados exclusivamente para responder solicitações, conduzir o processo de diagnóstico e enviar comunicações relevantes mediante consentimento.</p>
      <h2>3. Compartilhamento</h2>
      <p>Não compartilhamos seus dados com terceiros, exceto quando exigido por lei.</p>
      <h2>4. Seus direitos</h2>
      <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail: contato@jamillypacheco.com.br</p>
    </LegalLayout>
  );
}
