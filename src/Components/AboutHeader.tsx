import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { AiOutlineGlobal } from 'react-icons/ai';

const AboutHeader: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className='relative isolate pt-40 md:pt-44 min-h-0 md:min-h-[90vh] flex items-center justify-center bg-white'>
            <div className='max-w-5xl mx-8 my-0 md:my-0 md:mx-0'>
                <div className='my-0'>
                        <h4 ref={ref}
                        className={`w-[90%] text-[45px] md:text-[94px] leading-[49px] md:leading-[100px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        >Helping website thrive in the digital world</h4>
                </div>
                <div className="relative flex items-center justify-end my-0 md:my-10">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <hr className="w-full border-gray-300" />
                    </div>
                    <button
                        type="submit"
                        className="bg-roundbut text-white rounded-full h-32 w-32 md:h-48 md:w-48 flex items-center justify-center text-[16px] md:text-[19px] shadow-lg transition-colors duration-1000 ease-out hover:bg-purple-800 z-10"
                    >
                        <motion.div
                        animate={{ rotateX: 360, rotateY: 360, rotateZ: 0 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        style={{ perspective: 1000 }}
                        >
                        <AiOutlineGlobal className="text-4xl md:text-6xl" />
                        </motion.div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutHeader