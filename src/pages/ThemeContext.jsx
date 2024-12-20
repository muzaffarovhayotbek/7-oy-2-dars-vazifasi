import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen ${
          theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
