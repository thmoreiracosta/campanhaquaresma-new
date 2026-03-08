export type TipoRosario = "gozosos" | "dolorosos" | "gloriosos" | "luminosos";

export interface RosarioConteudoItem {
  titulo: string;
  texto: string;
}

export const rosarioConteudo: Record<TipoRosario, RosarioConteudoItem> = {
  gozosos: {
    titulo: "Santo Rosário – Mistérios Gozosos",
    texto: `
      <p>Rezados às segundas-feiras e aos sábados.</p><br>
      <p><strong>1º Mistério:</strong> Anunciação do Anjo a Maria (Lc 1, 26-38)</p>
      <p><strong>2º Mistério:</strong> Visitação de Maria a Isabel (Lc 1, 39-45)</p>
      <p><strong>3º Mistério:</strong> Nascimento de Jesus (Lc 2, 6-20)</p>
      <p><strong>4º Mistério:</strong> Apresentação de Jesus no Templo (Lc 2, 22-35)</p>
      <p><strong>5º Mistério:</strong> Encontro de Jesus no Templo (Lc 2, 41-50)</p>
    `,
  },

  dolorosos: {
    titulo: "Santo Rosário – Mistérios Dolorosos",
    texto: `
      <p>Rezados às terças e sextas-feiras.</p><br>
      <p><strong>1º Mistério:</strong> Agonia no Horto (Mt 26, 36-46)</p>
      <p><strong>2º Mistério:</strong> Flagelação de Jesus (Jo 19, 1)</p>
      <p><strong>3º Mistério:</strong> Coroação de Espinhos (Mt 27, 29)</p>
      <p><strong>4º Mistério:</strong> Jesus carrega a Cruz (Jo 19, 17)</p>
      <p><strong>5º Mistério:</strong> Crucificação e Morte (Jo 19, 18-30)</p>
    `,
  },

  gloriosos: {
    titulo: "Santo Rosário – Mistérios Gloriosos",
    texto: `
      <p>Rezados às quartas-feiras e aos domingos.</p><br>
      <p><strong>1º Mistério:</strong> Ressurreição de Jesus (Mt 28, 1-10)</p>
      <p><strong>2º Mistério:</strong> Ascensão de Jesus (Lc 24, 50-53)</p>
      <p><strong>3º Mistério:</strong> Descida do Espírito Santo (At 2, 1-4)</p>
      <p><strong>4º Mistério:</strong> Assunção de Maria (Ap 12, 1)</p>
      <p><strong>5º Mistério:</strong> Coroação de Maria no Céu (Ap 12, 1)</p>
    `,
  },

  luminosos: {
    titulo: "Santo Rosário – Mistérios Luminosos",
    texto: `
      <p>Rezados às quintas-feiras.</p><br>
      <p><strong>1º Mistério:</strong> Batismo de Jesus (Mt 3, 13-17)</p>
      <p><strong>2º Mistério:</strong> Autorrevelação nas Bodas de Caná (Jo 2, 1-11)</p>
      <p><strong>3º Mistério:</strong> Anúncio do Reino de Deus (Mc 1, 14-15)</p>
      <p><strong>4º Mistério:</strong> Transfiguração (Mt 17, 1-8)</p>
      <p><strong>5º Mistério:</strong> Instituição da Eucaristia (Lc 22, 19-20)</p>
    `,
  },
};

/**
 * Retorna o tipo de Rosário correspondente ao dia da semana
 * @returns TipoRosario
 */
export function getRosarioDoDia(): TipoRosario {
  const hoje = new Date();
  const diaSemana = hoje.getDay(); // 0 = domingo, 6 = sábado

  if (diaSemana === 1 || diaSemana === 6) return "gozosos";
  if (diaSemana === 2 || diaSemana === 5) return "dolorosos";
  if (diaSemana === 3 || diaSemana === 0) return "gloriosos";
  if (diaSemana === 4) return "luminosos";

  // fallback para TS não reclamar, embora nunca aconteça
  return "gloriosos";
}