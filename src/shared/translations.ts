export type Language = 'es' | 'en' | 'pt';

export const translations = {
  es: {
    branding: {
      role: 'Software Developer',
      buildStack: 'Build Stack:'
    },
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      skills: 'Skills',
      contact: 'Contacto',
      return: '[ VOLVER ]'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: '>_ PERFIL_DE_IDENTIDAD...',
      content: '"Desarrollador proactivo con alta capacidad de aprendizaje autónomo y orientación a resultados concretos. Acostumbrado a gestionar proyectos de forma independiente desde la concepción hasta la puesta en producción, con atención al detalle y compromiso con la calidad. Trabajo con comodidad tanto en entornos colaborativos como en modo autodidacta, adaptándome rápidamente a nuevos contextos y equipos. Me caracterizo por una mentalidad resolutiva frente a los problemas, comunicación clara para articular decisiones técnicas, y una fuerte orientación al impacto real del producto."',
      university: 'Actualmente cursando el 3er año de Ingeniería en Computación en la Universidad de Rafaela.'
    },
    skills: {
      title: 'Mis Skills',
      matrix: '>_ MATRIZ_NEURAL'
    },
    experience: {
      title: 'Neural Experience',
      sancor: {
        role: 'Analista de Suscripción y Emisión',
        location: 'Sunchales - Santa Fe',
        achievements: [
          'Procesé y validé un volumen superior a 40 cotizaciones técnicas de pólizas diariamente, asegurando el cumplimiento de los estándares de riesgo de la compañía.',
          'Administré de manera integral el centro emisor, resolviendo con éxito más de 25 casos diarios vía correo electrónico.',
          'Diseñé y ejecuté una matriz de seguimiento en Excel para categorizar patrones de consulta, contribuyendo a una propuesta de automatización.'
        ]
      }
    },
    projects: {
      title: 'System Projects',
      viewLive: '[ VER_EN_VIVO ]',
      sourceCode: '[ CÓDIGO_FUENTE ]',
      waspai: {
        subtitle: 'Terminal de Ingeniería con IA',
        description: 'WaspAI es una plataforma "AI-First" construida sobre Next.js 16, optimizada para flujos de trabajo de ingeniería de software. Utiliza un ecosistema de agentes especializados para tareas de arquitectura, auditoría de seguridad y refactorización, todo bajo una infraestructura blindada.',
        achievements: [
          'Reduce el tiempo de scaffolding y setup en un 60%, optimizando el workflow.',
          'Pipeline CI/CD con GitHub Actions y tests E2E con Playwright.',
          'Disponibilidad del 99.9% gestionando el ciclo de vida completo en Vercel.'
        ]
      },
      aquacontrol: {
        subtitle: 'Sistema IoT de Monitoreo en Tiempo Real',
        description: 'Sistema de monitoreo y control para acuarios (IoT), con medición de temperatura y luz con sensores vía ESP32. Fue creada con la intención de medir y regular el ecosistema de un acuario/pecera para la vida de los peces, siendo también funcional para regular piletas.',
        achievements: [
          'Solución end-to-end con latencia menor a 500ms usando MQTT y WebSockets.',
          'API REST segura con autenticación JWT protegiendo la red de sensores.',
          'Firmware en C++ para ESP32 integrado con broker Mosquitto.'
        ]
      },
      erp: {
        subtitle: 'Sistema de Gestión de Recursos Empresariales',
        description: 'Sistema ERP para gestión de procesos industriales diseñado con Domain-Driven Design (DDD). Modela el ciclo de vida completo de una Orden de Fabricación (OF) a través de 7 dominios de negocio interconectados, con diferentes roles de usuario y con potencial de escalabilidad SaaS.',
        achievements: [
          'Sistema de gestión integral orientado a la escalabilidad operativa.',
          'Arquitectura de base de datos relacional optimizada para alto volumen de registros.',
          'Interfaz administrativa modular bajo principios de Clean Architecture.'
        ]
      }
    },
    contact: {
      title: 'Terminal Connection',
      status: 'Estado: Listo para conectar'
    }
  },
  en: {
    branding: {
      role: 'Software Developer',
      buildStack: 'Build Stack:'
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      about: 'About Me',
      skills: 'Skills',
      contact: 'Contact',
      return: '[ RETURN ]'
    },
    about: {
      title: 'About Me',
      subtitle: '>_ IDENTITY_PROFILE...',
      content: '"Proactive developer with high autonomous learning capacity and concrete results orientation. Accustomed to managing projects independently from conception to production, with attention to detail and commitment to quality. I work comfortably in both collaborative and self-taught environments, adapting quickly to new contexts and teams. I am characterized by a resolutive mindset towards problems, clear communication to articulate technical decisions, and a strong orientation to the real product impact."',
      university: 'Currently in the 3rd year of Computer Engineering at the University of Rafaela.'
    },
    skills: {
      title: 'Core Capabilities',
      matrix: '>_ NEURAL_MATRIX'
    },
    experience: {
      title: 'Neural Experience',
      sancor: {
        role: 'Underwriting and Issuance Analyst',
        location: 'Sunchales - Santa Fe',
        achievements: [
          'Processed and validated over 40 technical policy quotes daily, ensuring compliance with company risk standards.',
          'Comprehensive management of the issuing center, successfully resolving over 25 daily cases via email.',
          'Designed and executed an Excel tracking matrix to categorize query patterns, contributing to an automation proposal.'
        ]
      }
    },
    projects: {
      title: 'System Projects',
      viewLive: '[ VIEW_LIVE ]',
      sourceCode: '[ SOURCE_CODE ]',
      waspai: {
        subtitle: 'AI Engineering Terminal',
        description: 'WaspAI is an "AI-First" platform built on Next.js 16, optimized for software engineering workflows. It uses an ecosystem of specialized agents for architecture tasks, security auditing, and refactoring, all under a hardened infrastructure.',
        achievements: [
          'Reduces scaffolding and setup time by 60%, optimizing workflow.',
          'CI/CD pipeline with GitHub Actions and E2E tests with Playwright.',
          '99.9% availability managing the full lifecycle in Vercel.'
        ]
      },
      aquacontrol: {
        subtitle: 'Real-Time IoT Monitoring System',
        description: 'IoT monitoring and control system for aquariums, featuring temperature and light measurement via ESP32 sensors. Designed to regulate aquarium ecosystems for aquatic life, it is also fully functional for swimming pool regulation.',
        achievements: [
          'End-to-end solution with latency under 500ms using MQTT and WebSockets.',
          'Secure REST API with JWT authentication protecting the sensor network.',
          'C++ firmware for ESP32 integrated with Mosquitto broker.'
        ]
      },
      erp: {
        subtitle: 'Enterprise Resource Planning System',
        description: 'ERP system for industrial process management designed with Domain-Driven Design (DDD). It models the full lifecycle of a Manufacturing Order (MO) through 7 interconnected business domains, with different user roles and SaaS scalability potential.',
        achievements: [
          'Comprehensive management system oriented to operational scalability.',
          'Relational database architecture optimized for high volume.',
          'Modular administrative interface under Clean Architecture principles.'
        ]
      }
    },
    contact: {
      title: 'Terminal Connection',
      status: 'Status: Ready to connect'
    }
  },
  pt: {
    branding: {
      role: 'Software Developer',
      buildStack: 'Build Stack:'
    },
    nav: {
      experience: 'Experiência',
      projects: 'Projetos',
      about: 'Sobre Mim',
      skills: 'Habilidades',
      contact: 'Contato',
      return: '[ RETORNAR ]'
    },
    about: {
      title: 'Sobre Mim',
      subtitle: '>_ PERFIL_DE_IDENTIDADE...',
      content: '"Desenvolvedor proativo con alta capacidade de aprendizado autônomo e orientación a resultados concretos. Acostumado a gerenciar projetos de forma independente, da concepção à produção, con atenção aos detalhes e compromisso com a qualidade. Trabalho confortavelmente tanto em ambientes colaborativos quanto de forma autodidata, adaptando-me rápidamente a nuevos contextos e equipes. Caracterizo-me por uma mentalidade resolutiva diante de problemas, comunicação clara para articular decisões técnicas e forte orientación ao impacto real do producto."',
      university: 'Atualmente cursando o 3º ano de Engenharia de Computação na Universidad de Rafaela.'
    },
    skills: {
      title: 'Competências',
      matrix: '>_ MATRIZ_NEURAL'
    },
    experience: {
      title: 'Experiência Neural',
      sancor: {
        role: 'Analista de Subscrição e Emissão',
        location: 'Sunchales - Santa Fe',
        achievements: [
          'Processei e validei mais de 40 cotações técnicas de apólices diariamente, garantindo conformidade com os padrões de risco.',
          'Gestão integral do centro emissor, resolvendo com sucesso mais de 25 casos diários via e-mail.',
          'Projetei e executei uma matriz de acompanhamento em Excel para categorizar padrões de consulta, contribuindo para automação.'
        ]
      }
    },
    projects: {
      title: 'Projetos de Sistema',
      viewLive: '[ VER_AO_VIVO ]',
      sourceCode: '[ CÓDIGO_FONTE ]',
      waspai: {
        subtitle: 'Terminal de Engenharia com IA',
        description: 'WaspAI é uma plataforma "AI-First" construída sobre Next.js 16, otimizada para fluxos de trabajo de engenharia de software. Utiliza um ecossistema de agentes especializados para tarefas de arquitetura, auditoria de seguridad e refatoração, tudo sob uma infraestrutura blindada.',
        achievements: [
          'Reduz o tempo de scaffolding e configuração em 60%, otimizando o fluxo.',
          'Pipeline CI/CD con GitHub Actions e testes E2E com Playwright.',
          'Disponibilidad de 99,9% gerenciando o ciclo de vida completo na Vercel.'
        ]
      },
      aquacontrol: {
        subtitle: 'Sistema de Monitoramento IoT em Tempo Real',
        description: 'Sistema de monitoramento e controle para aquários (IoT), com medição de temperatura e luz com sensores via ESP32. Foi criada com a intenção de medir e regular o ecossistema de um aquário para a vida dos peixes, sendo também funcional para regular piscinas.',
        achievements: [
          'Solução ponta a ponta com latência inferior a 500ms usando MQTT y WebSockets.',
          'API REST segura con autenticação JWT protegendo a rede de sensores.',
          'Firmware C++ para ESP32 integrado ao broker Mosquitto.'
        ]
      },
      erp: {
        subtitle: 'Sistema de Planejamento de Recursos Empresariais',
        description: 'Sistema ERP para gestão de processos industriais projetado com Domain-Driven Design (DDD). Modela o ciclo de vida completo de uma Ordem de Fabricação (OF) através de 7 domínios de negócios interconectados, com diferentes funções de usuário e potencial de escalabilidade SaaS.',
        achievements: [
          'Sistema de gestão abrangente orientado para a escalabilidade operacional.',
          'Arquitectura de banco de dados relacional optimizada para alto volume.',
          'Interface administrativa modular sob os princípios da Clean Architecture.'
        ]
      }
    },
    contact: {
      title: 'Conexão Terminal',
      status: 'Status: Pronto para conectar'
    }
  }
};
