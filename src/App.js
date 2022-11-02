import "./App.css";
import Footer from "./Components/Footer";
// import Home  from './Components/Home';
import Navbar from "./Components/Navbar";
// import Projects from "./Components/Projects";
import ProjectPage from './Components/ProjectPage'

function App() {
  return (
    <>
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      {/* <Home/> */}
      {/* <Projects /> */}
      <ProjectPage/>
      <Footer />
    </>
  );
}

export default App;
