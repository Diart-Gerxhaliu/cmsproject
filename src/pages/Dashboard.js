import React, {useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [data, setData] = useState("dash");
  const [dark, setDark] = useState(false);
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin"))||false);
  const [page, setPage] = useState("Home");

  let [homeBanner, setHomeBanner] = useState(JSON.parse(localStorage.getItem("HomeBanner"))||[]);
  let [homeAbout, setHomeAbout] = useState(JSON.parse(localStorage.getItem("HomeAbout"))||[]);
  let [homeServices, setHomeServices] = useState(JSON.parse(localStorage.getItem("HomeServices"))||[]); 
  
  let [aboutBanner, setAboutBanner] = useState(JSON.parse(localStorage.getItem("AboutBanner"))||[]);
  let [aboutAbout, setAboutAbout] = useState(JSON.parse(localStorage.getItem("AboutAbout"))||[]); 

  let LG = JSON.parse(localStorage.getItem("Logo"));

  if (dark) {
    document.body.style.background= "black";
  }

  if (!admin) {
    return <h1>You haven't logged in</h1>;
  }
  return (
    <div
      className="dashboard"
      style={
        dark
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <div
        className="dashMenu"
        style={
          dark
            ? { backgroundColor: "#333", color: "white" }
            : { backgroundColor: "#f4f4f4", color: "black" }
        }
      >
        <img src={LG[0].image} alt="logo" />
        <h1>HELLO ADMIN</h1>
      </div>
      <div
        className="sideMenu"
        style={dark ? { backgroundColor: "#333" } : { backgroundColor: "#f4f4f4" }}
      >
        <h1
          onClick={() => {
            setSelectedMenu("Dashboard");
            setData("dash");
          }}
        >
          Dashboard
        </h1>
        <div className="group">
          <h1
            onClick={() => {
              setSelectedMenu("Posts");
              setData("posts");
            }}
          >
            Posts
          </h1>
          <h1
            onClick={() => {
              setSelectedMenu("Pages");
              setData("pages");
            }}
          >
            Pages
          </h1>
          <h1
            onClick={() => {
              setSelectedMenu("Feedback");
              setData("feedback");
            }}
          >
            Feedback
          </h1>
        </div>
        <div className="group">
          <h1 onClick={() => setSelectedMenu("Users")}>Users</h1>
          <h1
            onClick={() => {
              setSelectedMenu("Settings");
              setData("settings");
            }}
          >
            Settings
          </h1>
          <h1 onClick={() => setSelectedMenu("Collapse Menu")}>Collapse Menu</h1>
        </div>
      </div>

      <div className="main">
        <h2 className="mainTitle">{selectedMenu}</h2>

        {data === "dash" && (
          <div>
            <div >
              <h2 className="elementTitle">Site Info</h2>
              <div className="tableWrapper" style={
          dark
            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
        }>
                <table style={
          dark
            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
        }>
                  <thead>
                    <tr>
                      <th colSpan="2">Site Info</th>
                    </tr>
                  </thead>
                  <tbody >
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
              <div className="tableWrapper" style={
          dark
            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
        }>
                <table style={
          dark
            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
        }>
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
        )}
        {data === "settings" && (
          <div className="settings">
            {dark ? (
              <button type="button" onClick={() => {setDark(false)}}>
                Light Mode
              </button>
            ) : (
              <button type="button" onClick={() => {setDark(true)}}>
                Dark Mode
              </button>
            )}
          </div>
        )}
       

            {data === "pages" && (
              <>
                <div className='row'>
                  <button 
                    type='button'
                    onClick={() => setPage("Home")}
                  >Home</button>
                  <button 
                    type='button'
                    onClick={() => setPage("About")}
                  >About</button>
                  <button 
                    type='button'
                    onClick={() => setPage("Services")}
                  >Services</button>
                </div>

                {page === "Home" && (
                  <div>
                    {homeBanner &&
                      homeBanner.map((gal, index) => (
                        <div className="homeBanner" key={index}>
                          <h1>Banner</h1>
                          <input 
                            type="text"
                            name="change"
                            value={gal.imageBack}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].imageBack = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
              
                          <input 
                            type="text"
                            name="change"
                            value={gal.bannerHead}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerHead = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={gal.bannerDesc}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerDesc = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={gal.bannerButton1}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerButton1 = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={gal.bannerButton2}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerButton2 = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                        </div>
                      ))}
              
                    {homeAbout &&
                      homeAbout.map((gal, index) => (
                        <div className="homeAbout" key={index}>
                          <h1>About</h1>
                          <input 
                            type="text"
                            name="change"
                            value={gal.aboutImage}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutImage = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          <input 
                            type="text"
                            name="change"
                            value={gal.aboutHead}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutHead = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          <input 
                            type="text"
                            name="change"
                            value={gal.aboutDesc}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutDesc = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          
                          {gal.aboutList.map((serie, i) => (
                            <div className='aboutList' key={i}>
                              <input 
                                type="text"
                                name="change"
                                value={serie.image}
                                onChange={(e) => {
                                  const newAbout = [...homeAbout];
                                  newAbout[index].aboutList[i].image = e.target.value;
                                  setHomeAbout(newAbout);  
                                  localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                                }}
                              />
                              <input 
                                type="text"
                                name="change"
                                value={serie.comp}
                                onChange={(e) => {
                                  const newAbout = [...homeAbout];
                                  newAbout[index].aboutList[i].comp = e.target.value;
                                  setHomeAbout(newAbout);  
                                  localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                                }}
                              />
                            </div>
                          ))}
                          
                          <input 
                            type="text"
                            name="change"
                            value={gal.buttonDesc}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].buttonDesc = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                      ))}
              
                    {homeServices &&
                      homeServices.map((gal, index) => (
                        <div className='homeServices' key={index}>
                          <h1>Services</h1>
                          <input 
                            type='text' 
                            name='change' 
                            value={gal.head} 
                            onChange={(e) => {
                              const newServices = [...homeServices];
                              newServices[index].head = e.target.value;
                              setHomeServices(newServices);
                              localStorage.setItem("HomeServices", JSON.stringify(newServices));
                            }}
                          />
                          
                          {gal.card.map((serie, i) => (
                            <div key={i}>
                              <input 
                                type='text' 
                                name='text' 
                                value={serie.image}
                                onChange={(e) => {
                                  const newServices = [...homeServices];
                                  newServices[index].card[i].image = e.target.value;
                                  setHomeServices(newServices);
                                  localStorage.setItem("HomeServices", JSON.stringify(newServices));
                                }} 
                              />
                              <input 
                                type='text' 
                                name='text' 
                                value={serie.comp}
                                onChange={(e) => {
                                  const newServices = [...homeServices];
                                  newServices[index].card[i].comp = e.target.value;
                                  setHomeServices(newServices);
                                  localStorage.setItem("HomeServices", JSON.stringify(newServices));
                                }} 
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </>
            )}

            {page === "About" && (
              <>
                {aboutBanner && (
                    <>
                    {aboutBanner.map((gal,index)=>{
                      return<><input 
                      key={index}
                      type='text' 
                      name='change' 
                      value={gal.imageBack} 
                      onChange={(e)=>{
                        const newAboutBanner = [...aboutBanner];
                        newAboutBanner[index].imageBack = e.target.value;
                        setAboutBanner(newAboutBanner);
                        localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                      }}/>
                      <input 
                      key={index}
                      type='text' 
                      name='change' 
                      value={gal.bannerHead} 
                      onChange={(e)=>{
                        const newAboutBanner = [...aboutBanner];
                        newAboutBanner[index].bannerHead = e.target.value;
                        setAboutBanner(newAboutBanner);
                        localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                      }}/>
                      <input 
                      key={index}
                      type='text' 
                      name='change' 
                      value={gal.bannerButton1} 
                      onChange={(e)=>{
                        const newAboutBanner = [...aboutBanner];
                        newAboutBanner[index].bannerButton1 = e.target.value;
                        setAboutBanner(newAboutBanner);
                        localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                      }}/>
                      
                      </>
                    })}
                    </>
                  
                )}
              </>
            )}


      </div>
    </div>
  );
}

export default Dashboard;
