import { Coin, Coins, NavBar } from "../components"
import {Routes, Route} from 'react-router-dom'


export function Home() {
  
  return (
    <div className="coin-container">
      <NavBar />

      <Routes>
        <Route path=":id" element={<Coin />}/>
      </Routes>

      <Coins />
    </div>
  )
}