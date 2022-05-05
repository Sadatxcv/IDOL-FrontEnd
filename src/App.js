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

import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";

import User_form from "./Component/Test/User_form";
import Conclusion from "./Component/Pages/Conclusion/Conclusion";
import Assessment from "./Component/Pages/Assessment/Assessment";

import ThemanticAnalysisOne from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysisOne";
import ThemanticAnalysisTwo from "./Component/Pages/ThemanticAnalysis/ThemanticAnalysisTwo";

import CoursePreQuestions from "./Component/Pages/Course pre-questionaaire/CoursePreQuestions";
import CoursePreQuestions2 from "./Component/Pages/Course pre-questionaaire/CoursePreQuestions2";

import DiscussionOne from "./Component/Pages/Discussion/DiscussionOne";
import DiscussionTwo from "./Component/Pages/Discussion/DiscussionTwo";
import DiscussionThree from "./Component/Pages/Discussion/DiscussionThree";
import DiscussionFour from "./Component/Pages/Discussion/DiscussionFour";
import DiscussionFive from "./Component/Pages/Discussion/DiscussionFive";
import DiscussionSix from "./Component/Pages/Discussion/DiscussionSix";

import ChallengeOne from "./Component/Pages/Challenges/ChallengeOne";
import ChallengeTwo from "./Component/Pages/Challenges/ChallengeTwo";
import ChallengeThree from "./Component/Pages/Challenges/ChallengeThree";
import ChallengeFour from "./Component/Pages/Challenges/ChallengeFour";
import ChallengeFive from "./Component/Pages/Challenges/ChallengeFive";
import ChallengeSix from "./Component/Pages/Challenges/ChallengeSix";
import ChallengeSeven from "./Component/Pages/Challenges/ChallengeSeven";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sticky enabled={true} top={0} bottomBoundary={12000} innerZ={20}>
          <Navbar />
        </Sticky>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/LoginAndSignup" element={<LoginAndSignup />} />

          {/* CoursePreQuestionnaires */}
          <Route
            exact
            path="/coursePreQuestionnaire-1"
            element={<CoursePreQuestions />}
          />
          <Route
            exact
            path="/coursePreQuestionnaire-2"
            element={<CoursePreQuestions2 />}
          />

          {/* ThemanticAnalysis */}
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

          {/* Discussions */}
          <Route exact path="/discussion-1" element={<DiscussionOne />} />
          <Route exact path="/discussion-2" element={<DiscussionTwo />} />
          <Route exact path="/discussion-3" element={<DiscussionThree />} />
          <Route exact path="/discussion-4" element={<DiscussionFour />} />
          <Route exact path="/discussion-5" element={<DiscussionFive />} />
          <Route exact path="/discussion-6" element={<DiscussionSix />} />

          {/* Challenges */}
          <Route exact path="/challenge-1" element={<ChallengeOne />} />
          <Route exact path="/challenge-2" element={<ChallengeTwo />} />
          <Route exact path="/challenge-3" element={<ChallengeThree />} />
          <Route exact path="/challenge-4" element={<ChallengeFour />} />
          <Route exact path="/challenge-5" element={<ChallengeFive />} />
          <Route exact path="/challenge-6" element={<ChallengeSix />} />
          <Route exact path="/challenge-7" element={<ChallengeSeven />} />

          <Route exact path="/assessment" element={<Assessment />} />
          <Route exact path="/conclusion" element={<Conclusion />} />
          <Route
            exact
            path="/mindmapdiscussion"
            element={<MindMapDiscussion />}
          />

          {/* Forms */}
          <Route exact path="/Question" element={<Question_form />} />
          <Route exact path="/test" element={<Testquestion />} />
          <Route exact path="/userform" element={<User_form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
