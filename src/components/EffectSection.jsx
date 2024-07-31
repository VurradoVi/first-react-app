import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }

  useEffect(() => {}, []);

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick={() => setModal(true)}>Открыть инфо</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum
          saepe dolore quos unde, nam recusandae, error ad, soluta illo possimus
          mollitia iste non aliquid eos. Harum dignissimos amet explicabo?
        </p>
        <Button
          onClick={() => {
            setModal(false);
          }}
        >
          Закрыть инфо
        </Button>
      </Modal>
    </section>
  );
}
