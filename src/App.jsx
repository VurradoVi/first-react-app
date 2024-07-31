import { useState } from "react";
import Feedback from "./components/Feedback";
import Header from "./components/header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import TeachingSection from "./components/TeachingSection";
import WhyWe from "./components/WhyWeSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("effect");
  return (
    <>
      <Header />
      <main>
        <IntroSection /> 
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
          
        {tab === "main" && (
          <>
            <TeachingSection />
            <WhyWe />
          </>
        )}
        {tab === "feedback" && <Feedback />}

        {tab === "effect" && <EffectSection />}

      </main>
    </>
  );
}
