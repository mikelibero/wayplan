import Image from 'next/image';
import React, { useEffect } from "react";

export interface Home_SurfacesHeaderProps { }

const Home_SurfacesHeader: React.FC<Home_SurfacesHeaderProps> = ({ ...props }) => {


  const handleResize = () => {
    var elements = document.getElementsByClassName('js-height-full');
    var element = elements[0] as HTMLElement;
    element.style.height = document.documentElement.clientHeight + "px";
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const { IMAGES_URL } = process.env;

  return (
    <section className="z-0 parallax-2 relative">

      <Image className="z-0 relative" src={IMAGES_URL + '/uploads/section_bg_5_7d9b7a306b.jpg'} alt="bg" width={1500} height={108} />

      <div className="js-height-full">
        <div className="home-content container">
          <div className="home-text">
            {/* <h1 className="hs-line-8 font-alt mb-50 mb-xs-30">Unique experience with</h1>
            <h2 className="hs-line-11 font-alt mb-50 mb-xs-30"> Rhythm Creative Studio</h2> 
            <div className="local-scroll">
              <a href="#about" className="btn btn-mod btn-medium btn-round hidden-xs">See More</a>
              <span className="hidden-xs">&nbsp;</span>
              <a href="https://www.youtube.com/watch?v=I6jmZ5plZ3o" className="btn btn-mod btn-medium btn-round lightbox mfp-iframe">Play Reel</a>
            </div>
            */}
          </div>
        </div>
        <div className="local-scroll">
          <a href="#about" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon" aria-hidden="true"></i><span className="sr-only">Scroll to the next section</span></a>
        </div>
      </div>
    </section>
  );
};

export default Home_SurfacesHeader;