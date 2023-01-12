import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import { CitSummaryInterface, CitInterface, GetCitis } from "../../for_api/API_excel_control";
import SummaryCits from "./Counts";


  interface TableInteface {
    summary: CitSummaryInterface
    cits: CitInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ cits,getUserInfo, summary }) => {



  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th>
              <span>наименование</span>
            </th>
            <th>
              <span>тип</span>
            </th>
            <th>
              <span>регион</span>
            </th>
            <th>всего</th><th>мужчины</th><th>женщины</th><th>мужчины %</th><th>женщины %</th>
          </tr>
        </thead>
        <tbody>
            {cits.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;