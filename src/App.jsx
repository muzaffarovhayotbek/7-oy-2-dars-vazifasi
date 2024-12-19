import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext(null);

import Home from './pages/Home';
import Todo from './pages/Todo';
import Second from './pages/Second';
import Api from './pages/Api';
import Dark from './pages/Dark';
import MainLayout from './layouts/MainLayout';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/Todo"
            element={
              <MainLayout>
                <Todo />
              </MainLayout>
            }
          />
          <Route
            path="/Second"
            element={
              <MainLayout>
                <Second />
              </MainLayout>
            }
          />
          <Route
            path="/Api"
            element={
              <MainLayout>
                <Api />
              </MainLayout>
            }
          />
          <Route
            path="/Dark"
            element={
              <MainLayout>
                <Dark />
              </MainLayout>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
