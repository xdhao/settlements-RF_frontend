import React, { useState, useEffect } from "react";
import { MediumTypesInterface, GetMediumTypes } from "../../../for_api/API_excel_control";

import "../../table.css";

interface TrTableInteface {
  tr: MediumTypesInterface;
}

const TrTable: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td>
        {tr.medium_city}
      </td>
      <td>
        {tr.medium_pgt} 
      </td>
      <td>
        {tr.medium_p} 
      </td>
      <td>
        {tr.medium_selo} 
      </td>
    </tr>
  );
};

export default TrTable;