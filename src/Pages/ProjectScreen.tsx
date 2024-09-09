import React, { useEffect, useRef } from 'react';
import Navbar from '../Layout/Navbar';
import ProjectHeader from '../Components/ProjectHeader';
import ProjectList from '../Components/ProjectList';
import ForFooter from '../Components/ForFooter';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ProjectScreen: React.FC = () => {
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
          <ProjectHeader />
          <ProjectList />
        </div>
        <ForFooter />
      </div>
    </div>
  );
}

export default ProjectScreen;
