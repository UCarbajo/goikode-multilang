import { createI18n } from "vue-i18n";

// Mensajes en español
const es = {
  nav: {
    home: "Inicio",
    about: "Sobre Nosotros",
    contacto: "Contacto",
  },
  home: {
    welcome: "Bienvenido a Goikode",
    tagline: "Especialistas en ciberseguridad y desarrollo seguro",
    learnMore: "Conoce más",
    features: {
      protection: {
        title: "Protección Avanzada",
        description:
          "Nuestras soluciones de seguridad protegen tu negocio contra las amenazas más sofisticadas.",
      },
      development: {
        title: "Desarrollo Seguro",
        description:
          "Creamos aplicaciones con seguridad integrada desde el diseño hasta la implementación.",
      },
      consulting: {
        title: "Consultoría Especializada",
        description:
          "Nuestro equipo de expertos te guiará en la implementación de las mejores prácticas de seguridad.",
      },
    },
  },
  about: {
    title: "Sobre Goikode",
    mission: {
      title: "Nuestra Misión",
      description:
        "En Goikode, nuestra misión es ayudar a las empresas a crecer de forma segura en un mundo digital cada vez más complejo y lleno de amenazas.",
    },
    history: {
      title: "Nuestra Historia",
      description:
        "Fundada en 2015 por un grupo de expertos en seguridad informática, Goikode nació con la visión de democratizar el acceso a soluciones de ciberseguridad de alta calidad.",
    },
    team: {
      title: "El Equipo",
      description:
        "Nuestro equipo está formado por profesionales certificados con experiencia en entornos críticos. Nos caracteriza nuestro enfoque práctico y directo, evitando soluciones genéricas en favor de implementaciones precisas.",
    },
    funFact: {
      title: "¿Sabías que...?",
      description:
        'El nombre "Goikode" viene de la combinación de "goiko" (que significa "superior" en euskera) y "code" (código en inglés). Aunque nuestro CEO insiste en que se le ocurrió mientras comía un pintxo de tortilla.',
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
  languageSelector: {
    label: "Idioma",
  },
};

// Mensajes en inglés
const en = {
  nav: {
    home: "Home",
    about: "About Us",
    contacto: "Contact",
  },
  home: {
    welcome: "Welcome to Goikode",
    tagline: "Specialists in cybersecurity and secure development",
    learnMore: "Learn more",
    features: {
      protection: {
        title: "Advanced Protection",
        description:
          "Our security solutions protect your business against the most sophisticated threats.",
      },
      development: {
        title: "Secure Development",
        description:
          "We create applications with security integrated from design to implementation.",
      },
      consulting: {
        title: "Specialized Consulting",
        description:
          "Our team of experts will guide you in implementing security best practices.",
      },
    },
  },
  about: {
    title: "About Goikode",
    mission: {
      title: "Our Mission",
      description:
        "At Goikode, our mission is to help companies grow safely in an increasingly complex and threat-filled digital world.",
    },
    history: {
      title: "Our History",
      description:
        "Founded in 2015 by a group of cybersecurity experts, Goikode was born with the vision of democratizing access to high-quality cybersecurity solutions.",
    },
    team: {
      title: "The Team",
      description:
        "Our team consists of certified professionals with experience in critical environments. We are characterized by our practical and direct approach, avoiding generic solutions in favor of precise implementations.",
    },
    funFact: {
      title: "Did you know...?",
      description:
        'The name "Goikode" comes from the combination of "goiko" (which means "superior" in Basque) and "code" (in English). Although our CEO insists that it came to him while eating a Spanish omelette pintxo.',
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
  languageSelector: {
    label: "Language",
  },
};

// Mensajes en euskera
const eu = {
  nav: {
    home: "Hasiera",
    about: "Guri Buruz",
    contacto: "Kontaktatu",
  },
  home: {
    welcome: "Ongi etorri Goikode-ra",
    tagline: "Zibersegurtasunean eta garapen seguruan espezialistak",
    learnMore: "Gehiago jakin",
    features: {
      protection: {
        title: "Babes Aurreratua",
        description:
          "Gure segurtasun-irtenbideek zure negozioa mehatxu sofistikatuenetatik babesten dute.",
      },
      development: {
        title: "Garapen Segurua",
        description:
          "Diseinutik inplementaziora segurtasuna integratuta duten aplikazioak sortzen ditugu.",
      },
      consulting: {
        title: "Aholkularitza Espezializatua",
        description:
          "Gure adituen taldeak segurtasun-praktika onenak ezartzen lagunduko dizu.",
      },
    },
  },
  about: {
    title: "Goikode-ri Buruz",
    mission: {
      title: "Gure Misioa",
      description:
        "Goikoden, gure misioa enpresak gero eta konplexuagoa eta mehatxuz betetako mundu digitalean seguru hazten laguntzea da.",
    },
    history: {
      title: "Gure Historia",
      description:
        "2015ean zibersegurtasuneko aditu talde batek sortua, Goikode kalitate handiko zibersegurtasun-irtenbideetarako sarbidea demokratizatzeko ikuspegiarekin jaio zen.",
    },
    team: {
      title: "Taldea",
      description:
        "Gure taldea ingurune kritikoetan esperientzia duten profesional ziurtatuek osatzen dute. Gure ikuspegi praktiko eta zuzenak ezaugarritzen gaitu, soluzio generikoak saihestuz inplementazio zehatzen alde.",
    },
    funFact: {
      title: "Ba al zenekien...?",
      description:
        '"Goikode" izena "goiko" (euskaraz "gorenekoa" esan nahi duena) eta "code" (ingelesez kodea) konbinaziotik dator. Nahiz eta gure CEOk dio tortilla pintxo bat jaten ari zela bururatu zitzaiola.',
    },
  },
  contacto: {},

  footer: {
    rights: "Eskubide guztiak erreserbatuak.",
  },
  languageSelector: {
    label: "Hizkuntza",
  },
};

// Determinar el idioma inicial
function getInitialLocale() {
  // Primero, intentar obtener el idioma guardado en localStorage
  const savedLocale = localStorage.getItem("userLocale");
  if (savedLocale && ["es", "en", "eu"].includes(savedLocale)) {
    return savedLocale;
  }

  // Si no hay idioma guardado, intentar usar el idioma del navegador
  const browserLocale = navigator.language.split("-")[0];
  if (["es", "en", "eu"].includes(browserLocale)) {
    return browserLocale;
  }

  // Por defecto, usar español
  return "es";
}

// Crear instancia de i18n
const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "es",
  messages: {
    es,
    en,
    eu,
  },
});

export default i18n;
