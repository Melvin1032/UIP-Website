window.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('index.html')) {
      document.body.classList.add('home');
    }
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('about.html')) {
      document.body.classList.add('about');
    }
  });