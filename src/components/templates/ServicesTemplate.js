import React, { useEffect, useState } from 'react'
import BannerJson from '../../json/Service/Banner.json'
import GaleryJson from '../../json/Service/Galery.json'
import Banner from '../organisms/Banner';
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';

function ServicesTemplate() {

    let [servicesBanner, setServicesBanner] = useState([]);
    let [servicesGalery, setServicesGalery] = useState([]);
  
    useEffect(() => {
      let banner = localStorage.getItem("ServicesBanner");
      let galery = localStorage.getItem("ServicesGalery");
  
      if (banner == null) {
          localStorage.setItem("ServicesBanner", JSON.stringify(BannerJson))
      } else {
          setServicesBanner(JSON.parse(banner));
      }
      
      if(galery == null) {
          localStorage.setItem("ServicesGalery", JSON.stringify(GaleryJson))
      } else{
          setServicesGalery(JSON.parse(galery))
      }
  }, [])
  return (
    <div>
      {
      servicesBanner.map((gal, index) => {
      return <Banner
        backImage={gal.imageBack}
        h1={gal.bannerHead}
        p={gal.bannerDesc}
        button1={gal.bannerButton1}
        button2={""}
        key={index}
      />
    })}
        <div className='imagesGalery'>
            <div className='row '>
        {
            servicesGalery.map((gal,index)=>{
                return <div key={index} className='galery'>
                    <Image src={gal.galery} alt={""}/>
                    <Heading child={gal.text}/>
                </div>
            })
        }
        </div>
        </div>
    </div>
  )
}

export default ServicesTemplate
