import Formats from "./components/Formats";
import Hero from "./components/Hero";
import Slogan from "./components/Slogan";
import StartNewProject from "./components/StartNewProject";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Formats />
      <Slogan />
      {/* Component */}
      <StartNewProject />
    </>
  );
}

export default App;
