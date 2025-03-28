import React, { useState } from "react";
import { FaCode, FaUsers, FaLayerGroup } from "react-icons/fa";
import "./ServicesTemplate.css";
import ServiceData from "../../json/Service/ServiceData.json";
import Banner from "../organisms/Banner";
import bannerImage from "../../assets/backimg.jpg";
import ServiceImage from "../../assets/ServiceImage.jpg";

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
const icons = {
  code: <FaCode className="icon" />,
  users: <FaUsers className="icon" />,
  layers: <FaLayerGroup className="icon" />,
};

const ServiceTemplate = () => {
  const [services] = useState(ServiceData);

  const gal = {
    imageBack: bannerImage,
    bannerHead: "Our Services",
    bannerDesc: "Explore the best solutions for your business.",
    bannerButton1: "Get Started",
  };

  return (
    <div className="services-container">
      <Banner
        backImage={gal.imageBack}
        h1={gal.bannerHead}
        p={gal.bannerDesc}
        button1={gal.bannerButton1}
        button2={""}
      />

      <div className="content-section">
        <div className="image-container">
          <img
            src={ServiceImage}
            alt="Business"
            className="service-image" 
          />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{icons[service.icon]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="more-button">MORE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
