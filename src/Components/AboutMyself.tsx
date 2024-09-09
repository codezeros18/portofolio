import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';
import image from '../assets/profile.jpg';

const AboutMyself: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className='relative isolate pt-10 md:pt-0 min-h-0 md:min-h-[90vh] flex items-center justify-center bg-white'>
            <div className='max-w-full md:max-w-[65%] mx-8 md:mx-0'>
                <div className='grid grid-cols-1  md:grid-cols-12 md:gap-x-10 gap-y-8'>
                    <div className='col-span-3'>
                        <h4 ref={ref}
                                className={`w-full md:w-[90%] text-[17px] md:text-[19px] leading-[26px] md:leading-[30px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                >"I create innovative, tailor-made programming solutions, constantly exploring new technologies with every project. Each challenge excites me to push the boundaries of what's possible, always striving to deliver high-quality results while staying ahead in the ever-evolving world of technology."</h4>
                    </div>
                    <div className='col-span-9'>
                        <img src={image} className='w-full h-[90%] object-cover object-center' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMyself