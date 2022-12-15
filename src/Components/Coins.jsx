import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Coins.css";

const Coins = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const [getCoin, setGetCoin] = useState("");
  const id = useState();

  const Get = async (number) => {
    try {
      const response = await axios.get(url + number);
      setGetCoin(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Get();
}, []);

return (
    <table className="tableC ">
    <tr className="tableCoins border-bottom border-danger">
        <th>Market Rank</th>
        <th>Coin:</th>
        <th>Current Price:</th>
        <th>Market Cap:</th>
    </tr>

    {!getCoin
        ? ""
        : getCoin.map((coins, index) => {
            return (
            <tr className="infoCoins border-bottom border-danger" key={id}>
                <td>{coins.market_cap_rank}</td>
                <td className="coins">
                    <img src={coins.image} className="imgCoins" />
                    <strong>{coins.name}</strong>{coins.symbol}
                </td>
                <td>${coins.current_price}</td>
                <td>{coins.market_cap}</td>
            </tr>
            );
        })}
    </table>
);
};
export default Coins;
