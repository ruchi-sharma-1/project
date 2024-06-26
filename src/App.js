import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>

        {/* <Shop /> */}

      </BrowserRouter>
    </>
  );
}

export default App;
