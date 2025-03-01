import React, { useEffect, useState } from 'react'
import Banner from '../organisms/Banner';
import ContactBanner from '../../json/Contact/Banner.json'
import IconContact from '../../json/Contact/IconContact.json'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading';
import Desc from '../atoms/Desc';
import ContactFormJson from '../../json/Contact/Contact.json'
import Button from '../atoms/Button';
import Input from '../atoms/Input';

function ContactTemplate() {
    let [contactBanner, setContactBanner] = useState([]);
    let [contactContacts, setContactContacts] = useState([])
    let [contactForm, setContactForm] = useState([])
  
    useEffect(() => {
      let banner = localStorage.getItem("ContactBanner");
      let contact = localStorage.getItem("ContactContact");
      let form = localStorage.getItem("ContactForm");
      
      if (banner == null) {
          localStorage.setItem("ContactBanner", JSON.stringify(ContactBanner))
      } else {
          setContactBanner(JSON.parse(banner));
      }

    if (contact == null) {
        localStorage.setItem("ContactContact", JSON.stringify(IconContact))
    } else {
        setContactContacts(JSON.parse(contact));
    }
    
    if (form == null) {
        localStorage.setItem("ContactForm", JSON.stringify(ContactFormJson))
    } else {
        setContactForm(JSON.parse(contact));
    }
      
  }, [])
  return (
    <div>
      {
      contactBanner.map((gal, index) => {
      return <Banner
        backImage={gal.imageBack}
        h1={gal.bannerHead}
        p={gal.bannerDesc}
        button1={gal.bannerButton1}
        button2={""}
        key={index}
      />
    })}
    <div className='contactless'>
    {
        contactContacts.map((gal, index)=>{
            return <div className='places' key={index}>
                <Image src={gal.icon} alt={""}/>
                <div className='texts'>
                    <Heading child={gal.head}/>
                    <Desc child={gal.desc}/>
                </div>
            </div>
        })
    }
    </div>

    <div className='form'>
    {contactForm.map((gal, index) => (
        <div className='formation' key={index}>
            <div className='box'>
            {gal.form.map((list, i) => {
                return <Input 
                    key={i}
                    type={list.type} 
                    name={list.name}
                    placeholder={list.placeholder}
                />
            })}
            </div>
            <textarea 
                name={gal.textName} 
                cols='13' 
                rows='7'
                placeholder={gal.textPlaceholder}>
                    
                </textarea>
            <Button child={gal.buttonText} />
        </div>
    ))}
    </div>


    </div>
  )
}

export default ContactTemplate
