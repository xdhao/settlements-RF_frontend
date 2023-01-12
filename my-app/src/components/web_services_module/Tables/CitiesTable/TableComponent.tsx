import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import {CityInterface, GetCities} from "../../for_api/API_webservice_control"


  interface TableInteface {
    cities: CityInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ cities,getUserInfo }) => {



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
              <span>локальный округ/район</span>
            </th>
            <th>
              <span>население</span>
            </th>
            <th>
              <span>площадь</span>
            </th>
            <th>
              <span>глава</span>
            </th>
            <th>
              <span>тип</span>
            </th>
          </tr>
        </thead>
        <tbody>
            {cities.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;