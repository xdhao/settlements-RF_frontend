import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import {DistrctsInterface, GetDistricts} from "../../for_api/API_webservice_control"


  interface TableInteface {
    districts: DistrctsInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ districts, getUserInfo }) => {



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
              <span>регион</span>
            </th>
            <th>
              <span>тип</span>
            </th>
          </tr>
        </thead>
        <tbody>
            {districts.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;