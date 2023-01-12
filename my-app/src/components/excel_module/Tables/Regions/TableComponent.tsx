import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import { RegInterface, GetRegions } from "../../for_api/API_excel_control";
import CitisTable from "../Citis/CitisTable";


  interface TableInteface {
    regs: RegInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ regs,getUserInfo }) => {

  const [checkRegion, setCheckRegion] = useState(false);
  const [_id, setId] = useState(' ')

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
      {!checkRegion? <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th rowSpan={2}>
              <span>наименование</span>
            </th>
            <th rowSpan={2}>
              <span>округ</span>
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
            {regs.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo} setCheckRegion={setCheckRegion} setRegId={setId}></TrTable>)}
          
        </tbody>
      </table>:<><div><div><h2>Локальные субъекты {checkRegion&& <button onClick={()=>setCheckRegion(false)}>Назад</button>}</h2></div>
<CitisTable _id={_id}></CitisTable></div></>}
    </div>
  );
}

export default Table;