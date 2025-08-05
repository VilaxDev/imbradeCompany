"use client";
import type React from "react";
import { useState, useEffect } from "react";
import "./App.css";

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
    webDev: string;
    mobileApps: string;
    cloudSolutions: string;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    expertTeam: string;
    expertTeamText: string;
    innovation: string;
    innovationText: string;
    partnership: string;
    partnershipText: string;
    quality: string;
    qualityText: string;
  };
  projects: {
    title: string;
    subtitle: string;
    ecommerce: string;
    ecommerceDesc: string;
    healthcare: string;
    healthcareDesc: string;
    analytics: string;
    analyticsDesc: string;
    banking: string;
    bankingDesc: string;
    learning: string;
    learningDesc: string;
    inventory: string;
    inventoryDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    selectService: string;
    webDevelopment: string;
    mobileAppDevelopment: string;
    cloudSolutions: string;
    consulting: string;
    other: string;
    projectPlaceholder: string;
    sendMessage: string;
    email: string;
    phone: string;
    location: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [language, setLanguage] = useState<"en" | "es">("es");

  const translations: Record<"en" | "es", Translations> = {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        title: "Innovative Software Solutions for Your Business",
        subtitle:
          "At Imbrade Company, we craft cutting-edge software solutions that drive growth, efficiency, and digital transformation for businesses of all sizes.",
        viewWork: "View Our Work",
        getInTouch: "Get In Touch",
        webDev: "Web Development",
        mobileApps: "Mobile Apps",
        cloudSolutions: "Cloud Solutions",
      },
      about: {
        title: "About Imbrade Company",
        subtitle:
          "Empowering businesses through innovative technology solutions",
        mission: "Our Mission",
        missionText:
          "We are dedicated to delivering exceptional software development services that transform ideas into powerful digital solutions. Our team combines technical expertise with creative innovation to build applications that exceed expectations.",
        vision: "Our Vision",
        visionText:
          "To be the leading software development partner for businesses seeking to leverage technology for growth, efficiency, and competitive advantage in the digital landscape.",
        expertTeam: "Expert Team",
        expertTeamText:
          "Skilled developers with years of experience in cutting-edge technologies.",
        innovation: "Innovation",
        innovationText:
          "We stay ahead of technology trends to deliver modern solutions.",
        partnership: "Partnership",
        partnershipText:
          "We work closely with clients to understand and exceed their goals.",
        quality: "Quality",
        qualityText:
          "Rigorous testing and quality assurance in every project we deliver.",
      },
      projects: {
        title: "Our Projects",
        subtitle: "Showcasing our expertise through successful implementations",
        ecommerce: "E-Commerce Platform",
        ecommerceDesc:
          "A comprehensive online marketplace with advanced features including payment integration, inventory management, and analytics dashboard.",
        healthcare: "Healthcare Management System",
        healthcareDesc:
          "A secure patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
        analytics: "Business Analytics Dashboard",
        analyticsDesc:
          "Real-time data visualization platform with interactive charts, reporting tools, and predictive analytics capabilities.",
        banking: "Mobile Banking App",
        bankingDesc:
          "Secure mobile banking application with biometric authentication, transaction history, and financial planning tools.",
        learning: "Learning Management System",
        learningDesc:
          "Comprehensive educational platform with course management, video streaming, assessments, and progress tracking.",
        inventory: "Inventory Management System",
        inventoryDesc:
          "Advanced inventory tracking system with barcode scanning, automated reordering, and supply chain optimization.",
      },
      contact: {
        title: "Get In Touch",
        subtitle:
          "Ready to start your next project? Let's discuss how we can help you achieve your goals.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        phonePlaceholder: "Phone Number",
        selectService: "Select Service",
        webDevelopment: "Web Development",
        mobileAppDevelopment: "Mobile App Development",
        cloudSolutions: "Cloud Solutions",
        consulting: "Consulting",
        other: "Other",
        projectPlaceholder: "Tell us about your project...",
        sendMessage: "Send Message",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      footer: {
        tagline: "Innovative software solutions for your business growth.",
        copyright: "© 2025 Imbrade Company. All rights reserved.",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        title: "Soluciones de Software Innovadoras para tu Negocio",
        subtitle:
          "En Imbrade Company, creamos soluciones de software de vanguardia que impulsan el crecimiento, la eficiencia y la transformación digital para empresas de todos los tamaños.",
        viewWork: "Ver Nuestro Trabajo",
        getInTouch: "Contáctanos",
        webDev: "Desarrollo Web",
        mobileApps: "Aplicaciones Móviles",
        cloudSolutions: "Soluciones en la Nube",
      },
      about: {
        title: "Acerca de Imbrade Company",
        subtitle:
          "Empoderando empresas a través de soluciones tecnológicas innovadoras",
        mission: "Nuestra Misión",
        missionText:
          "Nos dedicamos a brindar servicios excepcionales de desarrollo de software que transforman ideas en poderosas soluciones digitales. Nuestro equipo combina experiencia técnica con innovación creativa para construir aplicaciones que superan las expectativas.",
        vision: "Nuestra Visión",
        visionText:
          "Ser el socio líder en desarrollo de software para empresas que buscan aprovechar la tecnología para el crecimiento, la eficiencia y la ventaja competitiva en el panorama digital.",
        expertTeam: "Equipo Experto",
        expertTeamText:
          "Desarrolladores capacitados con años de experiencia en tecnologías de vanguardia.",
        innovation: "Innovación",
        innovationText:
          "Nos mantenemos a la vanguardia de las tendencias tecnológicas para ofrecer soluciones modernas.",
        partnership: "Asociación",
        partnershipText:
          "Trabajamos estrechamente con los clientes para entender y superar sus objetivos.",
        quality: "Calidad",
        qualityText:
          "Pruebas rigurosas y aseguramiento de calidad en cada proyecto que entregamos.",
      },
      projects: {
        title: "Nuestros Proyectos",
        subtitle:
          "Mostrando nuestra experiencia a través de implementaciones exitosas",
        ecommerce: "Plataforma de Comercio Electrónico",
        ecommerceDesc:
          "Un mercado en línea integral con características avanzadas incluyendo integración de pagos, gestión de inventario y panel de análisis.",
        healthcare: "Sistema de Gestión de Salud",
        healthcareDesc:
          "Un sistema seguro de gestión de pacientes con programación de citas, registros médicos y capacidades de telemedicina.",
        analytics: "Panel de Análisis Empresarial",
        analyticsDesc:
          "Plataforma de visualización de datos en tiempo real con gráficos interactivos, herramientas de reportes y capacidades de análisis predictivo.",
        banking: "Aplicación de Banca Móvil",
        bankingDesc:
          "Aplicación bancaria móvil segura con autenticación biométrica, historial de transacciones y herramientas de planificación financiera.",
        learning: "Sistema de Gestión de Aprendizaje",
        learningDesc:
          "Plataforma educativa integral con gestión de cursos, transmisión de video, evaluaciones y seguimiento de progreso.",
        inventory: "Sistema de Gestión de Inventario",
        inventoryDesc:
          "Sistema avanzado de seguimiento de inventario con escaneo de códigos de barras, reordenamiento automatizado y optimización de cadena de suministro.",
      },
      contact: {
        title: "Ponte en Contacto",
        subtitle:
          "¿Listo para comenzar tu próximo proyecto? Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.",
        namePlaceholder: "Tu Nombre",
        emailPlaceholder: "Tu Email",
        phonePlaceholder: "Número de Teléfono",
        selectService: "Seleccionar Servicio",
        webDevelopment: "Desarrollo Web",
        mobileAppDevelopment: "Desarrollo de Aplicaciones Móviles",
        cloudSolutions: "Soluciones en la Nube",
        consulting: "Consultoría",
        other: "Otro",
        projectPlaceholder: "Cuéntanos sobre tu proyecto...",
        sendMessage: "Enviar Mensaje",
        email: "Email",
        phone: "Teléfono",
        location: "Ubicación",
      },
      footer: {
        tagline:
          "Soluciones de software innovadoras para el crecimiento de tu negocio.",
        copyright: "© 2025 Imbrade Company. Todos los derechos reservados.",
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    // Add Bootstrap CSS CDN
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    bootstrapCSS.integrity =
      "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
    bootstrapCSS.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCSS);

    // Add Bootstrap JS CDN
    const bootstrapJS = document.createElement("script");
    bootstrapJS.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    bootstrapJS.integrity =
      "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
    bootstrapJS.crossOrigin = "anonymous";
    document.body.appendChild(bootstrapJS);

    // Add Font Awesome CDN
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fontAwesome.integrity =
      "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==";
    fontAwesome.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesome);

    // Add Google Fonts
    const googleFonts = document.createElement("link");
    googleFonts.rel = "stylesheet";
    googleFonts.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(googleFonts);

    // Handle scroll events for active section
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup dynamically added elements
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(fontAwesome);
      document.head.removeChild(googleFonts);
      document.body.removeChild(bootstrapJS);
    };
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const name =
      (
        form.querySelector(
          'input[placeholder="' + t.contact.namePlaceholder + '"]'
        ) as HTMLInputElement
      )?.value || "";
    const email =
      (
        form.querySelector(
          'input[placeholder="' + t.contact.emailPlaceholder + '"]'
        ) as HTMLInputElement
      )?.value || "";
    const phone =
      (
        form.querySelector(
          'input[placeholder="' + t.contact.phonePlaceholder + '"]'
        ) as HTMLInputElement
      )?.value || "";
    const service =
      (form.querySelector("select") as HTMLSelectElement)?.value || "";
    const message =
      (form.querySelector("textarea") as HTMLTextAreaElement)?.value || "";

    const text =
      `${
        language === "en"
          ? "New contact from website:"
          : "Nuevo contacto desde la web:"
      }\n` +
      `${t.contact.namePlaceholder}: ${name}\n` +
      `${t.contact.emailPlaceholder}: ${email}\n` +
      `${t.contact.phonePlaceholder}: ${phone}\n` +
      `${t.contact.selectService}: ${service}\n` +
      `${t.contact.projectPlaceholder}\n${message}`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "51927564707"; // WhatsApp format: country code + number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="imbrade-website">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <div className="container">
          <a
            className="navbar-brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img
              src="/images/logo-remove.png"
              alt="Imbrade Company"
              className="logo"
            />
          </a>

          <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
            <a
              className={`nav-link px-3 ${
                activeSection === "home" ? "active" : ""
              }`}
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              {t.nav.home}
            </a>
            <a
              className={`nav-link px-3 ${
                activeSection === "about" ? "active" : ""
              }`}
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              {t.nav.about}
            </a>
            <a
              className={`nav-link px-3 ${
                activeSection === "projects" ? "active" : ""
              }`}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              {t.nav.projects}
            </a>
            <a
              className={`nav-link px-3 ${
                activeSection === "contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              {t.nav.contact}
            </a>
            <button
              className="btn btn-outline-secondary btn-sm ms-3 language-toggle"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
            >
              {language === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => scrollToSection("projects")}
                >
                  {t.hero.viewWork}
                </button>
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  {t.hero.getInTouch}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="floating-card">
                  <i className="fas fa-code"></i>
                  <h5>{t.hero.webDev}</h5>
                </div>
                <div className="floating-card">
                  <i className="fas fa-mobile-alt"></i>
                  <h5>{t.hero.mobileApps}</h5>
                </div>
                <div className="floating-card">
                  <i className="fas fa-cloud"></i>
                  <h5>{t.hero.cloudSolutions}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">{t.about.title}</h2>
              <p className="section-subtitle">{t.about.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="about-content">
                <h3>{t.about.mission}</h3>
                <p>{t.about.missionText}</p>
                <h3>{t.about.vision}</h3>
                <p>{t.about.visionText}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-users"></i>
                    <h4>{t.about.expertTeam}</h4>
                    <p>{t.about.expertTeamText}</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-rocket"></i>
                    <h4>{t.about.innovation}</h4>
                    <p>{t.about.innovationText}</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-handshake"></i>
                    <h4>{t.about.partnership}</h4>
                    <p>{t.about.partnershipText}</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-shield-alt"></i>
                    <h4>{t.about.quality}</h4>
                    <p>{t.about.qualityText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">{t.projects.title}</h2>
              <p className="section-subtitle">{t.projects.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.ecommerce}</h4>
                  <p>{t.projects.ecommerceDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.healthcare}</h4>
                  <p>{t.projects.healthcareDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.analytics}</h4>
                  <p>{t.projects.analyticsDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.banking}</h4>
                  <p>{t.projects.bankingDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.learning}</h4>
                  <p>{t.projects.learningDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">Redis</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-warehouse"></i>
                </div>
                <div className="project-content">
                  <h4>{t.projects.inventory}</h4>
                  <p>{t.projects.inventoryDesc}</p>
                  <div className="project-tech">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Django</span>
                    <span className="tech-tag">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-subtitle">{t.contact.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t.contact.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t.contact.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <select className="form-control">
                      <option>{t.contact.selectService}</option>
                      <option>{t.contact.webDevelopment}</option>
                      <option>{t.contact.mobileAppDevelopment}</option>
                      <option>{t.contact.cloudSolutions}</option>
                      <option>{t.contact.consulting}</option>
                      <option>{t.contact.other}</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder={t.contact.projectPlaceholder}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    {t.contact.sendMessage}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-envelope"></i>
                <h5>{t.contact.email}</h5>
                <p>imbradecompany@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-phone"></i>
                <h5>{t.contact.phone}</h5>
                <p>+51 927-564-707</p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-map-marker-alt"></i>
                <h5>{t.contact.location}</h5>
                <p>Huancayo - Junín - Perú</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/images/logo.png"
                alt="Imbrade Company"
                className="logo-footer"
              />
              <p className="mt-2 mb-0">{t.footer.tagline}</p>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <p className="mt-2 mb-0">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
