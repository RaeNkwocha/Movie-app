import React from 'react'
import './Css/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="grid">
                <div className="first-grid">
                <h1>Enjoy on your TV.</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                   
                    <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} alt={""} width="400" height="300"  autoPlay="true" />
            </div>
            <section className="footer-one">
            <div className="grid">
            <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} alt={""} width="400" height="300"   />
                <div className="first-grid">
                <h1>Download your shows to watch offline..</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>
                   
                   
            </div>
            </section>
            <section className="footer-one">
            <div className="grid">
           
                <div className="first-grid">
                <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                </div>
                   
                <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"} alt={""} width="400" height="300"   />
            </div>
            </section>
            <section className="footer-one">
            <h5>Questions?Contact us</h5>
            </section>
            <div className="flex">
          
                <div className="first-flex">
                
                    <h5>FAQ</h5>
                    <h5>Media Center</h5>
                    <h5>Ways to Watch</h5>
                    <h5>Cookie Preferences</h5>
                    <h5>Speed Test</h5>
                </div>
                <div className="second-flex">
                    <h5>FAQ</h5>
                    <h5>Media Center</h5>
                    <h5>Ways to Watch</h5>
                    <h5>Cookie Preferences</h5>
                    <h5>Speed Test</h5>
                </div>
                <div className="third-flex">
                    <h5>FAQ</h5>
                    <h5>Media Center</h5>
                    <h5>Ways to Watch</h5>
                    <h5>Cookie Preferences</h5>
                    <h5>Speed Test</h5>
                </div>
            </div>
        </div>
        
    )
}

export default Footer
