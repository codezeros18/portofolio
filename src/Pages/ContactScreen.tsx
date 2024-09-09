import React, { useEffect, useRef } from 'react';
import Navbar from '../Layout/Navbar';
import ContactHeader from '../Components/ContactHeader';
import ContactList from '../Components/ContactList';
import ForFooter from '../Components/ForFooter';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ContactScreen: React.FC = () => {
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
      <div className="scroll-smooth bg-blackshit2">
          <Navbar />
          <ContactHeader />
          <ContactList />
        {/* <ForFooter /> */}
      </div>
    </div>
  );
}

export default ContactScreen;
