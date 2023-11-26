// Import React and required components and styles

import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";
import Rating from 'react-rating-stars-component';
import { BsList } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//Images Imports
import logo from "../assets/logo.png";
import image1 from "../assets/Movie1.jpeg";
import image2 from "../assets/secondmovie.png";
import image3 from "../assets/Movie3.jpeg";
import star from "../assets/Star.png";
import icon from "../assets/icon.png";
import sectimage from "../assets/sect3image.png"
import robot1 from "../assets/robot1.jpeg"
import user1 from "../assets/user1.png"
import robot2 from "../assets/robot2.jpeg"
import user2 from "../assets/user2.png"
import robot3 from "../assets/robot3.jpeg"
import user3 from "../assets/user3.png"
import robot4 from "../assets/robot4.jpeg"
import user4 from "../assets/user4.png"
import robot5 from "../assets/robot5.jpeg"
import user5 from "../assets/user5.png"
import robot6 from "../assets/robot6.jpeg"
import user6 from "../assets/user6.png"
import verified from "../assets/verified.png"
import user7 from "../assets/user7.png"
import user8 from "../assets/user8.png"

// Section 1 begins
const LandingPage = () => {

  // State to control the menu visibility
  const [showMenu, setShowMenu] = useState(false);

   // Settings for the image slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '0',
  };

  // Images data for the image slider
  const images = [
    {
      original: image1,
      description: "Game 1",
    },
    {
      original: image2,
      description: "Game 2",
    },
    {
      original: image3,
      description: "Game 3",
    },
  ];

 
// Data for cards in Section 4
  const cardData = [
    {
      id: 1,
      image: robot1,
      text: 'core philosophies',
      userImage: user1,
      username: 'Cameron Williamson',

    },

    {
      id: 2,
      image: robot2,
      text: 'core philosophies',
      userImage: user2,
      username: 'Dianne Russell',
    },
    {
      id: 3,
      image: robot3,
      text: 'core philosophies',
      userImage: user3,
      username: 'Jane Cooper',
    },
    {
      id: 4,
      image: robot4,
      text: 'core philosophies',
      userImage: user4,
      username: 'Cody Fisher',
    },
    {
      id: 5,
      image: robot5,
      text: 'core philosophies',
      userImage: user5,
      username: 'Wade Warren',
    },
    {
      id: 6,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 7,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 8,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 9,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 10,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 11,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
    {
      id: 12,
      image: robot6,
      text: 'core philosophies',
      userImage: user6,
      username: 'Robert Fox',
    },
  ];

  // Data for cards in Section 5
  const cardSect5 = [
    {
      id: 1,
      description: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      userImage: user7,
      username: 'Arlene McCoy',
      usercompany: 'McDonalds',
      userverify: 'Verified'

    },
    {
      id: 2,
      description: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      userImage: user8,
      username: 'Kathryn Murphy',
      usercompany: 'General Electric',
      userverify: 'Verified'

    },

  ];

   // Function to handle menu click and toggle menu visibility
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Section 1 starts
  return (
    <main className="main">
      <div className="section1-container">
        <div className={`nav-main ${showMenu ? 'show-menu' : ''}`}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <p className="site-name">board</p>
          </div>
          {/* <div className="menu-icon" ></div> */}

          <BsList className="menu-icon" onClick={handleMenuClick} />
          <nav>

            <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>

              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Apps & Games</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <img src={icon} alt="Logo" className="icon" />
            </ul>
          </nav>
        </div>

        {/* Section1 mid code */}
        <div className="mid-section1">
          <p className="typography">
            Let your</p>
          <span className="typography">Mind</span> <span className="explore">Explore</span>
          <p className="typography">NEW WORLD</p>

          <p className="game-description">
            Playing electronic games, whether through consoles, computers, <br />
            screenshots, and information about release. mobile phones or another
            medium altogether. <br />Gaming is a nuanced  term that suggests
            regular gameplay, possibly as a hobby.
          </p>


          <button className="view-button">Buy Now</button>
          <button className="play-button">
            <span className="play-text">Play Now</span>
          </button>


          <p><span className="typography">300+</span><span className="explore">200+ </span>
            <span className="typography">500+</span> </p>
          <p><span className="mini1">Unique Style</span> <span className="mini2">Project finished </span>
            <span className="mini3">Happy customer</span> </p>
        </div>

        {/* section1 footer */}
        <div className="footer-container">
          <p className="typographyfooter">
            Gaming spaning <img src={star} />
          </p>

          <p className="typographyfooter">
            Action - packed <img src={star} />
          </p>

          <p className="typographyfooter">
            mind - bending <img src={star} />
          </p>

          <p className="typographyfooter">collection of games</p>
        </div>

      </div>
      {/* Section1 Ends here */}


      {/* Beginning of Section2 */}
      <div className="section2-container">
        <div className="sectioin2-mid"><p className="typography">
          CHOOSE YOUR<br></br>
        </p>

          <span className="explore">FAVOURITE </span>
          <span className="typography">games</span>
          <p className="game-description">
            Offer sneak peeks and previews of upcoming games, including trailers,
            screenshots, and information about release.
          </p></div>
          <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.original} alt={image.description} />
            </div>
          ))}
        </Slider>
      </div>

        <div className="sect2button-container">
          <button className="view-button">View All</button>
          <button className="play-button">Play Now</button>
        </div>
      </div>
      {/* Ends Here */}


      {/* Section 3 Starts here */}
      <div className="section3-container">
        <div className="header-section">
          <div className="header-content">
            <div className="header-titles">
              <div className="header-title">
                Gaming spanning <img src={star} />
              </div>
              <div className="header-title">
                Action - packed <img src={star} />
              </div>
              <div className="header-title">
                Mind - bending <img src={star} />
              </div>
              <div className="header-title">Collection of games</div>
            </div>
            <img className="header-image" />
            <div className="play-now-container">
              <button className="play-button">Play Now</button>
            </div>
            <div className="header-discovery-text">
              <span>Discover the </span>
              <span>Virtual</span>
              <span> Reality Gaming </span>
            </div>
            <div className="header-subtitle">
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </div>
            <img
              className="header-background-image"
              src={sectimage}
              alt="Background Image"
            />
          </div>
        </div>{" "}
      </div>
      {/* Section 3 Ends here */}


      {/* Section 4 starts here */}

      <div className="section4-container">
        <div className="secttion4-mid"> <p className="typography">
          Welcome to the<br></br>
        </p>

          <p className="typographygame">
            top <span className="explore">games</span>
          </p></div>

        <div className="button-container">
          <button className="view-button">View All</button>
          <button className="play-button">Play Now</button>
          <button className="play-button">Play Now</button>
          <button className="play-button">Play Now</button>
        </div>
        <div className="card-container">
          {cardData.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={`Card ${card.id}`} />
              <p>
                <span className="card-text">{card.text}</span>
              </p>
              <div className="user-circle">
                <img src={card.userImage} alt={`User ${card.id}`} />
                <span className="username">{card.username}</span>
              </div>
              <button className="livedemo-button">Live Demo</button>
            </div>
          ))}
        </div>
      </div>
      {/* Section4 ends Here */}


      {/* Testimonoals Section Starts Here */}
      <div className="section5-container">
        <div className="testimonials-content">
          <div className="testimonials-titles">
            <div className="testimonials-title">
              Gaming spanning <img src={star} />
            </div>
            <div className="testimonials-title">
              Action - packed <img src={star} />
            </div>
            <div className="testimonials-title">
              Mind - bending <img src={star} />
            </div>
            <div className="testimonials-title">Collection of games</div>
          </div>
        </div>

        {/* Testimonials Cards*/}
        <div className="sect5card-container">
          {cardSect5.map((card) => (
            <div className="sect5card" key={card.id}>
              <div className="sect5rating">
                <Rating
                  count={5}
                  value={card.rating}
                  size={24}
                  activeColor="#ffd700"
                  inactiveColor="#d3d3d3"
                  edit={false}
                />
              </div>
              <p className="sect5description">{card.description}</p>
              <div className="sect5divider"></div>
              <div className="sect5user-info">
                <img src={card.userImage} alt={`User ${card.id}`} className="sect5user-image" />
                <div className="sect5user-details">
                  <span className="sect5username">{card.username}</span>
                  <div className="sect5user-details">
                    <span className="sect5usernamecompany">{card.usercompany}</span>
                  </div>
                </div>
                <div className="sect5verification">
                  {/* Verification icon */}
                  <span><img src={verified} ></img >{""}</span> <span className="sect5verified-text">{card.userverify}</span>
                </div>
                {/* Verification icon ends here */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonoals Section Ends Here */}


      {/* Footer Section6 Starts Here */}
      <div className="section6-container">
        <div className="testimonials-content">
          <div className="testimonials-titles">
            <div className="testimonials-title">
              Gaming spanning <img src={star} />
            </div>
            <div className="testimonials-title">
              Action - packed <img src={star} />
            </div>
            <div className="testimonials-title">
              Mind - bending <img src={star} />
            </div>
            <div className="testimonials-title">Collection of games</div>
          </div>
        </div>


        {/* Footer Content*/}
        <div className="sect6card-container">
        </div>

        <div className="footer-groupitems">
          <div className="footerlogo-section">
            <span><img src={logo} alt="Logo" /></span> <span className="sect6footer-text">Board</span>
            <p>A well-designed gaming header often <br></br>
              incorporates elements such as game <br></br>
              characters, iconic symbols, vibrant <br></br>
              colors, and dynamic visuals.</p>
            
          </div>
          <div className="footer-items">
            <span className="sect5verified-text">Company</span>

            <p>Products</p>
            <p>Apps & Games</p>
            <p>Features</p>
          </div>
          <div className="footer-items1">
            <span className="sect5verified-text">Help</span>

            <p>Support</p>
            <p>About & Games</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-items2">
            <span className="sect5verified-text">Resource</span>
            <p>YouTube Playlist</p>
            <p>How-to Blog</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <p className="copyright-footer">© Copyright 2023, All Rights Reserved by board</p>

      </div>
    </main>
  );
};

export default LandingPage;
