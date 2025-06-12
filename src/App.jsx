import './App.css'
import { Navbar } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages';
function App() {


  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <Navbar />
        <main className='max-w-7xl mx-auto py-4 px-2'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App
