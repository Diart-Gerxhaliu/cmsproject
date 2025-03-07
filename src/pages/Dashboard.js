import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [data, setData] = useState("dash");
  const [dark,setDark] = useState(false);

  let LG = JSON.parse(localStorage.getItem("Logo"));

  return (
    <div className="dashboard" style={dark? {backgroundColor:"black",color:"white"}: {backgroundColor:"white",color:"black"}}>
      <div className="dashMenu" 
      style={dark? 
      {backgroundColor: "#333",color:"white"}:
      {backgroundColor: "#f4f4f4", color:"black"}}>
        <img src={LG[0].image} alt="logo" />
        <h1>HELLO ADMIN</h1>
      </div>
      <div className="sideMenu" style={dark? {backgroundColor: "#333"}:{backgroundColor: "#f4f4f4"}}>
        <h1 onClick={() => { setSelectedMenu("Dashboard"); setData("dash"); }}>Dashboard</h1>
        <div className="group">
          <h1 onClick={() => {setSelectedMenu("Posts"); setData("posts")}}>Posts</h1>
          <h1 onClick={() => {setSelectedMenu("Pages"); setData("pages")}}>Pages</h1>
          <h1 onClick={() => {setSelectedMenu("Feedback"); setData("feedback")}}>Feedback</h1>
        </div>
        <div className="group">
          <h1 onClick={() => setSelectedMenu("Users")}>Users</h1>
          <h1 onClick={() => {setSelectedMenu("Settings");setData("settings")}}>Settings</h1>
          <h1 onClick={() => setSelectedMenu("Collapse Menu")}>Collapse Menu</h1>
        </div>
      </div>

      <div className="main">
        <h2 className="mainTitle">{selectedMenu}</h2>

        {data === "dash" && (
          <div>
            <div>
              <h2 className="elementTitle">Site Info</h2>
              <div className="tableWrapper">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="2">Site Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>URL:</td>
                      <td>Project Name</td>
                    </tr>
                    <tr>
                      <td>Coded in</td>
                      <td>React</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="elementTitle">Last Upload</h2>
              <div className="tableWrapper">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="2">Last Upload</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Date:</td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) }
        {data==='settings'&& (
            <div className='settings'>
                {dark?
                <button 
                type='button'
                onClick={()=>{
                    setDark(false)
                }}>
                    Light Mode
                </button>:
                <button 
                type='button'
                onClick={()=>{
                    setDark(true)
                }}>
                    Dark Mode
                </button>}
            </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
