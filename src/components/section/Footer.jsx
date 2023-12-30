import { FiGithub } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <Fade top>
      <footer>
        <ul className="flex items-center justify-center gap-5 py-5 md:hidden">
          <li>
            <a
              className=""
              href="https://github.com/titocs"
              target="_blank"
              rel="noopener noreferrer">
              <IconContext.Provider value={{ color: '#64748B', size: '22px' }}>
                <FiGithub className='transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]'/>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/tito_cs"
              target="_blank"
              rel="noopener noreferrer">
              <IconContext.Provider value={{ color: '#64748B', size: '22px' }}>
                <AiOutlineInstagram className='transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]'/>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/titocs/"
              target="_blank"
              rel="noopener noreferrer">
              <IconContext.Provider value={{ color: '#64748B', size: '22px' }}>
                <BsLinkedin className='transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]'/>
              </IconContext.Provider>
            </a>
          </li>
        </ul>

        <div className="text-center text-slate-500 py-3">
          Made with <span className="text-red-500">♥</span> by Tito
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
