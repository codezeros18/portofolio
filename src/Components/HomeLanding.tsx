import React from 'react';
import Marquee from "react-fast-marquee";

const HomeLanding: React.FC = () => {
  // interface Text {
  //   title: string;
  // }

  // // const textData: Text[] = [
  // //   { title: "Lintang Balakosa Ardhana -" },
  // // ];

  return (
    <div className='relative isolate min-h-[110vh] md:min-h-[110vh] flex items-center justify-center bg-cover bg-center'>
      <div className="w-full overflow-hidden flex items-center justify-center">
        <div className="relative w-full">
          {/* <div className='flex items-center justify-end h-full'>
            <p className='text-[38px] font-[400] leading-7 text-right text-white text-opacity-90 mr-20'>
              <span></span>
              Frontend Developer
            </p>
          </div> */}
          <div className="marquee-container pt-0 md:pt-80">
            <Marquee
              speed={100}
              gradient={false}
              direction="right"
              pauseOnHover={false}
            >
              <span className="text-[140px] md:text-[200px] text-white font-[500] tracking-wide"> Lintang Balakosa Ardhana - </span>
            </Marquee>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
