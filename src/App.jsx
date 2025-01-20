import AnimatedCursor from "react-animated-cursor";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={1}
          outerScale={1.75}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "rgb(191, 114, 211)",
          }}
          outerStyle={{
            border: "3px solid rgb(191, 114, 211)",
          }}
        />
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
