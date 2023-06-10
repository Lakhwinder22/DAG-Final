import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import Navbar  from "./components/navbar/index";
import About from "./components/footer/About";
import Studyindia from "./components/footer/StudyIndia";
import StudyAbroad from "./components/footer/StudyAbroad";
import Testimonials from "./components/footer/testimonials";
import Gallery from "./components/footer/Gallery";
import MbaConsultants from "./components/footer/MbaConsultants";
import SOP from "./components/footer/SOP";
import mock from "./components/footer/Mock ";
import AWT from "./components/footer/AWT";
import Scholarship from "./components/footer/Scholarship";
import Book from './components/footer/Book';
import career from "./components/footer/Career";
import Blog from "./components/footer/Blog";
import Footer from './components/footer';
import Register from './components/footer/Register';
import Application from "./components/footer/Application";
import Payment from "./components/footer/Payment";
import Contact from './components/footer/Contact';
import Featured1 from "./components/Featured/Featured1";
import Featured3 from "./components/Featured/Featured3";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/studyindia" component={Studyindia} exact />
        <Route path="/studyabroad" component={StudyAbroad} exact />
        <Route path="/testimonials" component={Testimonials} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/mbaconsultants" component={MbaConsultants} exact />
        <Route path="/sop" component={SOP} exact />
        <Route path="/mock" component={mock} exact />
        <Route path="/awt" component={AWT} exact />
        <Route path="/scholarship" component={Scholarship} exact />
        <Route path="/book" component={Book} exact />
        <Route path="/career" component={career} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/application" component={Application} exact />
        <Route path="/payment" component={Payment} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/enroll-on-your-dream-course-of-mba-in-the-us-and-uk-with-direct-admission" component={Featured1} exact />
        <Route path="/study-abroad-2021-22-direct-admission-platform-helping-students-in-pandemic" component={Featured3} exact />

        


      <Footer />
    </Router>
    </>
  );
}

export default App;

