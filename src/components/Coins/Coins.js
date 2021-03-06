import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Routes, Route, Link } from 'react-router-dom'
import axios from "axios"
import millify from 'millify';
import './Coins.css';
import { Coin } from '../'

export function Coins() {

  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState('€')
  const [coinSearch, setCoinSearch] = useState('')
  const [coinFilter, setCoinFilter] = useState([])

  const navigate = useNavigate()
  

  // function to GET the list of coins
  const coinReq = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d`)
    setCoins(data)
    setCoinFilter(data)
    /* console.log(data[0]) */
  }
  // get list of coins upon page loading
  useEffect(() => {
    coinReq()
  }, [])

  // search and filter list of coins
  useEffect(() => {
    let results = coinFilter.filter(coin => coin.name.toLowerCase().includes(coinSearch.toLowerCase()) || coin.symbol.toLowerCase().includes(coinSearch.toLowerCase()))
    setCoins(results)
  },[coinSearch])

  return (
    <div className='coins_table_container'>
    <div>

    </div>
      <div className='coins_search'>
        <input value={coinSearch} onChange={(e) => setCoinSearch(e.target.value)} type='text' placeholder='Search for cryptocurrency...' />
      </div>

    <table className='coins_table'>

      <thead>
        <tr>
          <th>#</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>1h Performance</th>
          <th>24h Performance</th>
          <th>24h High</th>
          <th>24h Low</th>
          <th>All-Time High</th>
          <th>All-Time Performance</th>
        </tr>
      </thead>
      
      {coins.map(coin => {
        return (
          <tbody >
            <tr key={coin.id}  onClick={() => {navigate(`${coin.id}`)}}>
              <td>#{coin.market_cap_rank}</td>
              <td>
                <img style={{maxWidth:'40px'}} src={coin.image} alt={coin.image} />
              </td>
              <td>{coin.name}</td>
              <td>{millify(coin.market_cap)}{currency}</td>
              <td>{coin.current_price.toFixed(2)}{currency}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              <td>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
              <td>{coin.high_24h}{currency}</td>
              <td>{coin.low_24h}{currency}</td>
              <td>{coin.ath}{currency}</td>
              <td>{coin.ath_change_percentage}%</td>
            </tr>
            
          </tbody>
          
          )})
      }

    </table>
    </div>
  )
}