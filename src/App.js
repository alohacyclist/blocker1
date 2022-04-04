import "./App.css";
import { useState } from "react";
import { Coins, NavBar } from "./components";

function App() {
  const [coins, setCoins] = useState([])
  return (
    <div className="container">
      <NavBar />
      <Coins setCoins={setCoins} coin={coins} />
    </div>
  );
}

export default App;

