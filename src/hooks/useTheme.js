import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(null);

  const toggle = () => {
    setTheme((theme) => {
      if (theme === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        return 'light';
      } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        return 'dark';
      }
    });
  };

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  }, []);

  return { theme, toggle };
}

export { useTheme };
