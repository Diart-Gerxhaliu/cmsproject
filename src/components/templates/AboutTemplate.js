import React, { useEffect, useState } from 'react'
import Banner from '../organisms/Banner';
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';
import Desc from '../atoms/Desc';
import List from '../molecules/List';
import Button from '../atoms/Button';
import BannerJson from '../../json/About/Banner.json';
import AboutJson from '../../json/About/About.json';

function AboutTemplate() {
    
    let [ban, setBan] = useState([]);
  let [abo, setAbo] = useState([]);
    

  useEffect(() => {
    let banner = localStorage.getItem("AboutBanner");
    let aboutAbout = localStorage.getItem("AboutAbout");

    if (banner == null) {
        localStorage.setItem("AboutBanner", JSON.stringify(BannerJson))
    } else {
        setBan(JSON.parse(banner));
    }
    
    if(aboutAbout == null) {
        localStorage.setItem("AboutAbout", JSON.stringify(AboutJson))
    } else{
        setAbo(JSON.parse(aboutAbout))
    }
}, [])

return (
  <div>
    {ban.map((gal, index) => {
      return <Banner
        backImage={gal.imageBack}
        h1={gal.bannerHead}
        p={gal.bannerDesc}
        button1={gal.bannerButton1}
        button2={gal.bannerButton2}
        key={index}
      />
    })}
    {abo.map((gal, index) => {
      return <div className='about' key={index}>
        <div className='left'>
          <Image src={gal.aboutImage} />
        </div>
        <div className='right row'>
          <Heading child={gal.aboutHead} />
          <Desc child={gal.aboutDesc} />
            <div className='aboutList'>
              <List mapped={gal.aboutList} />
            </div>
            <Button child={gal.buttonDesc}/>
        </div>
      </div>
      })}
    </div>
  )
    
  
}

export default AboutTemplate
