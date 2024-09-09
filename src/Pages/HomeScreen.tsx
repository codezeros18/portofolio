import React, { useEffect, useRef } from 'react';
import Navbar from '../Layout/Navbar';
import HomeLanding from '../Components/HomeLanding';
import HomeMotivation from '../Components/HomeMotivationAbout';
import HomeProjectList from '../Components/HomeProjectList';
import HomeCardSlider from '../Components/HomeCardSlider';
import ForFooter from '../Components/ForFooter';
import background from '../assets/back11.png';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const HomeScreen: React.FC = () => {
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
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
          <Navbar />
          <HomeLanding />
        </div>
        <HomeMotivation />
        <HomeProjectList />
        <HomeCardSlider />
        <ForFooter />
      </div>
    </div>
  );
}

export default HomeScreen;
