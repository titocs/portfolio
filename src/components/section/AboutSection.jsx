import { IconContext } from 'react-icons';
import { TbBrandCpp } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';
import FrontendSkill from './about/FrontendSkill';
import BackendSkill from './about/BackendSkill';
import Profile from '../../assets/profile_photo.jpg';
import Fade from 'react-reveal/Fade';
import { TbBrandCSharp } from 'react-icons/tb';

const AboutSection = () => {
  return (
    <Fade bottom>
      <section id="about" className="px-6 py-5 pb-16 overflow-auto md:mx-20">
        <div>
          <div className="flex items-center mb-[40px] relative overflow-hidden">
            <h1 className="text-slate-200 w-full text-xl font-semibold after:content-[''] after:block after:relative after:top-[-13px] after:ml-[100px] after:h-[1px] after:w-full after:bg-purple-code lg:after:w-[calc(100% - 500px)]">
              About Me
            </h1>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div>
              <p className="text-slate-500 mb-4">
                As a full-stack developer, I have experience building and
                maintaining web applications from the ground up. I am well-versed in
                a variety of front-end and back-end technologies, including HTML,
                CSS, JavaScript, ASP dotnet core, and PHP through my experience working on various{' '}
                <a
                  className="text-primary-blue no-underline"
                  href="https://www.freecodecamp.org/news/front-end-developer-what-is-front-end-development-explained-in-plain-english/">
                  front-end
                </a>{' '}
                and{' '}
                <a className="text-primary-blue no-underline" href="https://www.geeksforgeeks.org/what-is-full-stack-development/">fullstack web development</a>{' '}
                projects.
              </p>
              <p className="text-slate-500 mb-4">
                My development skills and attention to detail help me to create
                scalable, high-performance web applications that meet the needs of
                both users and clients. I am a quick learner, always stay up-to-date
                with the latest web development trends and technologies, and enjoy
                working in a fast-paced and collaborative environment
              </p>

              <p className="text-slate-500 mb-4">
                Here are few technologies i’ve been working with:
              </p>
              <div className="pb-4">
                <Fade top>
                  <FrontendSkill></FrontendSkill>
                </Fade>
                <Fade top>
                  <BackendSkill></BackendSkill>
                </Fade>
                <Fade top>
                  <div className="text-slate-500 items-center gap-5">
                    <h5>Other:</h5>
                    <div className="py-3">
                      <div className="flex items-center gap-3">
                        <IconContext.Provider
                          value={{ color: '#64748B', size: '30px' }}>
                          <TbBrandCpp className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
                        </IconContext.Provider>
                        <IconContext.Provider
                          value={{ color: '#64748B', size: '30px' }}>
                          <FaPython className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
                          <TbBrandCSharp className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div>
              <div className="rounded-md relative overflow-hidden mx-auto w-[70%] border border-slate-400 md:w-[50%] lg:w-[70%] lg:m-0 lg:ml-auto">
                <div className="flex items-center p-3 px-4 gap-[6px] border-b border-slate-400">
                  <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
                  <div className="w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
                </div>

                <div className="relative">
                  {/* <div
                  className="overlay absolute top-0 left-0 w-full h-full"
                  style={{ backgroundColor: "rgba(56, 189, 248, 0.6)" }}
                ></div> */}
                  <img className="" src={Profile} alt="profile photo" />
                </div>

                {/* <div className="absolute bg-transparent border w-full h-full left-5"></div> */}
              </div>
            </div>
          </div>
        </div>

      </section>
    </Fade>
  );
};

export default AboutSection;
