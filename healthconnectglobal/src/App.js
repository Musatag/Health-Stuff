import "./App.css";
import Facts from "./Components/Facts/Facts";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Facts />
      <div className="footer">
        <p>© 2023 HealthConnectGlobal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
