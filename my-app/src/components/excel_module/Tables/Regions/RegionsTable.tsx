import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { RegInterface, GetRegions } from "../../for_api/API_excel_control";


export interface RegsTableInterface{
  _id:string
}

const RegsTable: React.FC<RegsTableInterface> = ({ _id}) => {
  const [regs, setRegs] = useState<RegInterface[]>([]);
  async function getUserInfo() {
    try {
      if (_id!=undefined){
        const response = await GetRegions(_id);
        setRegs(response);
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
    <Table regs={regs} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default RegsTable;
