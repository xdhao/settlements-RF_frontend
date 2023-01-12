import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import {AutInterface, GetAutos} from "../../for_api/API_excel_control"


  interface TableInteface {
    country: AutInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ country, getUserInfo }) => {
  const [checkRegion, setCheckRegion] = useState(false);
  const [regId, setRegId] = useState(0)

  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th rowSpan={2}>
              <span>наименование</span>
            </th>
            <th rowSpan={2}>
              <span>регион</span>
            </th>
            <th colSpan={5}>
              <span>городское население</span>
            </th>
            <th colSpan={5}>
              <span>сельское население</span>
            </th>
          </tr>
          <tr>
            <th>всего</th><th>мужчины</th><th>женщины</th><th>мужчины %</th><th>женщины %</th>
            <th>всего</th><th>мужчины</th><th>женщины</th><th>мужчины %</th><th>женщины %</th>
          </tr>
        </thead>
        <tbody>
            {country.map((tr)=><TrTable tr={tr}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;