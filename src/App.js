import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Pages/Home/Home";
import Sticky from "react-stickynode";
import LoginAndSignup from "./Component/Pages/LoginAndSignup/LoginAndSignup";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MindMapDiscussion from "./Component/Pages/MindMap/MindMapDiscussion";
import Question_form from "./Component/Form/Question_form";
import Testquestion from "./Component/Test/Testquestion";
import ThemanticAnalysis from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysis";
import Discussion from "./Component/Pages/Discussion/Discussion";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
<<<<<<< HEAD
import User_form from "./Component/Test/user_form";
import MindMapExercise from "./Component/Pages/MindMap/MindMapExercise";
import MindNode from "./Component/Pages/MindMap/node.components";
=======
import User_form from "./Component/Test/User_form";
>>>>>>> fe1757b15bcafcabbb63beff1ef85abd8d7bc3fc

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
          <Route
            exact
            path="/themanticAnalysis"
            element={<ThemanticAnalysis />}
          />
          <Route exact path="/discussion" element={<Discussion />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route exact path="/Question" element={<Question_form />} />
          <Route exact path="/test" element={<Testquestion />} />
          <Route exact path="/userform" element={<User_form />} />
          <Route
            exact
            path="/mindMapDiscussion"
            element={<MindMapDiscussion />}
          />
          <Route exact path="/discussion" element={<Discussion />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route
            exact
            path="/mindMapExercise"
            element={<MindMapExercise />}
          />
          <Route exact path="/MindNode" element={<MindNode />} />
=======
          <Route
            exact
            path="/mindmapdiscussion"
            element={<MindMapDiscussion />}
          />
          <Route exact path="/Question" element={<Question_form />} />
          <Route exact path="/test" element={<Testquestion />} />
          <Route exact path="/userform" element={<User_form />} />
>>>>>>> fe1757b15bcafcabbb63beff1ef85abd8d7bc3fc
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
