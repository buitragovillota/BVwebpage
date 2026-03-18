// =============================================================================
// SERVICES CONFIGURATION
// src/config/services.ts
// =============================================================================

import GavelIcon from "@/assets/icons/gavel.svg";
import ShieldIcon from "@/assets/icons/shield.svg";
import FileTextIcon from "@/assets/icons/file-text.svg";
import CompassIcon from "@/assets/icons/compass.svg";

export interface Service {
  slug: string;
  title: string;
  description: string;
  seoDescription: string;
  image?: string;
  icon?: any;
  benefits?: string[];
  microcopy?: string;
  cta?: string;
}

export const services: Service[] = [
  {
    slug: "nulidad-electoral-doble-militancia",
    title: "Nulidad Electoral y Doble Militancia",
    description:
      "La defensa de una credencial no admite improvisaciones. Representamos a funcionarios electos y candidatos frente a demandas de nulidad por doble militancia, irregularidades en los escrutinios o violaciones al régimen electoral. Entendemos la filigrana de este proceso: atacamos y defendemos con argumentos de peso jurisprudencial para asegurar la estabilidad democrática o la corrección del resultado en las urnas.",
    seoDescription:
      "Defensa y ataque ante inscripciones irregulares. Protegemos su credencial frente a vicios electorales.",
    icon: GavelIcon,
    microcopy:
      "Estrategias de litigio probadas ante el máximo tribunal de lo contencioso administrativo.",
    cta: "Consultar viabilidad del caso",
    benefits: [
      "Defensa ante demandas de nulidad electoral",
      "Protección contra acusaciones de doble militancia",
      "Impugnación de irregularidades en escrutinios",
      "Argumentación jurisprudencial de alto nivel",
      "Representación ante el máximo tribunal contencioso",
    ],
  },
  {
    slug: "perdida-investidura",
    title: "Pérdida de Investidura",
    description:
      "El proceso más severo contra la carrera de un servidor público exige una defensa milimétrica. Al tener una connotación disciplinaria y procedimental completamente diferente a la nulidad, abordamos las causales de desinvestidura (tráfico de influencias, inasistencia, conflicto de intereses) estructurando un escudo probatorio implacable. Protegemos su fuero, su trayectoria y su futuro político con el rigor de la alta magistratura.",
    seoDescription:
      "Intervención de alta complejidad frente a sanciones políticas y procesos disciplinarios severos.",
    icon: ShieldIcon,
    cta: "Agendar defensa especializada",
    benefits: [
      "Defensa en procesos de desinvestidura",
      "Análisis de causales: tráfico de influencias, inasistencia, conflicto de intereses",
      "Estrategia probatoria implacable",
      "Protección del fuero y trayectoria política",
      "Defensa disciplinaria y procedimental especializada",
    ],
  },
  {
    slug: "control-impugnacion-candidaturas",
    title: "Control e Impugnación de Candidaturas",
    description:
      "Las elecciones se ganan y se defienden desde antes del día de los comicios. Actuamos con celeridad ante el Consejo Nacional Electoral (CNE) para solicitar la revocatoria de inscripciones de candidaturas irregulares (tanto de oponentes directos como en defensa de los avalados de su partido). Intervenimos estratégicamente en el momento procesal exacto para neutralizar riesgos antes de la jornada electoral.",
    seoDescription:
      "Intervención ante el CNE para revocatoria de inscripciones irregulares y defensa de avalados.",
    icon: FileTextIcon,
    cta: "Solicitar intervención ante el CNE",
    benefits: [
      "Actuación ágil ante el CNE",
      "Revocatoria de candidaturas irregulares",
      "Defensa de candidatos avalados",
      "Intervención estratégica pre-electoral",
      "Neutralización de riesgos procesales",
    ],
  },
  {
    slug: "consultoria-concepto-electoral",
    title: "Consultoría y Concepto Electoral",
    description:
      "El aval de un candidato inhabilitado puede costarle sanciones severas a su colectividad. Brindamos asesoría preventiva y asistencia judicial a directorios políticos mediante conceptos electorales vinculantes que analizan inhabilidades y blindan sus postulaciones. Asimismo, guiamos a los nuevos liderazgos en la correcta conformación, recolección de firmas e inscripción de movimientos ciudadanos independientes, asegurando el cumplimiento absoluto de la norma legal.",
    seoDescription:
      "Blindaje preventivo para candidatos y partidos. Análisis de inhabilidades y requisitos de ley.",
    icon: CompassIcon,
    microcopy: "El respaldo jurídico preventivo que todo partido necesita.",
    cta: "Blindar candidaturas del partido",
    benefits: [
      "Conceptos electorales vinculantes",
      "Análisis preventivo de inhabilidades",
      "Blindaje de postulaciones",
      "Asesoría para movimientos ciudadanos",
      "Conformación legal de colectividades políticas",
    ],
  },
];
