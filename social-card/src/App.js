import React, { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Menu'; // Importa el componente Menu

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <div className="app-container">
        {menuVisible && <Menu className="Menu" />} {/* Agrega la clase Menu */}
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
