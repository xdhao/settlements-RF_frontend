import React, { useState, useEffect } from "react";
import { DistrctsInterface } from "../../for_api/API_webservice_control";

import "../table.css";

interface TrTableInteface {
  tr: DistrctsInterface;
  getUserInfo:()=>void
}

const TrTable: React.FC<TrTableInteface> = ({ tr }) => {

  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td >
        {tr.name}
      </td>
      <td>
        {tr.region}
      </td>
      <td>
        {tr.type} 
      </td>
    </tr>
  );
};

export default TrTable;