import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Assistent from './pages/Assistent';
import Classification from './pages/Classification';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/assistent' element={<Assistent></Assistent>}></Route>
        <Route path='/classify' element={<Classification></Classification>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
