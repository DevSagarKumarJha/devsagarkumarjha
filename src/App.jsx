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
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        {/* Profile Section */}
        {/* Information */}
        {/* Projects */}
        {/* Contact */}
      </div>
    </BrowserRouter>
  );
}

export default App
