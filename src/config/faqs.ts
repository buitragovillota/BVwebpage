// =============================================================================
// FAQS CONFIGURATION
// src/config/faqs.ts
// =============================================================================

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// General FAQs - for main FAQ page (Home page)
export const generalFAQs: FAQItem[] = [
  {
    question: "¿Por qué elegir una firma liderada por exmagistrados del Consejo de Estado?",
    answer:
      "Contar con abogados que han sido parte de la máxima corporación de la jurisdicción contencioso-administrativa garantiza un conocimiento profundo, \"desde adentro\", de cómo se interpretan y fallan los casos. Esto nos permite anticipar escenarios y estructurar defensas o demandas con el más alto rigor técnico.",
    category: "general",
  },
  {
    question: "¿En qué regiones de Colombia prestan sus servicios legales?",
    answer:
      "Nuestra firma tiene sede en Bogotá, pero representamos a partidos políticos, candidatos y funcionarios públicos a nivel nacional, litigando ante tribunales administrativos en todo el país y ante el Consejo de Estado.",
    category: "general",
  },
  {
    question: "¿Atienden consultas de urgencia frente a procesos electorales en curso?",
    answer:
      "Sí. Entendemos que los calendarios electorales y los términos de caducidad son estrictos. Brindamos atención prioritaria y confidencial para resolver contingencias urgentes, como revocatorias de inscripción, demandas de nulidad o defensas disciplinarias inminentes.",
    category: "general",
  },
  {
    question: "¿Cómo garantizan la confidencialidad de mi caso?",
    answer:
      "Manejamos asuntos de alto perfil político y público bajo el más estricto secreto profesional. Desde la primera consulta de valoración, blindamos la información de nuestros clientes con protocolos de privacidad absolutos.",
    category: "general",
  },
];

// Service-specific FAQs
export const serviceFAQs: FAQItem[] = [
  {
    question: "¿Qué es la nulidad electoral y cuándo procede?",
    answer:
      "La nulidad electoral es un mecanismo jurídico para impugnar elecciones cuando existen irregularidades graves que afectan la legitimidad del proceso. Procede en casos de fraude electoral, violación de normas electorales, doble militancia, entre otros.",
    category: "services",
  },
  {
    question: "¿Cuáles son las causales más comunes de pérdida de investidura?",
    answer:
      "Las causales incluyen violación del régimen de inhabilidades e incompatibilidades, tráfico de influencias, celebración indebida de contratos con el Estado, y otras conductas que afectan la moralidad pública y el correcto ejercicio del cargo.",
    category: "services",
  },
];

// All FAQs combined
export const allFAQs: FAQItem[] = [...generalFAQs, ...serviceFAQs];

// Helper function to get FAQs by category
export function getFAQsByCategory(category: string): FAQItem[] {
  return allFAQs.filter((faq) => faq.category === category);
}
