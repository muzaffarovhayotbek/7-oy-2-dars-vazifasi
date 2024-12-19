import React from 'react';
import Header from '../components/Header';

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h2>header</h2>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default MainLayout;
