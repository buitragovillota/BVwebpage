// =============================================================================
// AUTHORS CONFIGURATION
// src/config/authors.ts
// =============================================================================

export interface Author {
  /** Author's full name */
  name: string;
  /** Role in the company */
  role: string;
  /** Short bio (1-2 sentences) for JSON-LD, cards, and post metadata */
  bio: string;
  /** Full biography paragraphs for the nosotros/founders page */
  fullBio?: string[];
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
    role: "Socia Fundadora | Ex Magistrada titular de la Sección Quinta del Consejo de Estado",
    bio: "Con más de 35 años en el derecho público y una década de litigio independiente, es referente indiscutible del derecho electoral colombiano. Ex Magistrada titular de la Sección Quinta del Consejo de Estado.",
    fullBio: [
      "Formada en la Universidad Pontificia Bolivariana y con estudios avanzados en la Universidad de Salamanca y la Escuela Judicial de Barcelona. Con más de 35 años de trayectoria en el derecho público, ocupó cargos en la rama judicial durante toda su carrera, hasta llegar a la Consejería de Estado en la Sección Quinta, donde ejerció su período constitucional completo.",
      "Fue miembro de la comisión que redactó el Código de Procedimiento Administrativo y Contencioso Administrativo (Ley 1437 de 2011) y es docente y conferencista en múltiples universidades del país. Con más de diez años de litigio independiente desde su salida del Consejo de Estado, hoy pone ese recorrido al servicio de quienes enfrentan un proceso electoral.",
    ],
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
    role: "Socio Fundador | Ex Magistrado Auxiliar de la Sección Quinta del Consejo de Estado",
    bio: "Con más de 18 años de trayectoria jurídica, ocho de ellos en el Consejo de Estado, construyó su experiencia electoral desde adentro del sistema. Desde 2016 lidera procesos de nulidad electoral y pérdida de investidura a nivel nacional.",
    fullBio: [
      "Formado en el Externado de Colombia, la Javeriana y Los Andes, completó su Maestría en Derecho Público en la Universidad Complutense de Madrid. Con más de 18 años de trayectoria jurídica, más de ocho de ellos en el Consejo de Estado, construyó su experiencia electoral desde adentro del sistema — lo que hoy le permite defender o impugnar con conocimiento real de causa.",
      "Desde 2016 lidera procesos de nulidad electoral, pérdida de investidura y asesoría a candidatos y partidos en todo el territorio nacional. Su paso por la alta magistratura y una década de litigio electoral le dan la capacidad de analizar de forma idónea las diferentes circunstancias que dan lugar a un litigio, a efectos de generar soluciones efectivas.",
    ],
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
