<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Image from '../atoms/Image'
import NavBar from '../molecules/NavBar'
import Navcomps from '../../json/Menu.json'
import Logo from '../../json/Logo.json'

function Menu() {

    let [lG, setLG] = useState([]);
    let [lN, setLN] = useState([]);
    let[menuStyle, setMenuStyle]= useState({})

    
  
    useEffect(() => {
      let style = {
        height: "90px",
        padding: "15px 50px",
        justifyContent: "space-between"
  
      }

      let styleLS = localStorage.getItem("MenuStyle"); 
      let logo = localStorage.getItem("Logo");
      let comps = localStorage.getItem("Navbar");
      
      if(styleLS==null){
        localStorage.setItem("MenuStyle", JSON.stringify(style))
      } else {
          setMenuStyle(JSON.parse(styleLS));
      }

      if (logo == null) {
          localStorage.setItem("Logo", JSON.stringify(Logo))
      } else {
          setLG(JSON.parse(logo));
      }
      
      if(comps == null) {
          localStorage.setItem("Navbar", JSON.stringify(Navcomps))
      } else{
          setLN(JSON.parse(comps))
      }
  }, [])


    
  return (
    <div className='menu' style={menuStyle}>
      {
        lG.map((gal)=>{
          return <Image src={gal.image} alt={"logo"}/>
        })
      }
        
        <NavBar navlist={lN}/>
    </div>
  )
=======
import React, { useEffect, useState } from 'react';
import Image from '../atoms/Image'; 
import NavBar from '../molecules/NavBar';
import Navcomps from '../../json/Menu.json'; 
import Logo from '../../json/Logo.json'; 

function Menu() {
    useEffect(() => {
        localStorage.setItem("Logo", JSON.stringify(Logo));
        
        localStorage.setItem("Navbar", JSON.stringify(Navcomps));
    }, []); 
    let LG = JSON.parse(localStorage.getItem("Logo"));
    let LN = JSON.parse(localStorage.getItem("Navbar"));

    const logoImage = LG && LG[0]?.image ? LG[0].image : '';
    console.log(logoImage);
    

    return (
        <div className='menu'>
            {logoImage && <Image src={logoImage} alt="logo" />}
            
            <NavBar navlist={LN} />
        </div>
    );
>>>>>>> 66e4945 (so many changes)
}

export default Menu;
