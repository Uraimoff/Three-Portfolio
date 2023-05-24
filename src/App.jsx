import "./App.css";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center relative z-0 bg-primary">
        <div className="bg-hero-pattern w-full mx-auto justify-center bg-cover   bg-no-repeat bg-center flex">
          <Navbar />
          <Hero />
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
