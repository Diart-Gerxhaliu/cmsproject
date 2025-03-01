import React from 'react'
import Image from '../atoms/Image'
import NavBar from '../molecules/NavBar'
import Navcomps from '../../json/Menu.json'
import Logo from '../../json/Logo.json'

function Menu() {
    localStorage.setItem("Logo", JSON.stringify(Logo));
    let LG = JSON.parse(localStorage.getItem("Logo"));

    localStorage.setItem("Navbar", JSON.stringify(Navcomps));
    let LN = JSON.parse(localStorage.getItem("Navbar"))
  return (
    <div className='menu'>
        <Image src={LG[0].image} alt={"logo"}/>
        <NavBar navlist={LN}/>
    </div>
  )
}

export default Menu
