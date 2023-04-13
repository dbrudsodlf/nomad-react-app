import { useEffect, useState } from 'react';

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar,setDollar] = useState();
  const[coin,setCoin]=useState(0);
  const[result,setResult]=useState(0);
  const onCoin=(event)=>setCoin(event.target.value);
  const onDollar=(event)=>setDollar(event.target.value);
  const onClick=(event)=>{
    event.preventDefault();
    setResult(dollar/coin);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])


  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> :
        <select onChange={onCoin}>
          <option>Select Your Coin</option>
          {coins.map((coin,index) => 
          <option
          key={index}
          value={coin.quotes.USD.price}
          id={coin.symbol}
          >{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>)}
        </select>
      }
      <br/>
      <input
        type='number'
        value={dollar}
        placeholder='Write your USD'
        onChange={onDollar}
      ></input>
      <button onClick={onClick}>Coin</button>
      <h3>{result}</h3>
    </div>

  );
}

export default Coin;
