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
//    grupo    (opcional) bloco onde o material aparece dentro da unidade.
//             Se nenhum material da unidade tiver grupo, aparecem por tipo
//             (Slides, Fichas, ...). Materiais sem grupo numa unidade com
//             grupos vão para "Outros".
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
// "grupos" (opcional) fixa a ordem dos grupos dentro da unidade;
// sem isso, aparecem pela ordem em que surgem na lista de materiais.
const TEMAS = [
  { codigo: "Unidade 1", nome: "Modelos Mtemáticos",             simbolo: "≈",
    grupos: ["Sistemas eleitorais", "Modelos de partilha", "Modelos financeiros", "Python"] },
  { codigo: "Unidade 2", nome: "Estatística",         simbolo: "x̄" },
  { codigo: "Unidade 3", nome: "Geometria Sintética", simbolo: "△" },
  { codigo: "Unidade 4", nome: "Funções",             simbolo: "f(x)" },
  { codigo: "Unidade 5", nome: "Geometria Analítica", simbolo: "(x,y)" },
  { codigo: "Unidade 6", nome: "Vetores",             simbolo: "→" },
];

// ---------- EXEMPLOS: substitui pelos teus materiais ----------
const MATERIAIS = [
  // ---------- U1 – Modelos ----------
  { tema: "Modelos", grupo: "Sistemas eleitorais", titulo: "Sistemas maioritários",  tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/1-SistemasMaioritarios.pdf" },
  { tema: "Modelos", grupo: "Sistemas eleitorais", titulo: "Sistemas preferenciais", tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/2-SistemasPreferenciais.pdf" },
  { tema: "Modelos", grupo: "Modelos de partilha", titulo: "Modelos de partilha",    tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/3-ModelosPartilha.pdf" },
  { tema: "Modelos", grupo: "Modelos financeiros", titulo: "Modelos de salários",    tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/4-ModelosSalarios.pdf" },
  { tema: "Modelos", grupo: "Python",              titulo: "Python",                 tipo: "slides", ficheiro: "U1-Modelos/Apresentacoes/5-Python.pdf" },
  // exemplo de ficha (troca pelo nome real do PDF):
  // { tema: "Modelos", grupo: "Sistemas eleitorais", titulo: "Ficha de apoio 1", tipo: "ficha", ficheiro: "U1-Modelos/FichasdeApoio/NOME.pdf" },

];
