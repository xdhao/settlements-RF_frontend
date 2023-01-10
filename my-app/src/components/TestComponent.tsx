import React from "react";
import axios from 'axios';


function Suka() {

    const  zapros = () => {
        axios.get(`http://127.0.0.1:8000/api/webservices-data/v1.0/get-cities`,)
          .then(res => {
            console.log(res);
          })
      }
      return (
        <div style={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
          <button style={{width:"300px", height:"300px", fontSize:"50px"}} onClick={()=>zapros()}>
            Zzzxxxq ;D
          </button>
        </div>
      );
    }
    
    export default Suka;
    