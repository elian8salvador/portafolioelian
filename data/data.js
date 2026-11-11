/* =====================================================================
   ✏️  ESTE ES EL ÚNICO ARCHIVO QUE TIENES QUE EDITAR PARA CAMBIAR EL CONTENIDO
   ---------------------------------------------------------------------
   · Todo lo que ponga [EDITAR ...] es un hueco que debes rellenar.
   · Los textos marcados como BORRADOR los he escrito yo a partir de lo
     que me contaste: léelos y ajústalos para que sean 100 % verdad.
   · Si algo no lo has hecho, BÓRRALO. Una empresa lo va a preguntar.
   · Al abrir la web, la consola del navegador (F12) te avisa de cuántos
     [EDITAR] te quedan por rellenar.
   ===================================================================== */

window.PORTFOLIO = {

  /* ───────────── PERFIL (cabecera + contacto) ───────────── */
  profile: {
    name: "Elian Salvador",
    role: "Marketing × Ciberseguridad",
    status: "Abierto a oportunidades · Barcelona",
    tagline:
      "Técnico superior en Marketing y Publicidad y estudiante de ASIX con perfil de ciberseguridad. " +
      "Entiendo cómo se comunica una marca y cómo se protege lo que hay detrás.",
    // Frases que se escriben solas en el terminal de la portada
    typed: [
      "Técnico Superior en Marketing y Publicidad",
      "ASIX · perfil Ciberseguridad (2.º curso)",
      "Donde la marca se encuentra con la infraestructura",
    ],
    // Líneas fijas del terminal
    terminal: [
      { cmd: "whoami",        out: "elian_salvador" },
      { cmd: "cat perfil.txt", out: "marketing + sistemas + seguridad" },
    ],
    location: "Barcelona, España",
    email: "[EDITAR tu-email@ejemplo.com]",
    github: "https://github.com/[EDITAR-usuario]",
    linkedin: "https://www.linkedin.com/in/[EDITAR-usuario]",
    cv: "",   // Ej.: "docs/cv-elian-salvador.pdf"  (si lo dejas vacío, el botón no aparece)
  },

  /* ───────────── SOBRE MÍ ───────────── */
  about: {
    paragraphs: [
      "Soy Elian, de Barcelona. Me formé como Técnico Superior en Marketing y Publicidad y ahora termino " +
      "el segundo y último año de ASIX (Administración de Sistemas Informáticos en Red) en el Institut " +
      "Tecnològic de Barcelona, con perfil de ciberseguridad.",
      "Mi punto de partida es poco habitual en IT: aprendí primero cómo se construye y se comunica una " +
      "marca, y después cómo se sostiene y se protege la infraestructura que hay detrás. Trabajo en soporte " +
      "técnico de pantallas que emiten contenido en locales, y ahí las dos mitades se tocan a diario.",
    ],
    facts: [
      { label: "Ubicación",   value: "Barcelona" },
      { label: "Formación",   value: "ASIX · 2.º curso (perfil ciber)" },
      { label: "Formación previa", value: "CFGS Marketing y Publicidad" },
      { label: "Ahora mismo", value: "Prácticas (mañanas) + soporte técnico" },
    ],
    // Las dos "mitades" del perfil (BORRADOR: ajusta los puntos a lo que realmente dominas)
    dual: [
      {
        domain: "mkt",
        kicker: "Cómo se comunica",
        title: "Marketing y Publicidad",
        points: [
          "Comunicación y narrativa de marca",
          "Análisis de público y de mercado",
          "Campañas y publicidad digital",
          "Explicar temas complejos a quien no es técnico",
        ],
      },
      {
        domain: "it",
        kicker: "Cómo se protege",
        title: "ASIX · Ciberseguridad",
        points: [
          "Administración de sistemas y redes",
          "Bastionado y acceso remoto seguro",
          "Automatización y scripting",
          "Soporte y gestión de incidencias",
        ],
      },
    ],
    bridge: {
      title: "Lo que aporta la mezcla",
      items: [
        "Entender la ingeniería social desde dentro: sé cómo se persuade a una persona, y por eso sé cómo se la engaña.",
        "Comunicar riesgos e incidencias a dirección y a usuarios sin jerga técnica.",
        "Ver el sistema como parte de un negocio y de una marca, no solo como servidores.",
      ],
    },
  },

  /* ───────────── ASPIRACIONES (BORRADOR: cámbialas por las tuyas) ───────────── */
  aspirations: [
    {
      title: "Entrar en ciberseguridad",
      text: "Empezar en un puesto junior de IT con foco en seguridad: soporte, sistemas o un equipo de monitorización.",
    },
    {
      title: "Seguir formándome",
      text: "Prepararme certificaciones de entrada y practicar en laboratorios propios para consolidar la base técnica.",
    },
    {
      title: "Unir las dos disciplinas",
      text: "Trabajar en concienciación y comunicación de seguridad, donde mi formación en marketing marca la diferencia.",
    },
  ],

  /* ───────────── EXPERIENCIA ───────────── */
  // type: "it" (cian) o "mkt" (magenta). Ordénalas de más reciente a más antigua.
  experience: [
    {
      type: "it",
      period: "[EDITAR fechas] – Actualidad",
      role: "Prácticas de empresa · ASIX",
      org: "[EDITAR empresa]",
      bullets: [
        "Prácticas del ciclo en turno de mañana.",
        "[EDITAR: tareas reales que haces o has hecho]",
      ],
    },
    {
      type: "it",
      period: "[EDITAR fechas] – Actualidad",
      role: "Técnico de soporte",
      org: "[EDITAR empresa]",
      bullets: [
        "Atención telefónica a locales con pantallas de contenido: encendido de equipos y reinicio de conexión.",
        "Monitorización del estado de la conexión de cada local desde una plataforma de gestión.",
        "Seguimiento y comunicación del estado de los tickets pendientes.",
      ],
    },
    {
      type: "mkt",
      period: "[EDITAR fechas]",
      role: "[EDITAR: puesto o prácticas en marketing]",
      org: "[EDITAR empresa]",
      bullets: ["[EDITAR: qué hiciste y qué resultado tuvo]"],
    },
  ],

  education: [
    {
      type: "it",
      period: "2025 – 2027",
      title: "CFGS Administración de Sistemas Informáticos en Red (ASIX)",
      org: "Institut Tecnològic de Barcelona · perfil Ciberseguridad",
    },
    {
      type: "mkt",
      period: "[EDITAR años]",
      title: "CFGS Marketing y Publicidad",
      org: "[EDITAR centro]",
    },
  ],

  /* ───────────── ÁREAS TRABAJADAS EN EL CURSO ─────────────
     category: Sistemas | Redes | Seguridad | Cloud | Automatización
     (si añades una categoría nueva, el filtro la crea solo)
     link (opcional): ruta a un PDF o repo que lo demuestre, ej. "docs/ssh.pdf"
     ⚠️ BORRADOR: deja solo lo que de verdad has tocado.                       */
  areas: [
    {
      category: "Sistemas",
      title: "Administración Linux",
      text: "Usuarios, permisos, servicios, paquetes y tareas programadas.",
      tools: ["Debian/Ubuntu", "systemd", "cron"],
    },
    {
      category: "Sistemas",
      title: "Windows Server y Active Directory",
      text: "Dominio, usuarios, grupos y directivas (GPO).",
      tools: ["Windows Server", "AD DS", "GPO"],
    },
    {
      category: "Redes",
      title: "Direccionamiento y enrutamiento",
      text: "Subredes, rutas, NAT y configuración de equipos de red.",
      tools: ["IPv4", "VLAN", "NAT", "Routing"],
    },
    {
      category: "Seguridad",
      title: "Acceso remoto seguro",
      text: "SSH con autenticación por clave y endurecimiento del servicio.",
      tools: ["OpenSSH", "Claves públicas"],
    },
    {
      category: "Seguridad",
      title: "Bastionado y hardening",
      text: "Reducir superficie de ataque: servicios mínimos, privilegios y cortafuegos.",
      tools: ["Firewall", "Mínimo privilegio"],
    },
    {
      category: "Seguridad",
      title: "Logs, monitorización e incidencias",
      text: "Revisión de registros, detección de anomalías y gestión de incidencias.",
      tools: ["Logs", "Monitorización", "Tickets"],
    },
    {
      category: "Seguridad",
      title: "Análisis de vulnerabilidades",
      text: "Reconocimiento y escaneo en entornos de laboratorio controlados.",
      tools: ["Nmap", "Kali Linux"],
    },
    {
      category: "Cloud",
      title: "Instancias en la nube",
      text: "Despliegue de máquinas virtuales y administración remota.",
      tools: ["AWS EC2"],
    },
    {
      category: "Automatización",
      title: "Scripting",
      text: "Automatizar tareas repetitivas y reducir el error humano.",
      tools: ["Bash", "PowerShell"],
    },
  ],

  /* ───────────── PROYECTOS ─────────────
     type: "it" | "mkt" | "mix"      status: texto libre ("Terminado", "En curso"...)
     links: [{ label, url }]  (pon solo enlaces reales)                          */
  projects: [
    {
      type: "mix",
      status: "En curso",
      title: "Automatización del trabajo de soporte",
      text: "Proyecto para reducir tareas repetitivas del día a día del soporte (seguimiento de tickets y avisos) con scripts y hojas de cálculo.",
      stack: ["Bash", "Google Sheets", "Linux"],
      links: [],
    },
    {
      type: "mix",
      status: "Terminado",
      title: "Este portfolio",
      text: "Web estática sin frameworks, con contenido editable desde un único archivo y publicada con GitHub Pages.",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [{ label: "Código", url: "https://github.com/[EDITAR-usuario]/[EDITAR-repo]" }],
    },
    {
      type: "it",
      status: "[EDITAR]",
      title: "[EDITAR: laboratorio o práctica de ciberseguridad]",
      text: "[EDITAR: qué montaste, qué problema resolvía y qué aprendiste. Dos o tres frases.]",
      stack: ["[EDITAR]"],
      links: [],
    },
  ],

  /* ───────────── CONTACTO ───────────── */
  contact: {
    title: "Hablemos.",
    text: "Si buscas a alguien que entienda tanto la marca como los sistemas que la sostienen, escríbeme.",
  },
};
