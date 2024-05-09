import Community from "./components/Community";
import FooterComponent from "./components/FooterComponent";
import Formats from "./components/Formats";
import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import Slogan from "./components/Slogan";
import StartNewProject from "./components/StartNewProject";
import Testimonials from "./components/Testimonials";
import TryItNow from "./components/TryItNow";
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
      <LearnMore />
      <Community />
      <Testimonials />
      <TryItNow />
      <FooterComponent />
    </>
  );
}

export default App;
