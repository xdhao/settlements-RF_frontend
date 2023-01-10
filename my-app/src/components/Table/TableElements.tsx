import React, { useState, useEffect } from "react";
import "./table.css";

interface tr {
  product: string;
  lastYearSale: number;
  thisYearSale: number;
  lastYearProfit: number;
  thisYearProfit: number;
}
interface TrTableInteface {
  tr: tr;
}

const TrTable: React.FC<TrTableInteface> = ({ tr }) => {
  const [product, setProduct] = useState("");
  const [lastYearSale, setLastYearSale] = useState<number>();
  const [thisYearSale, setThisYearSale] = useState<number>();
  const [lastYearProfit, setLastYearProfit] = useState<number>();
  const [thisYearProfit, setThisYearProfit] = useState<number>();

  useEffect(() => {
    setProduct(tr.product);
    setLastYearSale(tr.lastYearSale);
    setThisYearSale(tr.thisYearSale);
    setLastYearProfit(tr.lastYearProfit);
    setThisYearProfit(tr.thisYearProfit);
  }, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td >
        {product}
      </td>
      <td>
        {lastYearSale}
      </td>
      <td>
        {thisYearSale} 
      </td>
      <td>
        {lastYearProfit}
      </td>
      <td>
        {thisYearProfit}
      </td>
    </tr>
  );
};

export default TrTable;