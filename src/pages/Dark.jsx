import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Dark() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="container">
      <h1 className="text-red-500 dark:text-blue-500 dark:bg-red-300">Dark</h1>
    </div>
  );
}

export default Dark;
