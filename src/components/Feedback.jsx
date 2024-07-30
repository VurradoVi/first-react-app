import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVSRef() {
  const input = useRef();
  const [inputValue, setInputValue] = useState('');
  function handleKey(event) {
    if (event.key === "Enter") {
      setInputValue(input.current.value);
    } 
  }

  return (
    <div>
      <h3>Input value: {inputValue}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKey}
        className="control"
      />
    </div>
  );
}

export default function Feedback() {
  function handleName(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");
  return (
    <section>
      <h3>Обратная связь</h3>
      <form style={{ marginBottom: "10px" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleName}
        />

        <label htmlFor="reason">Приина обращения</label>
        <select
          name=""
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="da">Да</option>
          <option value="net">Нет</option>
        </select>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>

      <StateVSRef />
    </section>
  );
}
