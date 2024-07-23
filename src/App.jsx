import Header from "./components/header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";

export default function App() {
  function handleClick() {
    console.log("click");
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
          <Button buttonClick={handleClick}>1</Button>
          <Button buttonClick={handleClick}>2</Button>
        </section>
      </main>
    </div>
  );
}
