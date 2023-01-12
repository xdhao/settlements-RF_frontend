import React, { useState, useEffect } from "react";
import { RegInterface } from "../../for_api/API_excel_control";

import "../table.css";

interface TrTableInteface {
  tr: RegInterface;
  getUserInfo:()=>void
  setCheckRegion:(b:boolean)=>void;
  setRegId: (b:string)=>void;
}

const TrTable: React.FC<TrTableInteface> = ({ tr, setCheckRegion, setRegId, getUserInfo }) => {

  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td onClick={()=>{setCheckRegion(true);setRegId(tr.guid)}}>
        <a>{tr.name}</a>
      </td>
      <td>
        {tr.district}
      </td>
      <td>
        {tr.population.urban_people.all} 
      </td>
      <td>
        {tr.population.urban_people.man} 
      </td>
      <td>
        {tr.population.urban_people.woman} 
      </td>
      <td>
        {tr.population.urban_people.man_perc} 
      </td>
      <td>
        {tr.population.urban_people.woman_perc} 
      </td>
      <td>
        {tr.population.rural_people.all} 
      </td>
      <td>
        {tr.population.rural_people.man} 
      </td>
      <td>
        {tr.population.rural_people.woman} 
      </td>
      <td>
        {tr.population.rural_people.man_perc} 
      </td>
      <td>
        {tr.population.rural_people.woman_perc} 
      </td>
    </tr>
  );
};

export default TrTable;