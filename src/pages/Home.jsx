import React, { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed-top">
        <h1 className="dm-sans">TOLULOPE</h1>
        <nav className="poppins">
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
        <img
          className="menu-icon"
          src="images/icon-hamburger.svg"
          width="25px"
          height="18px"
          alt="Menu Icon"
          onClick={toggleMenu} 
        />
      </header>

            <section id="home" className="home ">
                <div className="about-me open-sans animate__animated animate__pulse">
                    <h1>Nice to meet you! I'm <span>Arowosegbe Tolulope.</span></h1>
                    <p className="occupation">I am a Frontend web developer based in Nigeria,my journey started out of curiousity but the more i learned the more I was hooked and that was what brought me to where i am today, i'm eager to expand my knowledge and take on new challenges.</p>
                    <a href="#contact">CONTACT ME</a>
                </div>
                <div className="profile-container ">
                    <img className="profile" src="images/profile1-removebg-preview.jpg" alt="Profile" />
                    <img className="illustration" src="images/white-circle-outline.png" alt="Illustration" />
                </div>
            </section>
            <hr id="border-line" />

            <div className="languages-grid poppins ">
                <div>
                    <p className="language-type">HTML</p>
                    <p className="experience">1 year of experience</p>
                </div>
                <div>
                    <p className="language-type">CSS</p>
                    <p className="experience">1 year of experience</p>
                </div>
                <div>
                    <p className="language-type">JAVASCRIPT</p>
                    <p className="experience">6 months of experience</p>
                </div>
                <div>
                    <p className="language-type">REACT</p>
                    <p className="experience">2 months of experience</p>
                </div>
                <div>
                    <p className="language-type">PYTHON</p>
                    <p className="experience">2 months of experience</p>
                </div>
                <div>
                    <p className="language-type">BOOTSTRAP</p>
                    <p className="experience">1 year of experience</p>
                </div>
            </div>

            <section id="projects" className="projects">
                <h2 className="dm-sans">Some of the projects I have worked on</h2>
                <div className="project-container open-sans">
                    <div>
                        <img className="project-img" src="images/sunnyside.png" width="100%" alt="Sunnyside Agency Landing Page" />
                        <p className="project-name">SUNNYSIDE AGENCY LANDING PAGE</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="https://tolu-sunnyside-landingpage.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/calculator.png" width="100%" alt="Calculator" />
                        <p className="project-name">CALCULATOR</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="https://devtolu-calculator.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/perfumewebsite.png" width="100%" alt="Chanel Perfumes Website" />
                        <p className="project-name">CHANEL PERFUMES WEBSITE</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="#" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/weathersite.png" width="100%" alt="Weather Site" />
                        <p className="project-name">WEATHER SITE</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="#" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/restaurant.png" width="100%" alt="Restaurant Website" />
                        <p className="project-name">RESTAURANT WEBSITE</p>
                        <p className="project-language">HTML CSS JS BOOTSTRAP</p>
                        <a href="https://tolu-delicieux-restaurant.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/budget-tracker.png" width="100%" alt="Budget tracker" />
                        <p className="project-name">BUDGET TRACKER</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="https://tolu-budget-tracker.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/book-haven.png" width="100%" alt="FAQ Accordion" />
                        <p className="project-name">BOOKHAVEN WEBSITE</p>
                        <p className="project-language">HTML CSS REACT</p>
                        <a href="https://book-haven-ruddy.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/didi-travels.png" width="100%" alt="Result Summary Page" />
                        <p className="project-name">DIDI-TRAVELS-WEBSITE</p>
                        <p className="project-language">HTML REACT BOOSTRAP</p>
                        <a href="https://didi-travels-tours.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/boomplay.png" width="100%" alt="Boomplay Website" style={{ border: "1px solid #ffffff4d" }} />
                        <p className="project-name">BOOMPLAY CLONE</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="https://tolu-boomplaywebsite.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                    <div>
                        <img className="project-img" src="images/travelsite.png" width="100%" alt="TravelBotswana Website" />
                        <p className="project-name">TRAVELBOTSWANA WEBSITE</p>
                        <p className="project-language">HTML CSS JS</p>
                        <a href="https://tolu-boomplaywebsite.vercel.app/" className="project-button">VIEW PROJECT</a>
                    </div>
                </div>
            </section>

            <footer id="contact">
                <div className="contact-grid">
                    <div className="final-remark">
                        <h2 className="">Contact</h2>
                        <p className="open-sans">I am still learning but hope to get better in the future. If you love my work and would like to work with me on a future project, please fill out the form.</p>
                    </div>
                    <div className="contact-form">
                        <form action="https://formsubmit.co/b7078fb9e96eee26dca84c3466dafc49" method="POST">
                            <input type="text" name="fullname" placeholder="NAME" />
                            <input type="email"name="email" placeholder="EMAIL" />
                            <textarea cols="30" rows="3" name="message" placeholder="MESSAGE"></textarea>
                            <button className="submit-button" type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
                <div className="social-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tolusarah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <img className="media-link" src="images/linkedin.png" width="30px" alt="LinkedIn" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:arowosegbetolu8@gmail.com">
                        <img className="media-link" src="images/email.png" width="30px" alt="Email" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tolulope-as">
                        <img className="media-link" src="images/github.png" width="30px" alt="GitHub" />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Home;
