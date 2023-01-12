import React, { useState, useEffect } from "react";
import { GetLastAppealDate, LastAppealDateInterface } from "./for_api/API_webservice_control";
import moment from 'moment';

interface TrTableInteface {
  tr: any;
}

const LasDate: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <div style={{justifyContent: "start"}}>
      <h3>
        <p>Использованное Open-API: <a href="https://kladr-api.ru/">https://kladr-api.ru/</a></p> 
        <p>WikiData: <a href="https://query.wikidata.org/">https://query.wikidata.org/</a></p> 
        <p>Дата последнего обращения к источникам данных: {moment(tr.date).format('hh:mm Do MMM, YYYY').toString()} </p>
      </h3>
    </div>
  );
};

export default LasDate;