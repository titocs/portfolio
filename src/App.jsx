import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import AboutSection from './components/section/AboutSection';
import EndSection from './components/section/EndSection';
import ExperienceSection from './components/section/ExperienceSection';
import FirstSection from './components/section/FirstSection';
import Footer from './components/section/Footer';
import ProjectSection from './components/section/ProjectSection';
import OffCanvas from './components/offCanvas/OffCanvas';
import { FiGithub } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function App() {
  const [openOffCanvasMenu, setopenOffCanvasMenu] = useState(false);
  useEffect(() => {
    if (openOffCanvasMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [openOffCanvasMenu]);
  return (
    <>
      <main>
        <Fade top>
          <Header
            openOffCanvasMenu={openOffCanvasMenu}
            setopenOffCanvasMenu={setopenOffCanvasMenu}
          ></Header>
        </Fade>
        <Slide left>
          <FirstSection></FirstSection>
        </Slide>
        <AboutSection></AboutSection>
        <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <EndSection></EndSection>
        <Footer></Footer>
      </main>
      <OffCanvas
        openOffCanvasMenu={openOffCanvasMenu}
        setopenOffCanvasMenu={setopenOffCanvasMenu}></OffCanvas>

      <Fade bottom>
        <div
          aria-orientation="left"
          className="fixed left-[20px] w-[40px] bottom-0 hidden md:block">
          <ul className="flex items-center flex-col">
            <li className="m-[12px]">
              <a
                href="https://github.com/titocs"
                target="_blank"
                rel="noopener noreferrer">
                <IconContext.Provider value={{ color: '95A0B4', size: '22px' }}>
                  <FiGithub />
                </IconContext.Provider>
              </a>
            </li>
            <li className="m-[12px]">
              <a
                href="https://instagram.com/tito_cs"
                target="_blank"
                rel="noopener noreferrer">
                <IconContext.Provider value={{ color: '95A0B4', size: '22px' }}>
                  <AiOutlineInstagram />
                </IconContext.Provider>
              </a>
            </li>
            <li className="m-[12px] mb-0 after:content-[''] after:mt-[12px] after:block after:w-[1px] after:h-[90px] after:bg-slate-400 after:mx-auto">
              <a
                href="https://www.linkedin.com/in/titocs/"
                target="_blank"
                rel="noopener noreferrer">
                <IconContext.Provider value={{ color: '95A0B4', size: '22px' }}>
                  <BsLinkedin />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
      </Fade>
 
      <Fade bottom>
        <div
          aria-orientation="right"
          className="fixed left-auto right-[5px] w-[40px] bottom-0 hidden md:flex">
          <div className="flex relative flex-col items-center">
            <a
              className="leading-1 flex gap-[10px] text-sm mx-auto after:my-0 after:relative text-slate-400 font-inconsolata after:content-[''] after:block after:w-[1px] after:h-[90px] after:bg-slate-400 after:mx-auto after:mt-auto"
              style={{ writingMode: 'vertical-rl' }}
              href="mailto:titocs845@gmail.com">
              titocs845@gmail.com
            </a>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default App;
