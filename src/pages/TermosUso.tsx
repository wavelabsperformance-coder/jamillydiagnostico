import { LegalLayout } from "@/components/LegalLayout";
import { useMeta } from "@/lib/useMeta";

export default function Page() {
  useMeta({ title: "Termos de Uso — Jamilly Pacheco", description: "Termos que regem o uso deste site e dos serviços oferecidos.", canonical: "/termos-de-uso" });
  return (
    <LegalLayout eyebrow="Institucional" title="Termos de Uso">
      <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
      <p>Ao acessar e utilizar este site, você concorda com os termos e condições aqui estabelecidos.</p>
      <h2>1. Uso do site</h2>
      <p>O conteúdo apresentado tem caráter informativo e está protegido por direitos autorais.</p>
      <h2>2. Serviços</h2>
      <p>O Diagnóstico Estratégico é um processo individual conduzido diretamente por Jamilly Pacheco. As condições específicas são acordadas previamente entre as partes.</p>
      <h2>3. Responsabilidades</h2>
      <p>O usuário é responsável pelas informações fornecidas e pelo uso adequado dos serviços contratados.</p>
      <h2>4. Alterações</h2>
      <p>Estes termos podem ser atualizados periodicamente. Recomendamos consultá-los regularmente.</p>
    </LegalLayout>
  );
}
