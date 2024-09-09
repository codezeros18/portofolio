import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';
// import image from '../assets/profile.jpg';
import image1 from '../assets/cert.jpg';
import profile from '../Assets/profile.jpg';

const AboutCertificate: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className='relative isolate pt-10 md:pt-0 min-h-0 md:min-h-[90vh] flex items-center justify-center bg-white'>
            <div className='max-w-full md:max-w-[65%] mx-8 md:mx-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-8'>
                    <div className='order-2 md:order-1'>
                        <img src={image1} className='w-full h-[90%] object-cover object-center' alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center order-1 md:order-2'>
                        <img
                            src={profile}
                            alt="Profile"
                            className='w-24 h-24 rounded-full object-cover mb-10 border-white'
                        />
                        <h2 ref={ref} className={`w-full md:w-[90%] mb-10 text-[27px] md:text-[57px] leading-[26px] md:leading-[61px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}> 
                            Digital Library Application Development
                        </h2>
                        <h4 ref={ref}
                                className={`w-full md:w-[90%] text-[17px] md:text-[19px] leading-[26px] md:leading-[30px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                >With a background in Rekayasa Perangkat Lunak, I focus on building reliable applications and libraries. I enjoy creating solutions that are efficient and scalable, always aiming to meet industry standards.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCertificate