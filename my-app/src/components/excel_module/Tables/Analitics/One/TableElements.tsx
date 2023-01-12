import React, { useState, useEffect } from "react";
import { UrbanRuralInterface, GetUrbanRural } from "../../../for_api/API_excel_control";

import "../../table.css";

interface TrTableInteface {
  tr: UrbanRuralInterface;
}

const TrTable: React.FC<TrTableInteface> = ({ tr}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td>
        {tr.medium_urban}
      </td>
      <td>
        {tr.medium_rural} 
      </td>
    </tr>
  );
};

export default TrTable;