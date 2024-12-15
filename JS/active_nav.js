window.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('index.html')) {
      document.body.classList.add('home');
    }
  });
