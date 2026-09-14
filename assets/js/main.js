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