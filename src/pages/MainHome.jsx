import React from "react";
import '../styles/MainHome.css';
import Pay from '../assets/Payme.png'
import bigimage from '../assets/big-image.jpg'
import plandy from '../assets/plandy.png'
import servicecard from '../assets/Services cards.png'
import whiteman from '../assets/whiteman.png'
import star from '../assets/Group of star.png'
import arrow from '../assets/arrows.png'
import vectorgroup from '../assets/vector group.png'
import footer from '../assets/footer.png'

const MainHome=()=>{
    return(
        <div className="main-home-control">
            <div className="main-home">
            <div className="nav-anchor">
                <div className="left-nav">
                <img src={Pay} alt="" />
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact</a>
                </div>
                <div className="nav-main-button">
                    <button className="nav-b-1">Sign in</button>
                    <button className="nav-b-2">Sign up</button>
                </div>
                </div>
            </div>

            <div className="section-2">
                <div className="section-2-control">
                <div className="bothsection-control">
                    <div className="section-2-1">
                        <div className="providing"><p>Providing Best</p></div>
                        <div className="web-services"><h1>WEB Services</h1></div>
                        <div className="letter-become"><p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p></div>
                        <div className="get-button">
                            <button className="get">Get Started</button>
                            <button className="explore">Explore</button>
                        </div>
                    </div>

                    <div className="section-2-2">
                            <img className="big-image" src={bigimage} alt="" />
                    </div>
                </div>
                </div>
            </div>
            
            <div className="section-3">
                <div className="section3-control">
                    <div className="section3-final-control">
                            <img className="plandy" src={plandy} alt="" />
                    </div>
                </div>
            </div>


            <div className="section-best-services">
                <div className="fist-contrl">
                    <div className="last-control">
                            <div className="best-services">
                            <div className="best-best"><h1>Best</h1></div> 
                            <div className="service-service"><h1>Sevices</h1></div>
                            </div>
                            <div className="letter-of">
                            <div><p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p></div>
                            </div>
                    </div>
                </div>
            </div>


            <section className="section-curve">
                <div className="section-control">
                    <div className="curve-control-all">
                        <div className="all-web-anco">
                        <img className="service-card" src={servicecard} alt="" />
                        </div>
                        <div className="explore-all">
                            <button className="explore-button">Explore All</button>
                        </div>
                    </div>
                </div>
            </section>


            <div className="section-feature">
                <div className="fist-contrl">
                    <div className="our-control">
                            <div className="best-services">
                            <div className="best-best"><h1>Our</h1></div> 
                            <div className="service-service"><h1>Features</h1></div>
                            </div>
                            <div className="letter-of">
                            <div><p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p></div>
                            </div>
                        <div className="all-box-control">
                            <div className="work-all-control">
                            <div className="work-main-control">
                            <div className="work-load"> 
                               <p className="work-load-p">Work Load</p> 
                               <p className="outward">Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                                <p className="learn-more">Learn More</p>
                            </div>
                            </div>
                            </div>

                            <div className="work-all-control">
                            <div className="work-main-control">
                            <div className="work-load-1"> 
                               <p className="work-load-p">Work Load</p> 
                               <p className="outward">Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                                <p className="learn-more">Learn More</p>
                            </div>
                            </div>
                            </div>

                            <div className="work-all-control">
                            <div className="work-main-control">
                            <div className="work-load-1"> 
                               <p className="work-load-p">Work Load</p> 
                               <p className="outward">Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                                <p className="learn-more">Learn More</p>
                            </div>
                            </div>
                            </div>
  
                    </div>
                        <div className="explore-all">
                            <button className="explore-button">Explore All</button>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="section-client-say">
                    <div className="client-say-control">
                        <div className="main-client">
                                <p className="what-p">What</p>
                                <p className="clieaents-p">Clients</p>
                                <p className="what-p">Say</p>
                        </div>
                    </div>

                    <div className="whiteman-anco">
                                    <div className="whiteman-control">
                                    <div className="whiteman">
                                        <img className="white-img" src={whiteman} alt="" />
                                        <div className="best-developer-box">
                                            <p className="best-dev-dev">Best Developers</p>
                                            <p className="outward-regular">Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
                                            <img className="star-img" src={star} alt="" />
                                            <p className="robert-jj">Robert Johnson</p>
                                            <p className="outward-regular">Director at Behance</p>
                                        </div>
                                    </div>
                                    </div>
                    </div>
                                <div className="arrows-l-r">
                                <img src={arrow} alt="" />
                                </div>
            </div>

            <div className="pricing-section">
                <div  className="pricing-sec-control">
                    <div className="pricing-main">
                    <p className="our-pric">Our</p>
                    <p className="pricing-price">Pricing</p>
                    <p className="pricing-price"> Plan</p>
                    </div>
                </div>
            </div  >
            <div className="started-control">
            <div className="for-starter">
                <p className="starter-pp">For Starter</p>
                <p className="dolars">$59</p>
                <img className="vectors" src={vectorgroup} alt="" />
                <button className="demo-button">Request Demo</button>
            </div>
            
            <div className="for-starter-1">
                <p className="starter-pp-1">For Teams</p>
                <p className="dolars-1">$99</p>
                <img className="vectors" src={vectorgroup} alt="" />
                <button className="demo-button">Request Demo</button>
            </div>

            <div className="for-starter-2">
                <p className="starter-pp">For Company</p>
                <p className="dolars">Custom</p>
                <img className="vectors" src={vectorgroup} alt="" />
                <button className="demo-button">Contact Us</button>
            </div>
            </div>

            <div className="faq">
                <div className="faq-control">
                    <p className="faq-p">FAQs</p>
                    <div className="she-met">
                        <div className="she-met-maincontrol">
                        <p className="she-p">she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                        <p className="relation-p">Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </div>
                    </div>

                    <div className="she-met-2">
                        <div className="she-met-maincontrol-2">
                        <p className="she-p">And excellence partiality estimating terminated day everything?</p>
                        </div>
                    </div>

                    <div className="she-met-2">
                        <div className="she-met-maincontrol-2">
                        <p className="she-p">Latter person am secure of estate genius at?</p>
                        </div>
                    </div>

                    <div className="she-met-2">
                        <div className="she-met-maincontrol-2">
                        <p className="she-p">Whatever landlord yourself at by pleasure of children be?</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <img className="footer-img" src={footer} alt="" />
                </div>
            </div>



        </div>
    )
}

export default MainHome