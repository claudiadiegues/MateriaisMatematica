// ============================================================
//  MATERIAIS DAS AULAS — é só este ficheiro que tens de editar
// ============================================================
//
//  Para acrescentar um material:
//    1. copia o PDF para a pasta certa (ex.: U2-Estatistica/)
//    2. acrescenta uma linha à lista MATERIAIS, lá em baixo
//
//  Campos de cada material:
//    tema     tem de ser igual ao nome de um dos TEMAS
//    titulo   o que os alunos veem
//    tipo     "slides", "ficha", "resolucao", "resumo", "app" ou "outro"
//    ficheiro caminho do PDF, com a pasta (ou um link completo, começado por https://)
//    data     "AAAA-MM-DD" — materiais dos últimos 7 dias aparecem como NOVO
//    nota     (opcional) texto curto que aparece por baixo do título
//
//  Para esconder um material sem o apagar, põe // no início da linha.
//  Use nomes de ficheiros e pastas sem acentos nem espaços.
// ============================================================

const CONFIG = {
  titulo: "Matemática A · 10.º ano",
  subtitulo: "Prof. Cláudia Diegues · Escola Secundária Carlos Amarante · 2026/27",
  diasNovo: 7,
};

// Temas, pela ordem em que aparecem na grelha.
// "simbolo" é o que aparece em grande no cartão (pode ser texto curto).
// Temas sem materiais também aparecem (como "em breve").
const TEMAS = [
  { codigo: "U1", nome: "Modelos",             simbolo: "≈" },
  { codigo: "U2", nome: "Estatística",         simbolo: "x̄" },
  { codigo: "U3", nome: "Geometria Sintética", simbolo: "△" },
  { codigo: "U4", nome: "Funções",             simbolo: "f(x)" },
  { codigo: "U5", nome: "Geometria Analítica", simbolo: "(x,y)" },
  { codigo: "U6", nome: "Vetores",             simbolo: "→" },
];

// ---------- EXEMPLOS: substitui pelos teus materiais ----------
const MATERIAIS = [
  // ---------- U1 – Modelos ----------
  { tema: "Modelos", titulo: "Sistemas maioritários",  tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/1-SistemasMaioritarios.pdf" },
  { tema: "Modelos", titulo: "Sistemas preferenciais", tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/2-SistemasPreferenciais.pdf" },
  { tema: "Modelos", titulo: "Modelos de partilha",    tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/3-ModelosPartilha.pdf" },
  { tema: "Modelos", titulo: "Modelos de salários",    tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/4-ModelosSalarios.pdf" },
  { tema: "Modelos", titulo: "Python",                 tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/5-Python.pdf" },

];
