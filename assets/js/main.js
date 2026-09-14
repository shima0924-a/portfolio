/* ==================================================
   Mobile Menu
================================================== */

const menuButton = document.querySelector('.menu-button');
const globalNav = document.querySelector('.global-nav');

if (menuButton && globalNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');

    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);

    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'メニューを閉じる' : 'メニューを開く'
    );
  });

  const navLinks = globalNav.querySelectorAll('a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('is-open');
      menuButton.classList.remove('is-open');

      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'メニューを開く');
    });
  });
}


/* ==================================================
   Utility
================================================== */

const observeOnce = (
  elements,
  {
    className = 'is-visible',
    threshold = 0.2,
    delay = 0
  } = {}
) => {
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const index = [...elements].indexOf(element);

        setTimeout(() => {
          element.classList.add(className);
        }, index * delay);

        observer.unobserve(element);
      });
    },
    {
      threshold
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};


/* ==================================================
   Profile
================================================== */

const profileName = document.querySelector('.about-profile-name');
const profileRows = document.querySelectorAll('.profile-row');
const profileText = document.querySelector('.about-profile-text');

if (profileName) {
  const profileNameObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.3
    }
  );

  profileNameObserver.observe(profileName);
}

observeOnce(profileRows, {
  threshold: 0.25,
  delay: 90
});

if (profileText) {
  const profileTextObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, 250);

      observer.unobserve(entry.target);
    },
    {
      threshold: 0.25
    }
  );

  profileTextObserver.observe(profileText);
}


/* ==================================================
   Career
================================================== */

const careerTimeline = document.querySelector('.career-timeline');
const careerItems = document.querySelectorAll('.career-item');

if (careerTimeline) {
  const timelineObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      careerTimeline.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.1
    }
  );

  timelineObserver.observe(careerTimeline);
}

observeOnce(careerItems, {
  threshold: 0.2,
  delay: 80
});


/* ==================================================
   Work Style
================================================== */

const valueStories = document.querySelectorAll('.value-story');

observeOnce(valueStories, {
  threshold: 0.2,
  delay: 90
});


/* ==================================================
   Interests
================================================== */

const interestsVisual = document.querySelector('.interests-visual');
const interestNotes = document.querySelectorAll('.interest-note');

if (interestsVisual) {
  const interestsVisualObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.2
    }
  );

  interestsVisualObserver.observe(interestsVisual);
}

observeOnce(interestNotes, {
  threshold: 0.2,
  delay: 100
});


/* ==================================================
   Connection
================================================== */

const connectionCard = document.querySelector('.connection-card');

if (connectionCard) {
  const connectionObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.2
    }
  );

  connectionObserver.observe(connectionCard);
}


/* ==================================================
   Reduce Motion
================================================== */

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

if (reduceMotion.matches) {
  document
    .querySelectorAll(
      `
      .about-profile-name,
      .profile-row,
      .about-profile-text,
      .career-timeline,
      .career-item,
      .value-story,
      .interests-visual,
      .interest-note,
      .connection-card
      `
    )
    .forEach((element) => {
      element.classList.add('is-visible');
    });
}

/* ==================================================
   HOME - Hero
================================================== */

const heroLabel = document.querySelector('.hero-label');
const heroTitle = document.querySelector('.hero-title');
const heroProfile = document.querySelector('.hero-profile');
const heroDescription = document.querySelector('.hero-description');
const heroActions = document.querySelector('.hero-actions');
const heroVisual = document.querySelector('.hero-visual');

const heroElements = [
  heroLabel,
  heroTitle,
  heroProfile,
  heroDescription,
  heroActions,
  heroVisual
].filter(Boolean);

if (heroElements.length) {
  window.addEventListener('load', () => {
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('is-visible');
      }, index * 120);
    });
  });
}


/* ==================================================
   HOME - About
================================================== */

const aboutHomeMain = document.querySelector('.about-home-main');
const aboutHomeInterests = document.querySelector('.about-home-interests');

observeOnce(
  [aboutHomeMain, aboutHomeInterests].filter(Boolean),
  {
    threshold: 0.2,
    delay: 150
  }
);


/* ==================================================
   HOME - Works
================================================== */

const homeWorkItems = document.querySelectorAll('.home-work-item');

observeOnce(homeWorkItems, {
  threshold: 0.2,
  delay: 120
});


/* ==================================================
   HOME - Skills
================================================== */

const skillsHomeMain = document.querySelector('.skills-home-main');
const skillSummaries = document.querySelectorAll('.skill-summary');

if (skillsHomeMain) {
  const skillsMainObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.25
    }
  );

  skillsMainObserver.observe(skillsHomeMain);
}

observeOnce(skillSummaries, {
  threshold: 0.2,
  delay: 90
});


/* ==================================================
   HOME - Contact
================================================== */

const contactHome = document.querySelector('.contact-home');

if (contactHome) {
  const contactHomeObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.2
    }
  );

  contactHomeObserver.observe(contactHome);
}

/* WORKS PAGE
   Add to assets/js/main.js after observeOnce() is defined. */

const worksHero = document.querySelector('.works-page-hero');
const worksPageCards = document.querySelectorAll('.works-page-card');
const developmentProcess = document.querySelector('.development-process');
const processCards = document.querySelectorAll('.process-card');
const githubCard = document.querySelector('.github-card');

if (worksHero) {
  requestAnimationFrame(() => {
    worksHero.classList.add('is-visible');
  });
}

observeOnce(worksPageCards, { threshold: 0.2, delay: 120 });

if (developmentProcess) {
  const processObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    developmentProcess.classList.add('is-visible');
    observer.unobserve(entry.target);
  }, { threshold: 0.2 });
  processObserver.observe(developmentProcess);
}

observeOnce(processCards, { threshold: 0.2, delay: 120 });

if (githubCard) {
  const githubObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }, { threshold: 0.2 });
  githubObserver.observe(githubCard);
}

/* ==================================================
   SKILLS PAGE
   Add this to assets/js/main.js AFTER observeOnce() is defined.
================================================== */

const skillsPageHero = document.querySelector('.skills-page-hero');
const skillsCoreMap = document.querySelector('.skills-core-map');
const skillsCoreBranches = document.querySelectorAll('.skills-core-branch');
const skillsCapabilityItems = document.querySelectorAll('.skills-capability-item');
const skillsStackGroups = document.querySelectorAll('.skills-stack-group');
const skillsExperienceItems = document.querySelectorAll('.skills-experience-map-item');
const skillsSideCards = document.querySelectorAll('.skills-side-card');
const skillsContactCard = document.querySelector('.skills-contact-card');

if (skillsPageHero) {
  requestAnimationFrame(() => {
    skillsPageHero.classList.add('is-visible');
  });
}

if (skillsCoreMap) {
  const skillsCoreObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      skillsCoreMap.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.2
    }
  );

  skillsCoreObserver.observe(skillsCoreMap);
}

observeOnce(skillsCoreBranches, {
  threshold: 0.2,
  delay: 90
});

observeOnce(skillsCapabilityItems, {
  threshold: 0.2,
  delay: 90
});

observeOnce(skillsStackGroups, {
  threshold: 0.16,
  delay: 80
});

observeOnce(skillsExperienceItems, {
  threshold: 0.2,
  delay: 90
});

observeOnce(skillsSideCards, {
  threshold: 0.2,
  delay: 120
});

if (skillsContactCard) {
  const skillsContactObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    },
    {
      threshold: 0.2
    }
  );

  skillsContactObserver.observe(skillsContactCard);
}

/* ==================================================
   CONTACT EDITORIAL PAGE
================================================== */

(() => {
  /**
   * 要素が画面内に入ったら一度だけ表示する
   */
  const observeContactItems = (
    elements,
    {
      threshold = 0.2,
      delay = 0
    } = {}
  ) => {
    const items = Array.from(elements);

    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = items.indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, Math.max(index, 0) * delay);

          observer.unobserve(entry.target);
        });
      },
      {
        threshold
      }
    );

    items.forEach((item) => {
      observer.observe(item);
    });
  };


  /* -----------------------------------------------
     HERO
     イラストをページ表示後にふわっと表示
  ------------------------------------------------ */

  const heroVisual =
    document.querySelector('.contact-editorial-visual');

  if (heroVisual) {
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroVisual.classList.add('is-visible');
      }, 180);
    });
  }


  /* -----------------------------------------------
     CONSULTATION
     相談内容を順番に表示
  ------------------------------------------------ */

  const consultItems =
    document.querySelectorAll('.contact-consult-item');

  observeContactItems(consultItems, {
    threshold: 0.18,
    delay: 90
  });


  /* -----------------------------------------------
     WORK STYLE
     OSAKA → REMOTE → NATIONWIDE
  ------------------------------------------------ */

  const workRoute =
    document.querySelector('.contact-workstyle-route');

  if (workRoute) {
    const workRouteObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;

        workRoute.classList.add('is-visible');

        const workItems =
          workRoute.querySelectorAll('article');

        workItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('is-visible');
          }, index * 140);
        });

        observer.unobserve(entry.target);
      },
      {
        threshold: 0.2
      }
    );

    workRouteObserver.observe(workRoute);
  }


  /* -----------------------------------------------
     MESSAGE
     最後のメッセージをふわっと表示
  ------------------------------------------------ */

  const message =
    document.querySelectorAll(
      '.contact-message-editorial'
    );

  observeContactItems(message, {
    threshold: 0.2
  });


  /* -----------------------------------------------
     アニメーションを減らす設定への対応
  ------------------------------------------------ */

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

  if (reduceMotion.matches) {
    document
      .querySelectorAll(
        `
        .contact-editorial-visual,
        .contact-consult-item,
        .contact-workstyle-route article,
        .contact-message-editorial
        `
      )
      .forEach((item) => {
        item.classList.add('is-visible');
      });

    if (workRoute) {
      workRoute.classList.add('is-visible');
    }
  }
})();

/* ==================================================
   CLICK STAR EFFECT
================================================== */

document.addEventListener('click', (event) => {
  const target = event.target.closest(
    'a, button, .btn, .button, .contact-direct-link'
  );

  if (!target) return;

  const stars = ['★', '☆', '✦', '✧'];

  for (let i = 0; i < 7; i++) {
    const star = document.createElement('span');

    star.className = 'click-star';
    star.textContent =
      stars[Math.floor(Math.random() * stars.length)];

    star.style.left = `${event.clientX}px`;
    star.style.top = `${event.clientY}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = 28 + Math.random() * 38;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    star.style.setProperty('--x', `${x}px`);
    star.style.setProperty('--y', `${y}px`);
    star.style.setProperty(
      '--rotate',
      `${Math.random() * 180 - 90}deg`
    );

    star.style.fontSize =
      `${10 + Math.random() * 8}px`;

    document.body.appendChild(star);

    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
});