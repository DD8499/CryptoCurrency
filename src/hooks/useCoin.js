import axios from 'axios'
import{ useEffect, useState } from 'react'

export const useCoin = () => {
    const [coins,setCoins]=useState([])
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res=>setCoins(res.data))
        .catch(error=>{
            console.log(error)
        })
    },[])

  return {
coins
  }
}
