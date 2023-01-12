import React, { useState, useEffect } from "react";
import { CityInterface } from "../../for_api/API_webservice_control";

import "../table.css";

interface TrTableInteface {
  tr: CityInterface;
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
        {tr.district} 
      </td>
      <td>
        {tr.people}
      </td>
      <td>
        {tr.area}
      </td>
      <td>
        {tr.head}
      </td>
      <td>
        {tr.type}
      </td>
    </tr>
  );
};

export default TrTable;