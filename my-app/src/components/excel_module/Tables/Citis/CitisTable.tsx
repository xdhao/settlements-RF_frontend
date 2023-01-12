import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { CitSummaryInterface, CitInterface, GetCitis } from "../../for_api/API_excel_control";


export interface CitisTableInterface{
  _id:string
}

const CitisTable: React.FC<CitisTableInterface> = ({ _id}) => {
  const [cits, setCits] = useState<CitInterface[]>([]);
  const [summary, setSummary] = useState<CitSummaryInterface | undefined>();
  async function getUserInfo() {
    try {
      if (_id!=undefined){
        const response = await GetCitis(_id);
        setSummary(response);
        setCits(response.objects)
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserInfo();
    console.log("regs_excel");
  }, []);
  return (
    <div>
    <Table cits={cits} summary={summary} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default CitisTable;
