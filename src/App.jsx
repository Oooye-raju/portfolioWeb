import Header from "../src/components/Header/Header";
import About from "./components/about/about";
import Passion from "./components/passion/passion";
import Experience from "./components/Experience/experience";
import Works from "./components/Work/works";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"

function App() {
  return (
    <>
      <Header />
      <About />
      <Passion />
      <Experience />
      <Works />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
