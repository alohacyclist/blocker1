import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Coin } from '../components'

export function CoinDetail() {

  const id = useParams()
  const [details, setDetails] = useState([])

  const coinDetails = async() => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)        
    setDetails(data)
  }

  useEffect(() => {
    coinDetails()
    }, [])

  return (
    <div>
      Coin
    </div>
  )
}
