import React, {useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  // * States of this page
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [data, setData] = useState("dash");
  const [dark, setDark] = useState(false);
  let admin = useState(JSON.parse(localStorage.getItem("admin")));
  const [page, setPage] = useState("Home");
  const [style, setStyle] = useState("General");

  //! Content
  //* home page localStorage import
  let [homeBanner, setHomeBanner] = useState(JSON.parse(localStorage.getItem("HomeBanner"))||[]);
  let [homeAbout, setHomeAbout] = useState(JSON.parse(localStorage.getItem("HomeAbout"))||[]);
  let [homeServices, setHomeServices] = useState(JSON.parse(localStorage.getItem("HomeServices"))||[]); 
  
  //* about page localStorage import
  let [aboutBanner, setAboutBanner] = useState(JSON.parse(localStorage.getItem("AboutBanner"))||[]);
  let [aboutAbout, setAboutAbout] = useState(JSON.parse(localStorage.getItem("AboutAbout"))||[]); 

  //* services page localStorage import
  let [servicesBanner, setServicesBanner] = useState(JSON.parse(localStorage.getItem("ServicesBanner"))||[]);
  let [servicesGalery, setServicesGalery] = useState(JSON.parse(localStorage.getItem("ServicesGalery"))||[]); 


  //* feedback page localStorage import
  let feedback = JSON.parse(localStorage.getItem("ContactForm"));

  //* logo import
  let LG = JSON.parse(localStorage.getItem("Logo"));

  //! Style
  //*Body
  let [bodyStyle, setBodyStyle] = useState(JSON.parse(localStorage.getItem("BodyStyle")))
  //*Menu
  let [menuStyle, setMenuStyle] = useState(JSON.parse(localStorage.getItem("MenuStyle"))||[]); 
  //*Banner
  let [bannerStyle, setBannerStyle] = useState(JSON.parse(localStorage.getItem("BannerStyle"))||[]); 



  //use Effect

  useEffect(() => {
    
    localStorage.setItem("ServicesGalery", JSON.stringify(servicesGalery));
  }, [servicesGalery]);

  if (dark) {
    document.body.style.background= "black";
  }else{
    document.body.style.background= "white";
    
  }

  if (!admin) {
    window.location.href='/admin/login'
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
              setSelectedMenu("Style");
              setData("style");
            }}
          >
            Style
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
              <div className="tableWrapper" 
              style={dark
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

        {data === "style" && (
          <div className='style'>
            <div className='row'>
                  <button 
                    type='button'
                    onClick={() => setStyle("General")}
                  >General</button>
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
            {style === "General" && (
              <div className='general'>

                <div className='bodyGeneral stylesSpan'>
                  <h1>Body</h1>
                    <div>
                      <h3>Font Family</h3>
                      <input 
                        type="text"
                        name="change"
                        value={bodyStyle.fontFamily}
                        onChange={(e) => {
                          const newStyle = {...bodyStyle};
                          newStyle.fontFamily = e.target.value;
                          setBodyStyle(newStyle);  
                          localStorage.setItem("BodyStyle", JSON.stringify(newStyle));
                        }}
                      />
                    </div>
                    <div>
                      <h3>Text Align</h3>
                      <input 
                        type="text"
                        name="change"
                        value={bodyStyle.textAlign}
                        onChange={(e) => {
                          const newStyle = {...bodyStyle};
                          newStyle.textAlign = e.target.value;
                          setBodyStyle(newStyle);  
                          localStorage.setItem("BodyStyle", JSON.stringify(newStyle));
                        }}
                      />
                    </div>
                </div>
                
                <div className='menuGeneral stylesSpan'>
                  <h1>Menu</h1>
                  <div>
                    <h3>Height</h3>
                    <input 
                      type="text"
                      name="change"
                      value={menuStyle.height}
                      onChange={(e) => {
                        const newStyle = {...menuStyle};
                        newStyle.height = e.target.value;
                        setMenuStyle(newStyle);  
                        localStorage.setItem("MenuStyle", JSON.stringify(newStyle));
                      }}
                    />
                  </div>
                  <div>
                    <h3>Justify Content</h3>
                    <input 
                    type="text"
                    name="change"
                    value={menuStyle.justifyContent}
                    onChange={(e) => {
                      const newStyle = {...menuStyle};
                      newStyle.justifyContent = e.target.value;
                      setMenuStyle(newStyle);  
                      localStorage.setItem("MenuStyle", JSON.stringify(newStyle));
                    }}
                  />
                  </div>
                  <div>
                    <h3>Padding</h3>
                  <input 
                    type="text"
                    name="change"
                    value={menuStyle.padding}
                    onChange={(e) => {
                      const newStyle = {...menuStyle};
                      newStyle.padding = e.target.value;
                      setMenuStyle(newStyle);  
                      localStorage.setItem("MenuStyle", JSON.stringify(newStyle));
                    }}
                  />
                  </div>
                </div>

                <div className='bannerGeneral stylesSpan'>
                    <h1>Banner</h1>
                    <div>
                      <h3>Height</h3>
                      <input 
                        type="text"
                        name="change"
                        value={bannerStyle.height}
                        onChange={(e) => {
                          const newStyle = {...bannerStyle};
                          newStyle.height = e.target.value;
                          setBannerStyle(newStyle);  
                          localStorage.setItem("BannerStyle", JSON.stringify(newStyle));
                        }}
                      />
                    </div>
                </div>
                    
              </div>
            )}

            {style === "Home"}


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
                {page === "About" && (
              <>
                {aboutBanner && (
                    <>
                    {aboutBanner.map((gal,index)=>{
                      return<div className="aboutBanner">
                        <h1>Banner</h1>
                      <input 
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
                      
                      </div>
                    })}
                    {aboutAbout.map((gal,index)=>{
                      return<div className="aboutAbout">
                        <h1>About</h1>
                        <input 
                        key={index}
                        type='text' 
                        name='change' 
                        value={gal.aboutImage} 
                        onChange={(e)=>{
                          const newAboutBanner = [...aboutBanner];
                          newAboutBanner[index].aboutImage = e.target.value;
                          setAboutAbout(newAboutBanner);
                          localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                        }}/>
                        <input 
                        key={index}
                        type='text' 
                        name='change' 
                        value={gal.aboutHead} 
                        onChange={(e)=>{
                          const newAboutBanner = [...aboutBanner];
                          newAboutBanner[index].aboutHead = e.target.value;
                          setAboutAbout(newAboutBanner);
                          localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                        }}/>
                        <input 
                        key={index}
                        type='text' 
                        name='change' 
                        value={gal.aboutDesc} 
                        onChange={(e)=>{
                          const newAboutBanner = [...aboutBanner];
                          newAboutBanner[index].aboutDesc = e.target.value;
                          setAboutAbout(newAboutBanner);
                          localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                        }}/>
                        {gal.aboutList.map((serie,i)=>{
                          return <>
                            <input 
                              key={index}
                              type='text' 
                              name='change' 
                              value={serie.image} 
                              onChange={(e)=>{
                                const newAboutBanner = [...aboutBanner];
                                newAboutBanner[index].image = e.target.value;
                                setAboutAbout(newAboutBanner);
                                localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                              }}/>
                          </>
                        })}
                        <input 
                        key={index}
                        type='text' 
                        name='change' 
                        value={gal.buttonDesc} 
                        onChange={(e)=>{
                          const newAboutBanner = [...aboutBanner];
                          newAboutBanner[index].buttonDesc = e.target.value;
                          setAboutAbout(newAboutBanner);
                          localStorage.setItem("AboutBanner", JSON.stringify(newAboutBanner))
                        }}/>
                      </div>
                    })
                    }
                    </>
                  
                )}

                
              </>
                )}
                {page === "Services" && (
                  <>
                    {servicesBanner && (
                        <>
                        {servicesBanner.map((gal,index)=>{
                          return<div className="servicesBanner">
                            <h1>Banner</h1>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={gal.imageBack} 
                            onChange={(e)=>{
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].imageBack = e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem("ServicesBanner", JSON.stringify(newServicesBanner))
                            }}/>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={gal.bannerHead} 
                            onChange={(e)=>{
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].bannerHead = e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem("ServicesBanner", JSON.stringify(newServicesBanner))
                            }}/>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={gal.bannerButton1} 
                            onChange={(e)=>{
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].bannerButton1 = e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem("ServicesBanner", JSON.stringify(newServicesBanner))
                            }}/>
                          </div>
                        })
                        }
                      <div className='servicesGalery'>
                      <h1>Galery</h1>
                      {servicesGalery.map((gal,index)=>{
                        return <div>
                          <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={gal.galery} 
                            onChange={(e)=>{
                              const newServicesGalery = [...servicesGalery];
                              newServicesGalery[index].galery = e.target.value;
                              setServicesGalery(newServicesGalery);
                              localStorage.setItem("ServicesGalery", JSON.stringify(newServicesGalery))
                            }}/>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={gal.text} 
                            onChange={(e)=>{
                              const newServicesGalery = [...servicesGalery];
                              newServicesGalery[index].text = e.target.value;
                              setServicesGalery(newServicesGalery);
                              localStorage.setItem("ServicesGalery", JSON.stringify(newServicesGalery))
                            }}/>
                        </div>
                        
                      })}
                      </div>

                      </>
                      
                    )}

                    
                  </>
                )}
                
              </>
        )}

        {data === "feedback" && (
          <div className="feedback">
            {feedback.length > 0 ? (
              feedback.map((gal, index) => (
                <div className="card" key={index}>
                  <h1>{gal.name}</h1>
                    <h2>{gal.subject}</h2>
                  <div className="row">
                    <h2>{gal.phone}</h2>
                    <h2>{gal.email}</h2>
                  </div>
                  <p>{gal.message}</p>
                </div>
              ))
            ) : (
              <p className="noFeedback">No one said anything</p>
            )}
          </div>
        )}


        {data === "posts" && (
          <div className='posts'>
          <div className='postsGalery'>
            {servicesGalery.map((gal,index)=>{
              return <div className="card" key={index}>
                
                    <img src={gal.galery} alt='' />
                    <h1>{gal.text}</h1>
                    <button type='button'
                    onClick={()=>{
                      setServicesGalery(servicesGalery.filter((_, i) => i !== index));
                    }}>
                      Remove
                    </button>


                  </div>
              
                        
            })}
            </div>
            <button type='button' id="addButton" onClick={()=>{
                  const newItem = {
                    galery: "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg", 
                    text: `UI/UX design`,
                  };
                  setServicesGalery([...servicesGalery, newItem]);
            }}>Add new+</button>
          </div>
        )}
            

      </div>
    </div>
  );
}

export default Dashboard;
