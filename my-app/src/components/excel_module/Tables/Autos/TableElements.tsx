import React, { useState, useEffect } from "react";
import { AutInterface } from "../../for_api/API_excel_control";

import "../table.css";

interface TrTableInteface {
  tr: AutInterface;
}

const TrTable: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td>
        {tr.name}
      </td>
      <td>
        {tr.region}
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