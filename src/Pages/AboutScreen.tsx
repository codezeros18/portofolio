import React, { useEffect, useRef } from 'react';
import Navbar from '../Layout/Navbar';
import AboutHeader from '../Components/AboutHeader';
import AboutMyself from '../Components/AboutMyself';
import AboutHelp from '../Components/AboutHelp';
import AboutCertificate from '../Components/AboutCertificate';
import ForFooter from '../Components/ForFooter';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const AboutScreen: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className='font-open-sans'>
      <div className="scroll-smooth bg-white">
        <div>
          <Navbar />
          <AboutHeader />
          <AboutMyself />
          <AboutHelp />
          <AboutCertificate />
        </div>
        <ForFooter />
      </div>
    </div>
  );
}

export default AboutScreen;
