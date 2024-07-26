import { differences } from "../data";
import Button from "./Button/Button";
import { useState } from "react";

export default function WhyWe() {
    const [content, setContent] = useState(null);
    function handleClick(type) {
      setContent(type);
    }
    return (
        <section>
          <h3>Почему мы</h3>
          <Button
            isActive={content === "way"}
            onClick={() => handleClick("way")}
          >
            1
          </Button>
          <Button
            isActive={content === "easy"}
            onClick={() => handleClick("easy")}
          >
            2
          </Button>

          {content ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
        </section>
    )
}