import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

const ProjectHeader: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once when the element first comes into view
        threshold: 0.4, // Trigger the animation when 10% of the element is in view
      });
    return (
        <div className='relative isolate pt-40 md:pt-0 min-h-0 md:min-h-[90vh] flex items-center justify-center bg-white'>
            <div className='max-w-5xl mx-8 my-0 md:my-0 md:mx-0'>
                <div className='my-0'>
                        <h4 ref={ref}
                        className={`w-[80%] text-[45px] md:text-[94px] leading-[49px] md:leading-[100px] font-[400] tracking-tight transition-transform duration-1000 ease-out transform ${
                            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        >Creating next level web projects</h4>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader