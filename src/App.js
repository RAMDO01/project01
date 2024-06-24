
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/common/NavBar';
import Volinters from "./pages/Volinters"



function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-white font-inter">

      <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/volentiers' element={<Volinters />} />
      </Routes>


    </div>
  );
}

export default App;
