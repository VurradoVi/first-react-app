import Header from "./components/header";
import { ways, differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import { useState } from "react";
import Button from "./components/Button/Button";

export default function App() {
  const [content, setContent] = useState("Najmi");
  function handleClick(type) {
    setContent(type);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Почему мы</h3>
          <Button buttonClick={() => handleClick("way")}>1</Button>
          <Button buttonClick={() => handleClick("easy")}>2</Button>
          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}
