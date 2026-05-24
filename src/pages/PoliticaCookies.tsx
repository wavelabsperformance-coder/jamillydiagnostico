import { LegalLayout } from "@/components/LegalLayout";
import { useMeta } from "@/lib/useMeta";

export default function Page() {
  useMeta({ title: "Política de Cookies — Jamilly Pacheco", description: "Como utilizamos cookies neste site.", canonical: "/politica-de-cookies" });
  return (
    <LegalLayout eyebrow="Institucional" title="Política de Cookies">
      <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
      <p>Este site utiliza cookies para garantir uma experiência refinada e analisar o desempenho das páginas.</p>
      <h2>1. O que são cookies</h2>
      <p>Cookies são pequenos arquivos armazenados no seu dispositivo que ajudam o site a funcionar adequadamente.</p>
      <h2>2. Tipos utilizados</h2>
      <ul>
        <li><strong>Essenciais:</strong> necessários para o funcionamento do site.</li>
        <li><strong>Analíticos:</strong> nos ajudam a entender como o site é utilizado.</li>
        <li><strong>Marketing:</strong> permitem comunicação mais relevante.</li>
      </ul>
      <h2>3. Gerenciamento</h2>
      <p>Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu navegador.</p>
    </LegalLayout>
  );
}
