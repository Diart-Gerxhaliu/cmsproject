import React, { useEffect, useState } from 'react'
import Image from '../atoms/Image'
import NavBar from '../molecules/NavBar'
import Navcomps from '../../json/Menu.json'
import Logo from '../../json/Logo.json'

function Menu() {

    let [lG, setLG] = useState([]);
    let [lN, setLN] = useState([]);
    let[menuStyle, setMenuStyle]= useState({})

    let style = {
      height: "90px",
      padding: "15px 50px",
      justifyContent: "space-between"

    }
  
    useEffect(() => {
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
}

export default Menu
