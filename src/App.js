import React, {useState, useEffect} from "react"
import axios from "axios";
import Coin from "./components/Coin/Coin";
import "./App.css";

function App() {
  const [coins, setCoins]=useState([])
  const [search, setSearch] = useState("")
   axios
  .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=100&page=1&sparkline=false%27%20\%20-H%20%27accept:%20application/json")
  .then(res=>{
    setCoins(res.data)
  })
  .catch(e =>console.log(e))

  const handleChange = (event)=>{
    setSearch(event.target.value)
    console.log(event.target.value);
  }

  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="App">

     <div className="search">
      <h1 className="searchText">Введите название криптовалюты</h1>
      <form>
        <input className="searchInput" onChange={handleChange} type="text" placeholder="Поиск"></input>
      </form>
      </div>
      {filteredCoins.map(coin=>{
        return (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange ={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
        />
        )
      })}
    </div>
  );
}

export default App;
