import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowDroprightCircle } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import profilePhoto from '../../assets/profile_photo.jpg';
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';
import { useState } from 'react';

const EndSection = () => {
  const [emailMessage, setEmailMessage] = useState('');

  const handleChange = (event) => {
    setEmailMessage(event.target.value);
  };
  return (
    <Fade bottom>
      <section id="end" className="px-6 pb-16 md:mx-20">
        <div className="flex items-center mb-[40px]">
          <h1 className="text-slate-200 text-center w-full text-xl font-semibold">
            What&apos;s next?
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="">
            <h1 className="text-center text-[40px] font-semibold text-white">
              Get In Touch
            </h1>
            <p className="text-slate-500 text-center mb-8 lg:w-[480px] lg:mx-auto">
              I am always open to anyone who wants to communicate with me,
              whether it&apos;s just for a chat or to collaborate on a project,
              I&apos;ll try my best to get back to you!
            </p>
            <a
              href=""
              className="px-6 font-inconsolata py-3 block mx-auto rounded-md text-center w-fit text-primary-blue bg-primary-very-dark-blue border border-primary-blue">Say Hello
            </a>
          </div>
          <div className="w-[250px] h-[515px] relative m-auto bg-white rounded-[30px] overflow-hidden border-[10px]">
            <div className="bg-gradient-to-r from-[rgb(2,0,36)] via-[rgba(34,113,163,1) rgba(39,130,182,1) rgba(44,149,203,1) rgba(56,189,248,1)] to-[rgb(0,212,255)]">
              <div className="w-[135px] h-[20px] bg-white rounded-b-[15px] mx-auto mb-[15px]"></div>
              <div className="flex items-center px-2 pb-2 gap-2">
                <IconContext.Provider value={{ color: '#ffff', size: '15px' }}>
                  <IoIosArrowBack />
                </IconContext.Provider>
                <div className="flex items-center">
                  <img
                    className="rounded-full w-[25px] border mr-[10px] border-white"
                    src={profilePhoto}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[12px] text-white">Tito Candra S</h3>
                    <span className="text-[9px] text-white opacity-50">
                      Available
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <IconContext.Provider
                    value={{ color: '#ffff', size: '17px' }}
                  >
                    <BiDotsVerticalRounded />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="py-[12px] px-[9px] h-[380px] relative bg-slate-300 overflow-y-scroll ">
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-light-blue text-dark-blue-font rounded-t-2xl shadow-md rounded-r-2xl">
                Hi! I need a full-stack web app for my handmade crafts
                marketplace. Can you help?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-white text-primary-very-dark-blue ml-auto rounded-t-2xl rounded-l-2xl shadow-md">
                Hello! Absolutely, I&apos;d love to help. What features do you
                want in the app?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-light-blue text-dark-blue-font rounded-t-2xl shadow-md rounded-r-2xl">
                I need user authentication, product listings, a shopping cart,
                and secure payments. Can you use React.js and Node.js?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-white text-primary-very-dark-blue ml-auto rounded-t-2xl rounded-l-2xl shadow-md">
                Yes, perfect choices! I can do that. How soon would you like it
                done?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-light-blue text-dark-blue-font rounded-t-2xl shadow-md rounded-r-2xl">
                Around 8-10 weeks. What&apos;s your price?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-white text-primary-very-dark-blue ml-auto rounded-t-2xl rounded-l-2xl shadow-md">
                I&apos;ll give you a fixed quote after discussing the details.
                Deal?
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-light-blue text-dark-blue-font rounded-t-2xl shadow-md rounded-r-2xl">
                Deal! Let&apos;s move forward. You&apos;re hired!
              </div>
              <div className="text-[9px] leading-[12px] mb-[8px] p-[8px] w-[125px] bg-white text-primary-very-dark-blue ml-auto rounded-t-2xl rounded-l-2xl shadow-md">
                Thank you! I&apos;ll send the proposal tomorrow. Excited to work
                with you!
              </div>
            </div>
            <div className="sticky bottom-0 w-full p-2 bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-300">
              <div className="flex items-center pl-4 pr-1 py-1 bg-white rounded-2xl">
                <input onChange={handleChange} className="text-[10px] w-full pr-[5px] outline-none" type="text" placeholder="Type a message..."/>
                <a className="ml-auto" href={`mailto:titocs845@gmail.com?body=${emailMessage}`}>
                  <IconContext.Provider
                    value={{ color: 'black', size: '27px' }}>
                    <IoIosArrowDroprightCircle />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default EndSection;
