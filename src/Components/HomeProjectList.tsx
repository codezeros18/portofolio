import React from 'react'
import image1 from '../assets/card.png'
// import image2 from '../assets/card1.png'
import image3 from '../assets/card3.png'
import { Link } from 'react-router-dom'

const list = [
    {name: 'FIVER', second: 'Frontend',year:"2024",img:image1},
    {name: 'AEI', second: 'Frontend',year:"2023",img:image3},
]

const HomeProjectList: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen md:min-h-[90vh] flex items-center justify-center bg-white">
        <div className="mx-6 md:mx-10 w-full max-w-6xl">
            <div className='hidden md:flex my-10 ml-0 md:ml-12'>
                <h4 className='text-[11px] leading-[11px] font-[500] text-black text-opacity-50'>RECENT WORK</h4>
            </div>
            {list.map((item, index) => (
                <div
                    key={index}
                    className={`md:border-t-2 pt-8 my-14 md:my-0 mb-0 border-gray-200 md:mb-10 ${index === 2 ? 'md:border-b-2 pb-8' : ''}`}
                >
                    <Link to={'/project'}>
                        <div className='flex md:hidden'>
                                <div className='relative w-full h-full'>
                                    <img src={item.img} className='w-full h-[40vh] object-cover object-center' alt="" />
                                </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-0 md:px-10 md:hover:translate-x-6 transition-transform duration-500 ease-in-out  md:hover:opacity-50 cursor-pointer">
                            <div className="col-span-4 border-b-2 md:border-b-0 border-gray-300">
                                <h4 className="text-[32px] md:text-[80px] leading-[80px] font-[400]">{item.name}</h4>
                            </div>
                            <div className="flex flex-row md:flex-none items-center justify-between md:justify-normal col-span-2">
                                <p className="whitespace-nowrap text-[16px] font-[500]">{item.second}</p>
                                <p className='flex md:hidden'>{item.year}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            <div className='text-center my-14 md:my-0'>
                <Link to={'/project'}>

                    <button className='relative border-2 border-gray-600 rounded-full my-10 px-4 md:px-10 py-2 md:py-6 text-black hover:text-white text-[16px] md:text-[19px] w-full md:w-auto overflow-hidden bg-transparent transition-colors duration-500 ease-in-out hover:bg-gray-600'>
                        <span className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></span>
                        More Project"
                        </button>
                </Link>
            </div>
        </div>
</div>

  )
}

export default HomeProjectList