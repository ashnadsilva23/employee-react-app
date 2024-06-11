import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmploy from './components/AddEmploy';
import ViewData from './components/ViewData';

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddEmploy/>}/>
    
    <Route path='/view' element={<ViewData/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
