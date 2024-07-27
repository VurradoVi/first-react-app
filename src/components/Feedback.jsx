import { useState } from "react";
import Button from "./Button/Button";

export default function Feedback() {
  function handleName(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState("help");
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleName}
        />

        <label htmlFor="reason">Приина обращения</label>
        <select
          name=""
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="da">Да</option>
          <option value="net">Нет</option>
        </select>
        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  );
}
