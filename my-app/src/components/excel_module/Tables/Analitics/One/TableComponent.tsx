import React, { useState, useEffect } from "react";
import "../../table.css";
import TrTable from "./TableElements";
import { UrbanRuralInterface, GetUrbanRural } from "../../../for_api/API_excel_control";


  interface TableInteface {
    types: UrbanRuralInterface;
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ types, getUserInfo }) => {
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
            <th>
              <span>доля городского населения %</span>
            </th>
            <th>
              <span>доля сельского населения %</span>
            </th>
          </tr>
        </thead>
        <tbody>
            <TrTable tr={types}></TrTable>
        </tbody>
      </table>
    </div>
  );
}

export default Table;