// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './styles/main.scss';

function App() {
  return (
    <div className="app-container">
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
