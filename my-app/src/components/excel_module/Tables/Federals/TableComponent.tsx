import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import {FederalInterface, GetFederals} from "../../for_api/API_excel_control"
import RegsTable from "../Regions/RegionsTable";


  interface TableInteface {
    federals: FederalInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ federals, getUserInfo }) => {
  const [checkRegion, setCheckRegion] = useState(false);
  const [_id, setId] = useState(' ')

  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    <div
      style={{
        justifyContent: "start",
        textAlign: "center"
      }}
    >
      {!checkRegion? <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th rowSpan={2}>
              <span>наименование</span>
            </th>
            <th rowSpan={2}>
              <span>страна</span>
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
            {federals.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo} setCheckRegion={setCheckRegion} setRegId={setId}></TrTable>)}
          
        </tbody>
      </table>:<><div><div><h2>Регионы {checkRegion&& <button onClick={()=>setCheckRegion(false)}>Назад</button>}</h2></div>
<RegsTable _id={_id}></RegsTable></div></>}
    </div>
  );
}

export default Table;