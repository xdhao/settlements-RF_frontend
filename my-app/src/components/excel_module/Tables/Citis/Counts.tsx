import React, { useState, useEffect } from "react";
import { CitSummaryInterface, CitInterface, GetCitis } from "../../for_api/API_excel_control";


interface TrTableInteface {
  tr: CitSummaryInterface;
}

const SummaryCits: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <div style={{justifyContent: "start"}}>
        <b>
        <p>Количество городов: {tr.count_city} </p>
        <p>Количество поселков городского типа: {tr.count_pgt} </p>
        <p>Количество поселков: {tr.count_p} </p>
        <p>Количество сел: {tr.count_selo} </p></b>
        
    </div>
  );
};

export default SummaryCits;