import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { Attributes } from './IFooter_Navigation';

export interface Footer_NavigationProps {

}

const Footer_Navigation: React.FC<Attributes> = ({ logo, frase }) => {
  const y = new Date().getFullYear(); //Año actual
  const { IMAGES_URL } = process.env;


  return (
    <footer className="block bg-tertiary pt-5 pb-5">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {logo &&
          <div className="local-scroll mb-5 wow fadeInUp" data-wow-duration="1.5s">
            <a href="#top">
              <Image className="w-12" src={IMAGES_URL + logo.image.data.attributes.url} alt={logo.image.data.attributes.alternativeText} width={150} height={108} />
              <span className="sr-only">Scroll to the top of the page</span>
            </a>
          </div>
        }
        <div className="footer-social-links mb-[50px]">
          <div className="sr-only">Our profiles in social media:</div>
          <Link className="group w-[25px] h-[25px] relative text-primary inline-block mx-2 
          before:absolute before:inline-block before:border-solid before:border before:border-primary before:content-[' '] before:rounded-sm before:w-full before:h-full before:rotate-45 before:top-0 before:left-0 
          before:hover:bg-primary" href="#" title="Facebook" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} className='relative text-sm group-hover:bg-primary group-hover:text-quaternary group-hover:stroke-quaternary group-hover:fill-quaternary' />
            <span className="sr-only">Facebook profile</span>
          </Link>
          <Link className="group w-[25px] h-[25px] relative text-primary inline-block mx-2 
          before:absolute before:inline-block before:border-solid before:border before:border-primary before:content-[' '] before:rounded-sm before:w-full before:h-full before:rotate-45 before:top-0 before:left-0 
          before:hover:bg-primary" href="#" title="Twitter" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className='relative text-sm group-hover:bg-primary group-hover:text-quaternary group-hover:stroke-quaternary group-hover:fill-quaternary' />
            <span className="sr-only">Twitter profile</span>
          </Link>
        </div>
        <div className="footer-text">
          <div className="font-secondary text-link uppercase font-thin tracking-wide text-sm mb-2">
            <a href="#" target="_blank">© Wayplan {y}</a>
          </div>
          <div className="text-xsm text-link ">
            {frase}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_Navigation;