import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import { LuExternalLink } from 'react-icons/lu';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const ProjectSection = () => {
  
  // const projects = [
  //   {
  //     title: "Frontendmentor Solution",
  //     description: `A showcase of my front-end skills. This collection features my
  //     solutions to various Frontend Mentor challenges using vanilla tech
  //     stack (vanilla CSS, JS, HTML), each providing a real-life workflow
  //     experience. From designs, assets, and style requirements.`,
  //     tools: ["Vanilla JS", "Vanilla CSS", "Vanilla HTML"],
  //     link: ["https://github.com/titocs/Frontendmentor-Solution"],
  //     
  //   },
  // ];

  return (
    <Fade bottom>
      <section id="projects" className="px-6 pb-16 md:mx-20">
        <div className="flex items-center mb-[40px]">
          <h1 className="text-slate-200 overflow-hidden w-full text-xl font-semibold after:content-[''] after:block after:relative after:top-[-13px] after:ml-[175px] after:h-[1px] after:w-full after:bg-purple-code">
            Personal Projects
          </h1>
        </div>

        <Fade left>
          <div className="card px-5 py-7 bg-card-grey mb-7 shadow-lg lg:mb-14">
            <div className="">
              <div className="mb-5">
                <h5 className="text-primary-blue font-inconsolata">
                  Featured Project
                </h5>
                <h1 className="text-slate-100 text-lg">
                  Frontendmentor Solution
                </h1>
              </div>
              <p className="text-slate-500 mb-5">
                A showcase of my front-end skills. This collection features my
                solutions to various Frontend Mentor challenges using vanilla tech
                stack (vanilla CSS, JS, HTML), each providing a real-life workflow
                experience. From designs, assets, and style requirements.
              </p>
              <ul className="flex flex-wrap gap-5 mb-5 text-sm text-slate-500 font-inconsolata">
                <li>Vanilla CSS</li>
                <li>Vanilla JS</li>
                <li>Vanilla HTML</li>
              </ul>

              <div className="flex items-center gap-5">
                <a href="https://github.com/titocs/Frontendmentor-Solution" className="hover:-translate-y-2 transition duration-300" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: '#64748B', size: '25px' }}>
                    <LuExternalLink />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="card px-5 py-7 bg-card-grey mb-7 shadow-lg lg:mb-14">
            <div></div>
            <div className="">
              <div className="mb-5">
                <h5 className="text-primary-blue font-inconsolata">
                  Featured Project
                </h5>
                <h1 className="text-slate-100 text-lg">Restaurant App</h1>
              </div>
              <p className="text-slate-500 mb-5">
                This application is used to view restaurants, and users can
                perform various actions such as adding restaurants to favorites,
                writing testimonials, and more. The application implements CRUD
                operations, indexedDB, webpack, automation testing, progressive
                web app (offline availability), accessibility features for users
                with disabilities, and is also mobile-friendly.
              </p>
              <ul className="flex flex-wrap gap-5 mb-5 text-sm text-slate-500 font-inconsolata">
                <li>Vanilla CSS</li>
                <li>Vanilla JS</li>
                <li>Vanilla HTML</li>
                <li>Web Socket</li>
              </ul>

              <div className="flex items-center gap-5">
                {/* <a href="">
                  <IconContext.Provider
                    value={{ color: "#64748B", size: "25px" }}
                  >
                    <BsGithub />
                  </IconContext.Provider>
                </a> */}
                <a href="https://github.com/titocs/restaurant-apps-fe" className="hover:-translate-y-2 transition duration-300" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: '#64748B', size: '25px' }}>
                    <LuExternalLink />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="card px-5 py-7 bg-card-grey mb-7 shadow-lg lg:mb-14">
            <div className="">
              <div className="mb-5">
                <h5 className="text-primary-blue font-inconsolata">
                  Featured Project
                </h5>
                <h1 className="text-slate-100 text-lg">OpenMusic API</h1>
              </div>
              <p className="text-slate-500 mb-5">
                RESTful API application for managing song, playlist, and album
                data that implement with a message broker and caching for database
                optimization
              </p>
              <ul className="flex flex-wrap gap-5 mb-5 text-sm text-slate-500 font-inconsolata">
                <li>Redis</li>
                <li>HapiJS</li>
                <li>NodeJS</li>
                <li>RabbitMQ</li>
                <li>PostgreSQL</li>
              </ul>

              <div className="flex items-center gap-5">
                {/* <a href="">
                  <IconContext.Provider
                    value={{ color: "#64748B", size: "25px" }}
                  >
                    <BsGithub />
                  </IconContext.Provider>
                </a> */}
                <a href="https://github.com/titocs/Open-Music-API" className="hover:-translate-y-2 transition duration-300" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: '#64748B', size: '25px' }}>
                    <LuExternalLink />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="card px-5 py-7 bg-card-grey mb-7 shadow-lg lg:mb-14">
            <div></div>
            <div className="">
              <div className="mb-5">
                <h5 className="text-primary-blue font-inconsolata">
                  Featured Project
                </h5>
                <h1 className="text-slate-100 text-lg">React Projects</h1>
              </div>
              <p className="text-slate-500 mb-5">
                All of my application built with React
              </p>
              <ul className="flex flex-wrap gap-5 mb-5 text-sm text-slate-500 font-inconsolata">
                <li>Javascript</li>
                <li>Typescript</li>
                <li></li>
              </ul>

              <div className="flex items-center gap-5">
                {/* <a href="">
                  <IconContext.Provider
                    value={{ color: "#64748B", size: "25px" }}
                  >
                    <BsGithub />
                  </IconContext.Provider>
                </a> */}
                <a href="https://github.com/titocs/REACT-PROJECTS" className="hover:-translate-y-2 transition duration-300" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ color: '#64748B', size: '25px' }}>
                    <LuExternalLink />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </Fade>
  );
};

ProjectSection.prop;

export default ProjectSection;
