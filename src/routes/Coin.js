import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"



export function Coin() {

  const coin = useParams()
  console.log(coin.id)

  useEffect(() => {
    coinDetails()
  }, [])

  const coinDetails = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`)
    console.log(data)
  }

  return (
    <div>

    </div>
  )
}
