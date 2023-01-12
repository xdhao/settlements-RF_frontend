import React, { useState, useEffect  } from "react";
import './App.css';
import { Tabs } from "antd";
import RegionsWeb from "./components/web_services_module/Tables/RegionTable/RegionWeb";
import { GetLastAppealDate, LastAppealDateInterface } from "./components/web_services_module/for_api/API_webservice_control";
import LasDate from "./components/web_services_module/LastDate";
import CountryExcel from "./components/excel_module/Tables/Countrys/CountryTable";
import { DownloadSampleCsvFile } from "./components/download_file_button/downloadSampleCsvFile";
import FederalExcel from "./components/excel_module/Tables/Federals/FederalTable";
import AutosExcel from "./components/excel_module/Tables/Autos/AutosTable";

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };
  const { TabPane } = Tabs;
  const [lastdate, setLastDate] = useState<LastAppealDateInterface>();
  const [outputdate, setDate] = useState<Date>();

  async function getUserInfo() {
    try {
      const response = await GetLastAppealDate();
      setLastDate(response);
      console.log(response.date);
      setDate(response.date)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserInfo();
    console.log("regions_web");
  }, []);
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        style={{ width: "100%", margin: "0" , marginLeft: '10px'}}
      >
        <TabPane
          tab={<span style={{ fontSize: "24px" }}>Данные Excel (источник wiki)</span>}
          key="1"
        >
          <DownloadSampleCsvFile />
          <h2>Страна</h2>
          <CountryExcel></CountryExcel>
          <h2>Федеральные округа</h2>
          <FederalExcel></FederalExcel>
          <h2>Автономные округа</h2>
          <AutosExcel></AutosExcel>
        </TabPane>  
        <TabPane
          tab={<span style={{ fontSize: "24px" }}>Данные api ФИАС и Wikidata</span>}
          key="2"
        >
          <LasDate tr={lastdate}></LasDate>
          <RegionsWeb></RegionsWeb>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
