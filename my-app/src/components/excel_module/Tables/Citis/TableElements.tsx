import React, { useState, useEffect } from "react";
import { CitInterface } from "../../for_api/API_excel_control";

import "../table.css";

interface TrTableInteface {
  tr: CitInterface;
  getUserInfo:()=>void
}

const TrTable: React.FC<TrTableInteface> = ({ tr }) => {

  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td>
        {tr.name}
      </td>
      <td>
        {tr.type}
      </td>
      <td>
        {tr.region}
      </td>
      <td>
        {tr.people.all} 
      </td>
      <td>
        {tr.people.man} 
      </td>
      <td>
        {tr.people.woman} 
      </td>
      <td>
        {tr.people.man_perc} 
      </td>
      <td>
        {tr.people.woman_perc} 
      </td>
    </tr>
  );
};

export default TrTable;