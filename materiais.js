// ============================================================
//  MATERIAIS DAS AULAS — é só este ficheiro que tens de editar
// ============================================================
//
//  Para acrescentar um material:
//    1. copia o PDF para a pasta certa (ex.: matA/estatistica/)
//    2. acrescenta uma linha à lista MATERIAIS, lá em baixo
//
//  Campos de cada material:
//    disc     "matA" ou "ptig"
//    tema     tem de ser igual a um dos temas definidos em DISCIPLINAS
//    titulo   o que os alunos veem
//    tipo     "slides", "ficha", "resolucao", "resumo", "app" ou "outro"
//    ficheiro caminho do PDF (ou um link completo, começado por https://)
//    data     "AAAA-MM-DD" — materiais dos últimos 7 dias aparecem como NOVO
//    nota     (opcional) texto curto que aparece por baixo do título
//
//  Para esconder um material sem o apagar, põe // no início da linha.
// ============================================================

const CONFIG = {
  titulo: "Materiais de Matemática",
  subtitulo: "Prof. Cláudia Diegues · Escola Secundária Carlos Amarante · 2026/27",
  diasNovo: 7,
};

const DISCIPLINAS = [
  {
    id: "matA",
    nome: "Matemática A",
    descricao: "10.º H · 10.º Q · 10.º S",
    temas: ["Geometria", "Estatística", "Funções"],
  },
  {
    id: "ptig",
    nome: "PTIG",
    descricao: "Técnico de Informática e Gestão",
    temas: ["Módulo P1", "Módulo P2"],
  },
];

// ---------- EXEMPLOS: substitui pelos teus materiais ----------
const MATERIAIS = [
  { disc: "matA", tema: "Geometria",   titulo: "Pontos notáveis do triângulo", tipo: "slides",    ficheiro: "matA/geometria/pontos-notaveis.pdf", data: "2026-11-18", nota: "Circuncentro, incentro, baricentro e ortocentro" },
  { disc: "matA", tema: "Geometria",   titulo: "Ficha 3 — Pontos notáveis",     tipo: "ficha",     ficheiro: "matA/geometria/ficha3.pdf",          data: "2026-11-19" },
  { disc: "matA", tema: "Geometria",   titulo: "Resolução da ficha 3",          tipo: "resolucao", ficheiro: "matA/geometria/ficha3-resolucao.pdf",data: "2026-11-20" },
  { disc: "matA", tema: "Geometria",   titulo: "Construções no GeoGebra",       tipo: "app",       ficheiro: "https://www.geogebra.org/",          data: "2026-11-10" },
  { disc: "matA", tema: "Estatística", titulo: "Percentis",                     tipo: "slides",    ficheiro: "matA/estatistica/percentis.pdf",     data: "2026-10-20" },
  { disc: "matA", tema: "Estatística", titulo: "Resumo — medidas de localização", tipo: "resumo",  ficheiro: "matA/estatistica/resumo.pdf",        data: "2026-10-22" },
  { disc: "matA", tema: "Estatística", titulo: "Ficha 2 — Percentis",           tipo: "ficha",     ficheiro: "matA/estatistica/ficha2.pdf",        data: "2026-10-23" },

  { disc: "ptig", tema: "Módulo P1",   titulo: "Apresentação do módulo",        tipo: "slides",    ficheiro: "ptig/p1/apresentacao.pdf",           data: "2026-09-20" },
  { disc: "ptig", tema: "Módulo P1",   titulo: "Ficha de trabalho 1",           tipo: "ficha",     ficheiro: "ptig/p1/ficha1.pdf",                 data: "2026-10-02" },
  { disc: "ptig", tema: "Módulo P1",   titulo: "Resolução da ficha 1",          tipo: "resolucao", ficheiro: "ptig/p1/ficha1-resolucao.pdf",       data: "2026-10-09" },
  { disc: "ptig", tema: "Módulo P2",   titulo: "Ficha de trabalho 1",           tipo: "ficha",     ficheiro: "ptig/p2/ficha1.pdf",                 data: "2026-11-17" },
];
