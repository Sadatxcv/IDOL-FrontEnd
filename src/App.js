import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Pages/Home/Home";
import Sticky from "react-stickynode";
import LoginAndSignup from "./Component/Pages/LoginAndSignup/LoginAndSignup";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LangForm from "./Component/Forms/LangForm";
import MindMapDiscussion from "./Component/Pages/MindMap/MindMapDiscussion";
import CreateMindMap from "./Component/Pages/MindMap/CreateMindMap";

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
          <Route exact path="/MindMapDiscussion" element={<MindMapDiscussion/>}/>
          <Route exact path="/CreateMindMap" element={<CreateMindMap/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
