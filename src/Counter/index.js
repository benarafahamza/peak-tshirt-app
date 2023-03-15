import "./style.css";
import useCounter from "./useCounter";

export default function Counter({ defaultCounter = 0, step = 1 }) {
  const [counter, { add, reduce }] = useCounter({ defaultCounter, step });
  return (
    <article className="counter">
      <p>{counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={reduce}>Reduce</button>
    </article>
  );
}
