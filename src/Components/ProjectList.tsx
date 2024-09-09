import React from 'react'
import image1 from '../assets/card.png'
import image2 from '../assets/card1.png'
import image3 from '../assets/card3.png'
import image4 from '../assets/card2.png'
import { Link } from 'react-router-dom'

const list = [
    {name: 'Fiver Cloning', second: 'Frontend',year:"2024",img:image1, link:"https://github.com/codezeros18/fiverr"},
    {name: 'AEI Company Profile', second: 'Frontend',year:"2023",img:image3 ,link:"https://github.com/codezeros18/aei"},
    {name: 'Riot Cloning', second: 'Frontend',year:"2024",img:image2, link:"https://github.com/codezeros18/riot"},
    {name: 'Zero Library', second: 'Frontend & Backend',year:"2023",img:image4, link:"https://github.com/codezeros18/perpus"},
]

const ProjectList: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen md:min-h-[90vh] flex items-center justify-center bg-white mt-20 md:mt-0 mb-20">
        <div className="mx-6 md:mx-10 w-full max-w-6xl">
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-y-32 md:gap-x-12'>
            {list.map((item, index) => (
                <div key={index} className='my-6 md:my-0 transition-transform duration-300 ease-in-out transform hover:scale-105'>
                <Link to={item.link} className='block'>
                    <div className='w-full h-full'>
                    <img src={item.img} className='w-full h-[50vh] md:h-[70vh] object-cover object-center' alt={item.name} />
                    </div>
                    <div className='p-4'>
                    <h4 className="text-[32px] md:text-[31px] leading-[31px] font-[400] pt-8 pb-6">{item.name}</h4>
                    <hr />
                    <div className="flex flex-row items-center justify-between py-4">
                        <p className="whitespace-nowrap text-[16px] font-[500]">{item.second}</p>
                        <p className='flex'>{item.year}</p>
                    </div>
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
</div>

  )
}

export default ProjectList