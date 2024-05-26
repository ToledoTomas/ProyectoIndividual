import './App.css';
import Home from './sections/Home/Home';
import Landing from './sections/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Detail from './sections/Detail/Detail.jsx';
import CreateGames from './sections/CreateGames/CreateGames.jsx';
import About from './sections/About/About.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-games" element={<CreateGames />} />
        <Route path="/videogame/:id" element={<Detail />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
