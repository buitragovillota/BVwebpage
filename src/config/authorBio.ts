// =============================================================================
// AUTHORS CONFIGURATION
// src/config/authors.ts
// =============================================================================

export interface Author {
  /** Author's full name */
  name: string;
  /** Role in the company */
  role: string;
  /** Short bio (1-2 sentences) to display in posts */
  bio: string;
  /** Author's image URL (optional) */
  image?: string;
  /** Credentials or specialties */
  credentials: string[];
  /** Author's social media links */
  socialMedia?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  /** Author's profile URL on the site (optional) */
  url?: string;
}

/**
 * Authors array
 * The name must exactly match post.author from CMS
 */
export const AUTHORS: Author[] = [
  {
    name: "Dra. Susana Buitrago Valencia",
    role: "Socia Fundadora | Ex Consejera de Estado",
    bio: "Jurista colombiana de alto nivel y referente indiscutible en el derecho público nacional. Durante su periodo como Magistrada de la Sección Quinta del Consejo de Estado, lideró y tomó decisiones críticas que hoy son guía y jurisprudencia de referencia en el país.",
    image: "/images/team/susana-buitrago.jpg",
    credentials: [
      "Derecho Electoral",
      "Pérdida de Investidura",
      "Control de Legalidad",
      "Derecho Contencioso Administrativo",
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/susana-buitrago/",
    },
    url: "/nosotros",
  },
  {
    name: "Dr. Luis Fernando Villota Medina",
    role: "Socio Fundador | Ex Magistrado Auxiliar",
    bio: "Especialista en la arquitectura de estrategias jurídicas complejas. Su paso por la alta magistratura le otorgó una capacidad analítica para desentrañar expedientes y estructurar litigios sólidos.",
    image: "/images/team/luis-villota.jpg",
    credentials: [
      "Estrategia Jurídica",
      "Derecho Electoral",
      "Nulidad Electoral",
      "Derecho Público",
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/luis-villota/",
    },
    url: "/nosotros",
  },
];

/**
 * Default author when no match is found
 * Uses organization as generic author
 */
export const DEFAULT_AUTHOR: Author = {
  name: "Buitrago & Villota",
  role: "Firma Boutique de Alta Magistratura",
  bio: "Excelencia legal en el campo electoral. Expertos en defensa e impugnación electoral con más de 10 años de litigio independiente y una tasa de éxito superior al 95%.",
  credentials: [
    "Derecho Electoral",
    "Nulidad Electoral",
    "Pérdida de Investidura",
    "Derecho Contencioso Administrativo",
  ],
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/buitrago-villota",
  },
};

/**
 * Get author by name
 * Returns DEFAULT_AUTHOR if not found
 */
export function getAuthorByName(name: string): Author {
  return AUTHORS.find((author) => author.name === name) || DEFAULT_AUTHOR;
}
