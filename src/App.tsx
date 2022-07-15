import { useCounter } from "./unit-tests/hooks/useCounter/useCounter";

function App() {
  const { count, increment } = useCounter();

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default App;
