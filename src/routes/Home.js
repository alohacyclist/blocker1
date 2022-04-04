import axios from "axios"
import { useEffect, useState } from "react"
import { Coins, NavBar } from "../components"


export function Home() {
  
  return (
    <div className="coin-container">
      <NavBar />
      <Coins />
    </div>
  )
}