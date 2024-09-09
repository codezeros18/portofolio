import React, { FormEvent, useRef } from 'react';
import emailjs from 'emailjs-com';
import profile from '../Assets/profile.jpg';
// import { Link } from 'react-router-dom';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

const list = [
    {name: 'Instagram', link: 'https://www.instagram.com/lintangbalakosaa/'},
    {name: 'Twitter', link: 'https://x.com/codeee181'},
    {name: 'Tiktok', link: 'https://www.tiktok.com/@momunohana?lang=en'},
    {name: 'Github', link: 'https://github.com/codezeros18'},
]

const list2 = [
    {name: 'lintangbalakosa@gmail.com'},
    {name: '+62 812 8481 8862'},
]

const ContactList: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
      
        if (form.current) {
          emailjs
            .sendForm('service_0bqju6j', 'template_99b68nn', form.current, 'HFuwCjrd1YsE71mW8')
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error: { text: string }) => {
                console.log('FAILED...', error.text);
              },
            );
        }
      };
  

  return (
    <div className="relative isolate min-h-screen md:min-h-[90vh] flex items-center justify-center mt-20 mb-20">
      <div className="w-full mx-8 md:mx-64 mb-20">
        <div className='grid grid-cols-1 md:grid-cols-6 md:gap-y-32 md:gap-x-28'>
            <div className='col-span-4 order-2 md:order-1'> 
                <form className="mx-auto" ref={form} onSubmit={sendEmail}>
                    <div className="border-t border-gray-500 pt-6 pb-6 md:pt-10 md:pb-10 pr-0 md:pr-10">
                        <div className='flex gap-x-4 md:gap-x-10'>
                            <div className='flex-none'>
                                <p className='shadow-sm block w-full bg-transparent focus:outline-none text-[12px] md:text-[14px] leading-[40px] font-[400] text-opacity-60 text-white '>01</p>
                            </div>
                            <div className='flex-initial w-full'>
                                <label htmlFor="email" className="block mb-0 md:mb-2 text-[18px] md:text-[25px] leading-[40px] font-[500] md:font-[400] text-opacity-80 text-white">Whats your name?</label>
                                <input type="text"
                                    id="name"
                                    name="to_name"
                                     className="shadow-sm block w-full my-0 md:my-4 bg-transparent focus:outline-none text-[18px] md:text-[25px] leading-[40px] font-[400] text-opacity-60 text-white " placeholder="Lintang *" required />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-500 pt-6 pb-6 md:pt-10 md:pb-10 pr-0 md:pr-10">
                        <div className='flex gap-x-4 md:gap-x-10'>
                            <div className='flex-none'>
                                <p className='shadow-sm block w-full bg-transparent focus:outline-none text-[12px] md:text-[14px] leading-[40px] font-[400] text-opacity-60 text-white '>02</p>
                            </div>
                            <div className='flex-initial w-full'>
                                <label htmlFor="email" className="block mb-0 md:mb-2 text-[18px] md:text-[25px] leading-[40px] font-[500] md:font-[400] text-opacity-80 text-white">Whats your email?</label>
                                <input type="email"
                                    id="email"
                                    name="from_name"
                                     className="shadow-sm block w-full my-0 md:my-4 bg-transparent focus:outline-none text-[18px] md:text-[25px] leading-[40px] font-[400] text-opacity-60 text-white " placeholder="lintangbalakoa@gmail.com*" required />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-500 pt-6 pb-6 md:pt-10 md:pb-10 pr-0 md:pr-10">
                        <div className='flex gap-x-4 md:gap-x-10'>
                            <div className='flex-none'>
                                <p className='shadow-sm block w-full bg-transparent focus:outline-none text-[12px] md:text-[14px] leading-[40px] font-[400] text-opacity-60 text-white '>03</p>
                            </div>
                            <div className='flex-initial w-full'>
                                <label htmlFor="email" className="block mb-0 md:mb-2 text-[18px] md:text-[25px] leading-[40px] font-[500] md:font-[400] text-opacity-80 text-white">Whats your message?</label>
                                <input id="message"
                                name="message"
                                 className="shadow-sm block w-full my-0 md:my-4 bg-transparent focus:outline-none text-[18px] md:text-[25px] leading-[40px] font-[400] text-opacity-60 text-white " placeholder="I need to ask about something...*" required />
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <hr className='w-full border-gray-300' />
                        </div>
                        <button type='submit' className='bg-roundbut text-white rounded-full h-36 w-36 md:h-48 md:w-48 flex items-center justify-center text-[16px] md:text-[19px] shadow-lg transition-transform duration-1000 ease-out hover:scale-125 z-10'>
                            Send It!
                        </button>
                    </div>
                </form>

            </div>
            <div className='col-span-2 order-1 md:order-2'>
                <div className='mb-6'>
                <img
                    src={profile}
                    alt="Profile"
                    className='w-24 h-24 rounded-full object-cover border-2 border-white'
                />
                </div>
                <div className=''>
                    <p className='text-white text-[11px] leading-3 text-opacity-40 font-[500] py-4'>SOCIALS</p>
                        <div className='flex flex-col gap-y-4'>
                            {list2.map((item) => (
                                <a
                                key={item.name}
                                className='text-white text-[16px] font-[500] tracking-tight transition duration-300 ease-in-out transform hover:text-opacity-70 hover:scale-110'
                                >
                                {item.name}
                                </a>
                            ))}
                        </div>
                </div>
                <div className='my-4 md:my-10 mb-10 md:mb-0'>
                    <p className='text-white text-[11px] leading-3 text-opacity-40 font-[500] py-4'>SOCIALS</p>
                        <div className='flex flex-col gap-y-4'>
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
  );
};

export default ContactList;
