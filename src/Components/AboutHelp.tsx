import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

const card = [
    {num:"01", text:"Programming Language",desc:"I'm a beginner in JavaScript and enjoy combining frameworks and libraries like React, Tailwind, and Vite. I've created small horror games with Unity and worked with Laravel and PHP since vocational school. I believe transitioning to React is the best option for my development journey."},
    {num:"02", text:"Bio",desc:"I'm 19 years old, and I love going to the gym and swimming. I enjoy exploring cafes, and in my free time, I play Valorant, where I hold an Immortal rank."},
    {num:"03", text:"What I Want To Do",desc:"I am eager to develop my skills across various areas, meet new people, build relationships, and have fun. I want to enjoy experiences and explore new opportunities while I can."},
]

const AboutCertificate: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className="relative isolate pt-10 md:pt-0 h-full pb-10 md:pb-0 md:min-h-[80vh] flex items-center justify-center bg-bone mb-0 md:mb-40">
            <div className="max-w-full md:max-w-[85%] mx-8 md:mx-0">
                <h2 className="text-[39px] md:text-[57px] leading-[41px] font-[400] mb-14 text-left tracking-tight">
                Know Me Better
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 md:gap-y-0">
                    {card.map((item, index) => (
                        <div ref={ref} key={index} className={`transition-transform duration-1000 ease-out transform ${
                                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                            <h3 className="hidden md:flex text-[15px] leading-[16px] font-[400] text-opacity-40 text-black mb-8">{item.num}</h3>
                            <hr className='border-1 border-gray-400' />
                            <h2 className="text-[35px] leading-[51px] font-[400] my-8 tracking-tight">{item.text}</h2>
                            <h4 className="text-[19px] leading-[30px] font-[400] mb-4 tracking-tight">{item.desc}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default AboutCertificate