import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
// import logo from '../../../images/teathLogo.png';
import Subscription from '../../Home/Subscription/Subscription';

const Footer = () => {

    const noNamed = [
        {name: "Regular dental contactUss help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy." , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Treatment of Personal Diseases" , link: "/contactUs"},
        {name: "Tooth Extraction" , link: "/appointment"},
        {name: "Check Up" , link: "/contactUs"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Treatment of Personal Diseases" , link: "/contactUs"},
        {name: "Tooth Extraction" , link: "/appointment"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Treatment of Personal Diseases" , link: "/contactUs"},
        {name: "Tooth Extraction" , link: "/appointment"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"},
        {name: "Check Up" , link: "/contactUs"}
    ]

    return (
        <footer className="py-3 mt-5 footer-area clear-both">
            <div className="container">
                <div className="row py-3 mobile-view">
                    <FooterCol key={1} menuTitle={"iDental"} menuItems={noNamed} />
                    <FooterCol  key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol  key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="bt-brand">+8801860060068</button>
                        </div>
                    </FooterCol>
                </div>
                <Subscription></Subscription>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
            
        </footer>
        
    );
};

export default Footer;