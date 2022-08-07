import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Company from "./Page/Company";
import NewProject from "./Page/NewProject";
import Projects from "./Page/Projects";
import Project from "./Page/Project";

import Container from "./layout/Container"
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";



function App() {

  return (
    <Router>
      <NavBar />
      <Container customClass='minHeight'>
        <Routes> 
          <Route path ="/" element ={<Home />}></Route>
          <Route path ="/newproject" element ={<NewProject />}></Route>
          <Route path ="/projects" element ={<Projects />}></Route>
          <Route path ="/company" element ={<Company />}></Route>
          <Route path ="/contact" element ={<Contact />}></Route>
          <Route path ="/project/:id" element ={<Project />}></Route>
        </Routes>
      </Container> 
      <Footer />
  </Router>
  );
}

export default App;
