
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const contactSubmit = document.getElementById('contactSubmit');
const contactEndpoint = 'https://formsubmit.co/ajax/ayushkafle03@gmail.com';

if (contactForm && contactStatus && contactSubmit) {
  const setStatus = (message, isError = false) => {
    contactStatus.textContent = message;
    contactStatus.classList.toggle('error', isError);
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    contactSubmit.disabled = true;
    contactSubmit.textContent = 'Sending...';
    setStatus('Sending your message...');

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('Thanks! Your message is on its way to my inbox.');
        contactForm.reset();
      } else {
        setStatus('Something went wrong. Please try again or email me directly.', true);
      }
    } catch (error) {
      setStatus('Unable to send right now. Please reach out via email instead.', true);
    } finally {
      contactSubmit.disabled = false;
      contactSubmit.textContent = 'Send message';
    }
  });
}
