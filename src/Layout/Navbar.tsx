import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '/contact';
  const whiteTextPaths = ['/', '/contact']; // Paths for white text
  const isWhiteText = whiteTextPaths.includes(location.pathname);
  const textColor = isWhiteText ? 'text-white' : 'text-black';
  const borderColor = isHomePage ? 'bg-white' : 'bg-black';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linked = [
        {name: 'Insta', link: 'https://www.instagram.com/lintangbalakosaa/'},
        {name: 'Twitter', link: 'https://x.com/codeee181'},
        {name: 'Tiktok', link: 'https://www.tiktok.com/@momunohana?lang=en'},
        {name: 'Github', link: 'https://github.com/codezeros18'},
  ];

  const navbarDesk = [
    { name: 'Project', link: '/project' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  const navbarMob = [
    { name: 'Home', link: '/' },
    { name: 'Project', link: '/project' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="font-open-sans p-8 bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="mx-0 md:mx-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <h4 className={`hidden md:flex ${textColor} text-[18px] leading-[29px] font-[450] tracking-tight hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out`}>
            Code by Lintang
          </h4>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-10 font-medium">
            {navbarDesk.map((item, index) => (
              <li key={index} className="hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-in-out relative group">
              <Link to={item.link} className={`${textColor} text-[18px] leading-[30px] font-[450] tracking-tight relative`}>
                {item.name}
              </Link>
              <span className={`absolute left-0 bottom-0 h-[2px] w-full ${borderColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left`}></span>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none bg-blackshit2 rounded-full p-4"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-blackshit2 text-white p-8">
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white bg-roundbut rounded-full p-4"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className='mt-20 mb-40'>
            <p className='text-white text-[10px] leading-3 text-opacity-40 font-[500]'>NAVIGATION</p>
            <hr className='my-6 border-gray-200' />
            <ul className="flex flex-col space-y-4">
              {navbarMob.map((item, index) => (    
                <li key={index} className="hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-in-out relative group">
                  <Link to={item.link} className="text-white text-[40px] leading-[42px] font-[500] tracking-tight relative">
                    {item.name}
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
                </li>
              ))}
            </ul>
          </div>
          <hr className='my-6 border-gray-200' />
          <p className='text-white text-[10px] leading-3 text-opacity-40 font-[500]'>SOCIALS</p>
          <div className='grid grid-cols-4 gap-4'>
            {linked.map((item) => (     
              <div className='my-6' key={item.name}>
                <Link to={item.link}>
                  <p className='text-white font-[500]'>{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
