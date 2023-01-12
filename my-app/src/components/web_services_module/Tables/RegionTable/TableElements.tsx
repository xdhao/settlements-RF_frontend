import React, { useState, useEffect } from "react";
import { RegionInterface } from "../../for_api/API_webservice_control";

import "../table.css";

interface TrTableInteface {
  tr: RegionInterface;
  setCheckRegion:(b:boolean)=>void;
  setRegId: (b:number)=>void;
  getUserInfo:()=>void
}

const TrTable: React.FC<TrTableInteface> = ({ tr,  getUserInfo, setCheckRegion, setRegId}) => {
  useEffect(() => {}, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td onClick={()=>{setCheckRegion(true);setRegId(tr.id)}}>
        <a>{tr.name}</a>
      </td>
      <td>
        {tr.type} 
      </td>
    </tr>
  );
};

export default TrTable;