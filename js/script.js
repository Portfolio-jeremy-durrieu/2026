document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    fr: {
      htmlLang: 'fr',
      title: 'Jérémy Durrieu | Portfolio',
      description:
        'Portfolio professionnel de Jérémy Durrieu. Conseiller BtoB spécialisé en prospection, négociation et gestion de portefeuille.',
      ogDescription:
        'Portfolio professionnel de Jérémy Durrieu, conseiller BtoB.',
      navToggleLabel: 'Ouvrir le menu',
      navLinks: ['Accueil', 'Parcours', 'CV', 'Contact'],
      navCta: 'Contact',
      heroEyebrow: 'Portfolio',
      heroRole: 'Conseiller BtoB',
      heroIntro:
        "Spécialisé en prospection, négociation et fidélisation client. J'accompagne les professionnels en leur proposant des solutions adaptées à leurs besoins.",
      heroContactBtn: 'Me contacter',
      heroCvBtn: 'Voir mon CV',
      socialTitles: ['LinkedIn', 'WhatsApp', 'Email'],
      journeyEyebrow: 'Parcours',
      journeyTitle: 'Mes expériences professionnelles',
      journeyCard1Title: 'Gestion de portefeuille',
      journeyCard1Meta: 'Suivi, fidélisation et développement relationnel',
      journeyCard2Title: 'Prospection commerciale',
      journeyCard2Stat: 'Développement & acquisition',
      journeyCard2Meta: 'Identification et conversion de nouvelles opportunités',
      journeyCard3Title: "Négociation & appels d'offres",
      journeyCard3Stat: 'Fidélisation client',
      journeyCard3Meta: "Réponses aux appels d'offres et maintien de partenariats",
      aboutTitle: 'Qui suis-je',
      aboutText:
        "Je suis <strong>Jérémy Durrieu</strong>, conseiller BtoB spécialisé dans la prospection, la négociation et la gestion de portefeuille. Mon approche est orientée client, avec une attention particulière à l'écoute, à la compréhension des besoins et à la création de valeur durable pour les entreprises.",
      locationLabel: 'Localisation',
      specialitiesLabel: 'Spécialités',
      specialities: 'Commercial BtoB • Prospection • Négociation • Fidélisation',
      cvEyebrow: 'CV',
      cvTitle: 'Curriculum vitae',
      cvLabel: 'Document à télécharger ou consulter',
      cvText:
        "Retrouvez l'ensemble de mes expériences, compétences et certifications dans mon CV détaillé.",
      cvOpenBtn: 'Consulter le CV',
      cvDownloadBtn: 'Télécharger',
      contactEyebrow: 'Contact',
      contactTitle: 'Une opportunité ou un projet ? Échangeons.',
      contactLabels: ['LinkedIn', 'Email', 'WhatsApp'],
      contactTitles: ['Visitez LinkedIn', 'Envoyer un email', 'Envoyer WhatsApp'],
      footerPortfolio: 'Portfolio',
      langToggle: 'EN',
      langAria: 'Switch to English',
    },
    en: {
      htmlLang: 'en',
      title: 'Jérémy Durrieu | Portfolio',
      description:
        'Professional portfolio of Jérémy Durrieu. BtoB advisor specialized in prospecting, negotiation, and account management.',
      ogDescription: 'Professional portfolio of Jérémy Durrieu, BtoB advisor.',
      navToggleLabel: 'Open menu',
      navLinks: ['Home', 'Journey', 'Resume', 'Contact'],
      navCta: 'Contact',
      heroEyebrow: 'Portfolio',
      heroRole: 'BtoB Advisor',
      heroIntro:
        'Specialized in prospecting, negotiation, and customer retention. I support professionals by offering solutions tailored to their needs.',
      heroContactBtn: 'Contact me',
      heroCvBtn: 'View my resume',
      socialTitles: ['LinkedIn', 'WhatsApp', 'Email'],
      journeyEyebrow: 'Journey',
      journeyTitle: 'My professional experience',
      journeyCard1Title: 'Account management',
      journeyCard1Meta: 'Follow-up, retention, and relationship growth',
      journeyCard2Title: 'Sales prospecting',
      journeyCard2Stat: 'Growth & acquisition',
      journeyCard2Meta: 'Identifying and converting new opportunities',
      journeyCard3Title: 'Negotiation & tenders',
      journeyCard3Stat: 'Customer retention',
      journeyCard3Meta: 'Tender responses and partnership continuity',
      aboutTitle: 'Who am I',
      aboutText:
        'I am <strong>Jérémy Durrieu</strong>, a BtoB advisor specialized in prospecting, negotiation, and account management. My approach is customer-oriented, with a strong focus on listening, understanding needs, and creating lasting value for companies.',
      locationLabel: 'Location',
      specialitiesLabel: 'Specialties',
      specialities: 'BtoB Sales • Prospecting • Negotiation • Retention',
      cvEyebrow: 'Resume',
      cvTitle: 'Resume',
      cvLabel: 'Document to download or view',
      cvText:
        'Find all my experience, skills, and certifications in my detailed resume.',
      cvOpenBtn: 'Open resume',
      cvDownloadBtn: 'Download',
      contactEyebrow: 'Contact',
      contactTitle: 'An opportunity or a project? Let us talk.',
      contactLabels: ['LinkedIn', 'Email', 'WhatsApp'],
      contactTitles: ['Visit LinkedIn', 'Send an email', 'Send on WhatsApp'],
      footerPortfolio: 'Portfolio',
      langToggle: 'FR',
      langAria: 'Basculer en francais',
    },
  };

  const setNodeText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  };

  const applyLanguage = (lang) => {
    const locale = i18n[lang] || i18n.fr;

    document.documentElement.lang = locale.htmlLang;
    document.documentElement.dataset.lang = lang;
    document.title = locale.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', locale.description);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', locale.ogDescription);
    }

    setNodeText('#hero-eyebrow', locale.heroEyebrow);
    setNodeText('#hero-role', locale.heroRole);
    setNodeText('#hero-intro', locale.heroIntro);
    setNodeText('#hero-contact-btn', locale.heroContactBtn);
    setNodeText('#hero-cv-btn', locale.heroCvBtn);
    setNodeText('#journey-eyebrow', locale.journeyEyebrow);
    setNodeText('#journey-title', locale.journeyTitle);
    setNodeText('#journey-card1-title', locale.journeyCard1Title);
    setNodeText('#journey-card1-meta', locale.journeyCard1Meta);
    setNodeText('#journey-card2-title', locale.journeyCard2Title);
    setNodeText('#journey-card2-stat', locale.journeyCard2Stat);
    setNodeText('#journey-card2-meta', locale.journeyCard2Meta);
    setNodeText('#journey-card3-title', locale.journeyCard3Title);
    setNodeText('#journey-card3-stat', locale.journeyCard3Stat);
    setNodeText('#journey-card3-meta', locale.journeyCard3Meta);
    setNodeText('#about-title', locale.aboutTitle);

    const aboutText = document.querySelector('#about-text');
    if (aboutText) {
      aboutText.innerHTML = locale.aboutText;
    }

    setNodeText('#meta-location-label', locale.locationLabel);
    setNodeText('#meta-specialities-label', locale.specialitiesLabel);
    setNodeText('#meta-specialities', locale.specialities);
    setNodeText('#cv-eyebrow', locale.cvEyebrow);
    setNodeText('#cv-title', locale.cvTitle);
    setNodeText('#cv-label', locale.cvLabel);
    setNodeText('#cv-text', locale.cvText);
    setNodeText('#cv-open-btn', locale.cvOpenBtn);
    setNodeText('#cv-download-btn', locale.cvDownloadBtn);
    setNodeText('#contact-eyebrow', locale.contactEyebrow);
    setNodeText('#contact-title', locale.contactTitle);
    setNodeText('#contact-linkedin-label', locale.contactLabels[0]);
    setNodeText('#contact-email-label', locale.contactLabels[1]);
    setNodeText('#contact-whatsapp-label', locale.contactLabels[2]);
    setNodeText('#footer-portfolio', locale.footerPortfolio);

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
      navToggle.setAttribute('aria-label', locale.navToggleLabel);
    }

    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
      navCta.textContent = locale.navCta;
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      if (locale.navLinks[index]) {
        link.textContent = locale.navLinks[index];
      }
    });

    const socialLinks = document.querySelectorAll('.social-list a');
    socialLinks.forEach((link, index) => {
      if (locale.socialTitles[index]) {
        link.setAttribute('title', locale.socialTitles[index]);
        const labelNode = link.childNodes[link.childNodes.length - 1];
        if (labelNode && labelNode.nodeType === Node.TEXT_NODE) {
          labelNode.textContent = ` ${locale.socialTitles[index]}`;
        }
      }
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
      if (locale.contactTitles[index]) {
        item.setAttribute('title', locale.contactTitles[index]);
      }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.textContent = locale.langToggle;
      langToggle.setAttribute('aria-label', locale.langAria);
    }
  };

  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0.2, 0.4, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const langToggle = document.getElementById('lang-toggle');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = document.documentElement.dataset.lang || 'fr';
      const nextLang = currentLang === 'fr' ? 'en' : 'fr';
      applyLanguage(nextLang);
    });
  }

  applyLanguage('fr');

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const copyEmailButton = document.querySelector('.copy-email');
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
      const email = '[EMAIL]';

      try {
        await navigator.clipboard.writeText(email.replace(/\[|\]/g, ''));
        const originalText = copyEmailButton.textContent;
        copyEmailButton.textContent = 'Email copié';
        setTimeout(() => {
          copyEmailButton.textContent = originalText;
        }, 1600);
      } catch (error) {
        copyEmailButton.textContent = 'Copie non disponible';
        setTimeout(() => {
          copyEmailButton.textContent = 'Copier l’email';
        }, 1600);
      }
    });
  }
});
