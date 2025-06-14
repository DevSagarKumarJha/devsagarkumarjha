import './App.css'
import { Navbar } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages';
function App() {


  return (
    <BrowserRouter>
      <div className='p-0 m-0'>
        {/* Navbar */}
        <Navbar />
        <main className='max-w-7xl mx-auto sm:py-4 sm:px-2'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App
