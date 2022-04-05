import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"

export function Coin() {

  const coin = useParams()
  const [details, setDetails] = useState([])
    console.log(details)
  const coinDetails = async() => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`)        
    setDetails(data)
  }

  useEffect(() => {
    coinDetails()
    }, [coin])
    
    return (
      <div>
        <div>
          <img src={details?.image?.small} alt={'coin-icon'} />
        </div>
      </div>
    )
}