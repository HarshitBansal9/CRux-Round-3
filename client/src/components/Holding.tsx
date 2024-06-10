import { useEffect, useState } from "react";
import axios from "axios";
interface IPROPS{
    stock_ticker:string;
    number_of_shares: number;
    currentPrice: number;
    value:number;
    unrealizedGain:number;
}
export function getPriceColor(change:number){
  return change > 0 ? 'text-green-300' : 'text-red-300';
}
function Holding({stock_ticker,number_of_shares, currentPrice,value,unrealizedGain}:IPROPS) {
  return (
    /*<div className="pb-2 pt-2 grid grid-cols-4 items-center">
        <Link to={`../stocks/${stock_ticker}`} className="flex hover:underline items-center gap-2">
            <span>{stock_ticker}</span>
        </Link>
        <div>{shares}</div>
        <div>{price}</div>
        <div className="text-right">${shares*price}</div>
    </div>*/
    <tr className="border-b">
      <td className="py-4 px-4 font-medium">{stock_ticker}</td>
      <td className="py-4 px-4">{number_of_shares}</td>
      <td className="py-4 px-4">${currentPrice}</td>
      <td className="py-4 px-4">${(value).toFixed(2)}</td>
      <td className={`py-4 px-4 ${getPriceColor(unrealizedGain)}`}>${(unrealizedGain).toFixed(2)}</td>
    </tr>
  )
}

export default Holding
