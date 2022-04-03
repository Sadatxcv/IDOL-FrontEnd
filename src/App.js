import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Pages/Home/Home';
import LoginAndSignup from './Component/Pages/LoginAndSignup/LoginAndSignup';
import Navbar from "./Component/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/LoginAndSignup" element={<LoginAndSignup />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
