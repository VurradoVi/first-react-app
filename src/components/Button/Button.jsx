import "./Button.css";

export default function Button({ children, buttonClick }) {
  return (
    <button className="button" onClick={buttonClick}>
      {children}
    </button>
  );
}
