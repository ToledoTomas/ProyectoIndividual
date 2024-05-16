import './App.css';
import Home from './sections/Home/Home';
import Landing from './sections/Landing/Landing';
import { Routes, Route} from 'react-router-dom';
import Detail from './sections/Detail/Detail.jsx';


function App() {

  return (
    <div className="App">  
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/games/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
