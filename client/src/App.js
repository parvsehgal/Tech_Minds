import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Assistent from './pages/Assistent';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/assistent' element={<Assistent></Assistent>}></Route>
        <Route path='/assistent' element={<Assistent></Assistent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
