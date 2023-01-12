import React, { useState, useEffect } from "react";
import { MediumPeopleInterface, GetMediumPeople } from "../../../for_api/API_excel_control";

import "../../table.css";

interface TrTableInteface {
  tr: MediumPeopleInterface;
}

const TrTable: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td>
        {tr.medium_ur_man}
      </td>
      <td>
        {tr.medium_ur_woman} 
      </td>
      <td>
        {tr.medium_ru_man}
      </td>
      <td>
        {tr.medium_ru_woman} 
      </td>
    </tr>
  );
};

export default TrTable;