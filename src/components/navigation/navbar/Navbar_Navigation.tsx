import Image from "next/image";
import Link from 'next/link';
import React from "react";

export interface Navbar_NavigationProps { }

const Navbar_Navigation: React.FC<Navbar_NavigationProps> = ({ ...props }) => {
  return (
    <nav className="fixed bg-transparent w-full shadow-navbar z-40 h-[75px]">
      <div className="relative mx-6 flex place-content-between h-full">
        <div className="flex items-center">
          <Link href="intro.html" className=" max-w-[128px] mr-4" >
            <Image className="align-middle" src="/images/logo.png" alt="logo" width={236} height={54} />
          </Link>
        </div>
        <div className="flex md:flex max-md:hidden">
          <ul className="flex items-center text-[11px] uppercase text-menu  tracking-widest">
            <li className="ml-8 hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-8 hover:text-primary">
              <Link href="/about">About Us</Link>
            </li>
            <li className="ml-8 hover:text-primary">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <ul className="flex items-center text-[11px] uppercase text-menu  tracking-widest">
            <li className="ml-20 flex">
              <Link href="/" className="flex items-center ml-4 hover:text-primary ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Search
              </Link>
              <Link href="/" className="flex items-center ml-4 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
                SPA
              </Link>
            </li>
          </ul>
        </div>
        <div className="hover:text-menu hover:bg-quaternary max-md:flex md:hidden h-[75px] w-[75px] max-h-[75px] max-w-[75px] flex items-center justify-center border-x-2 border-secondary">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span className="sr-only">Menu</span>
        </div>

      </div>

    </nav>
  );
};

export default Navbar_Navigation;