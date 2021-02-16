import "./styles.css";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";

export default function App() {
  const count = {
    value: 0
  };
  console.log("앱이 시작됨.");
  return (
    <div className="App">
      <Counter count={count.value} />
      <CounterReducer />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! </h2>
    </div>
  );
}
