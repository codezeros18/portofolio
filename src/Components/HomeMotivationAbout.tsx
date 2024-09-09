import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const HomeMotivationAbout: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className='relative isolate min-h-screen md:min-h-[90vh] flex items-center justify-center bg-white'>
            <div className='max-w-5xl mx-8 my-20 md:my-0 md:mx-0'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8'>
                    <div className='col-span-3 my-10 md:my-0'>
                        <h4 ref={ref}
                        className={`text-[24px] md:text-[35px] leading-[35px] md:leading-[51px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        >"Crafting immersive and responsive web experiences. Let’s transform your ideas into reality with clean code and innovative design. Always pushing boundaries, always user-first."</h4>
                    </div>
                    <div>
                        <p className={`text-[16px] md:text-[18px] leading-[26px] md:leading-[29px] font-[450] pt-4 pb-10 transition-transform duration-1000 ease-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Blending the art of design, the precision of code, and the magic of interaction—my work lives at the intersection of creativity and technology, redefining the web design landscape.</p>
                    </div>
                </div>
                <div className='absolute left-3/4 bottom-10 md:bottom-6 -translate-x-1/2'>
                            <Link to={'/about'}>
                                <button className={`border-2 bg-black h-36 w-36 md:h-48 md:w-48 rounded-full flex items-center justify-center text-white text-[16px] md:text-[18px] font-[400] transition-transform duration-1000 ease-out hover:scale-125`}>
                                About Me
                                </button>
                            </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeMotivationAbout