import Abo from '../../json/Home/About.json'
import Ban from '../../json/Home/Banner.json'
import Banner from '../organisms/Banner';
import Desc from '../atoms/Desc';
import Heading from '../atoms/Heading';
import Serve from '../../json/Home/HomeServices.json'
import Image from '../atoms/Image';
import List from '../molecules/List';
import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import '../../pages/home.css'



function HomeTemplate() {
    let [ban, setBan] = useState([]);
    let [abo, setAbo] = useState([]);
    let [srv, setSrv] = useState([]);

    useEffect(() => {
    
        let banner = localStorage.getItem("HomeBanner");
        let abouthome = localStorage.getItem("HomeAbout");
        let services = localStorage.getItem("HomeServices");

        if (banner == null) {
            localStorage.setItem("HomeBanner", JSON.stringify(Ban))
        } else {
            setBan(JSON.parse(banner));
        }
    
        if(abouthome == null) {
            localStorage.setItem("HomeAbout", JSON.stringify(Abo))
        } else{
            setAbo(JSON.parse(abouthome))
        }

        if (services == null) {
            localStorage.setItem("HomeServices", JSON.stringify(Serve))
        } else{
            setSrv(JSON.parse(services))
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
                return <div className='abouthome' key={index}>
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
            {srv.map((gal,index)=>{
                return <div className='servicesHome' key={index}>
                    <h1>{gal.head}</h1>
                    
                    <List mapped={gal.card}/>
                    
                </div>
            })}

        </div>
    );
}

export default HomeTemplate;
