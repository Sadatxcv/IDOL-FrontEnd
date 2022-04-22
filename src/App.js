import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Pages/Home/Home";
import Sticky from "react-stickynode";
import LoginAndSignup from "./Component/Pages/LoginAndSignup/LoginAndSignup";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LangForm from "./Component/Forms/LangForm";
import MindMapDiscussion from "./Component/Pages/MindMap/MindMapDiscussion";
import ThemanticAnalysis from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysis";
import Discussion from "./Component/Pages/Discussion/Discussion";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sticky enabled={true} top={0} bottomBoundary={12000} innerZ={20}>
          <Navbar />
        </Sticky>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/LoginAndSignup" element={<LoginAndSignup />} />
          <Route exact path="/langform" element={<LangForm />} />
          <Route exact path="/mindMapDiscussion" element={<MindMapDiscussion/>}/>
          <Route exact path="/themanticAnalysis" element={<ThemanticAnalysis/>}/>
          <Route exact path="/discussion" element={<Discussion/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          Contact
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
