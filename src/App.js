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
import ThemanticAnalysisOne from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysisOne";
import ThemanticAnalysisTwo from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysisTwo";
import DiscussionTwo from "./Component/Pages/Discussion/DiscussionTwo";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import User_form from "./Component/Test/user_form";
import MindMapExercise from "./Component/Pages/MindMap/MindMapExercise";
import ChallengeOne from "./Component/Pages/Challenges/ChallengeOne";
import DiscussionOne from "./Component/Pages/Discussion/DiscussionOne";
import ChallengeTwo from "./Component/Pages/Challenges/ChallengeTwo";
import CoursePreQuestions  from "./Component/Pages/Course pre-questionaaire/CoursePreQuestions";

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
            path="/coursePreQuestionnaire"
            element={<CoursePreQuestions />}
          />
          <Route
            exact
            path="/themanticAnalysis-1"
            element={<ThemanticAnalysisOne />}
          />
          <Route
            exact
            path="/themanticAnalysis-2"
            element={<ThemanticAnalysisTwo />}
          />
          <Route exact path="/discussionTwo" element={<DiscussionTwo />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/mindmapdiscussion"
            element={<MindMapDiscussion />}
          />
          <Route
            exact
            path="/challengeOne"
            element={<ChallengeOne />}
          />
          <Route
            exact
            path="/discussionOne"
            element={<DiscussionOne />}
          />
          <Route
            exact
            path="/mindMapExercise"
            element={<MindMapExercise />}
          />
          <Route
            exact
            path="/challengeTwo"
            element={<ChallengeTwo />}
          />
          <Route exact path="/Question" element={<Question_form />} />
          <Route exact path="/test" element={<Testquestion />} />
          <Route exact path="/userform" element={<User_form />} />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
