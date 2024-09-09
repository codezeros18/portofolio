import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ForFooter = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            // Convert time to Jakarta timezone
            const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
            setTime(jakartaTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' });


    const list = [
        {name: 'Instagram', link: 'https://www.instagram.com/lintangbalakosaa/'},
        {name: 'Twitter', link: 'https://x.com/codeee181'},
        {name: 'Tiktok', link: 'https://www.tiktok.com/@momunohana?lang=en'},
        {name: 'Github', link: 'https://github.com/codezeros18'},
    ]
  return (
    <div className='bg-blackshit2'>
        <div className="relative isolate min-h-screen pt-20 pb-8">
            <div className='flex items-center justify-center'>
                <div className="min-w-[20rem] md:min-w-[24rem] md:w-[1000px]">
                    <div className='max-w-80 md:max-w-3xl pt-10'>
                        <h1 className='text-white text-[45px] md:text-[94px] leading-[45px] md:leading-[100px] pb-10'>                   
                            Let’s work
                            together
                        </h1>
                        <hr className='border-1 border-gray-200' />
                        <div className='absolute left-3/4 md:left-2/3 top-[22%] md:top-[35%] -translate-x-1/2'>
                            {/* Round Button with Absolute Position */}
                            <Link to={'/contact'}>
                                <button className='bg-roundbut text-white rounded-full h-36 w-36 md:h-48 md:w-48 flex items-center justify-center text-[16px] md:text-[19px] shadow-lg transition-transform duration-1000 ease-out hover:scale-125'>
                                Get In Touch
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row my-10'>
                    <div className='mt-20 md:mt-0'>
                        <button className='relative border-2 border-gray-600 rounded-full px-8 md:px-10 py-6 md:py-8 text-white text-[16px] md:text-[19px] w-full md:w-auto overflow-hidden bg-transparent transition-colors duration-500 ease-in-out hover:bg-gray-600'>
                        <span className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></span>
                        lintangbalakosa@gmail.com
                        </button>
                    </div>
                    <div className='md:ml-4 my-4 md:my-0'>
                        <button className='relative border-2 border-gray-600 rounded-full px-8 md:px-10 py-6 md:py-8 text-white text-[16px] md:text-[19px] w-full md:w-auto overflow-hidden bg-gray-transparent transition-colors duration-500 ease-in-out hover:bg-gray-600'>
                        <span className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></span>
                        +62 812 8481 8862
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-end justify-between mx-8 md:mx-12 mt-6 md:mt-24'>
                    <div className='flex flex-row order-3 md:order-1'>
                        <div>
                            <p className='text-white text-[11px] leading-3 text-opacity-40 font-[500] py-4'>LOCAL TIME</p>
                            <div className=''>
                                <p className='text-white text-[16px] font-[500] tracking-tight transition duration-300 ease-in-out transform hover:text-opacity-70 hover:scale-110'>
                                {formattedTime} WIB
                                {/* {gmtOffset} */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className='flex md:hidden mb-2 mt-6 order-2' />
                    <div className='flex flex-row items-center order-1 md:order-3'>
                        <div className=''>
                        <p className='text-white text-[11px] leading-3 text-opacity-40 font-[500] py-4'>SOCIALS</p>
                        <div className='flex items-center justify-center gap-6 md:gap-8'>
                            {list.map((item) => (
                                <a
                                href={item.link}
                                key={item.name}
                                className='text-white text-[16px] font-[500] tracking-tight transition duration-300 ease-in-out transform hover:text-opacity-70 hover:scale-110'
                                >
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default ForFooter