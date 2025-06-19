import "./App.css";
import Doctors from "./Components/Doctors/Doctors";
import Facts from "./Components/Facts/Facts";
import Home from "./Components/Home/Home";
import Log from "./Components/Logpage/Log";

function App() {
  return (
    <div className="App">
      <Home />
      <Facts />
      <Doctors />
      <Log />
      <div className="footer">
        <p>© 2023 HealthConnectGlobal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
