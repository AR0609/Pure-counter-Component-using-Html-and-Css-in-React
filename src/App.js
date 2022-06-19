import "./App.css";
import Counter1 from "./components/counter/example/counter1.js";
import Counter2 from "./components/counter/example/counter2.js";
import Counter3 from "./components/counter/example/counter3.js";
import Counter4 from "./components/counter/example/counter4.js";
import Counter5 from "./components/counter/example/counter5.js";
import Counter6 from "./components/counter/example/counter6.js";
function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Counter Component Using Html and Css in React{" "}
      </div>

      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Counter6 />
        <Counter5 />
        <Counter4 />
        <Counter3 />
        <Counter2 />
        <Counter1 />
      </div>
    </>
  );
}

export default App;
