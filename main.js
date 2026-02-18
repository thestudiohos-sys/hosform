document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to apply theme
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      applyTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});
