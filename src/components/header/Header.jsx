import { IconContext } from 'react-icons';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import PropTypes from 'prop-types';

const Header = ({ openOffCanvasMenu, setopenOffCanvasMenu }) => {
  return (
    <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-40 bg-primary-very-dark-blue md:px-10 xl:px-14">
      <a
        className="flex items-center justify-center no-underline border-2 border-primary-blue w-12 h-12 rounded-full"
        href="/">
        <div className="text-primary-blue text-center text-2xl font-bold">T</div>
      </a>
      <button className="text-3xl md:hidden">
        <div
          className={`rotate-180`}
          onClick={() => setopenOffCanvasMenu(!openOffCanvasMenu)}>
          <IconContext.Provider value={{ color: '#38BDF8', size: '40px' }}>
            <HiMiniBars3CenterLeft />
          </IconContext.Provider>
        </div>
      </button>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="text-slate-400 text-sm hover:text-primary-blue transition duration-500"
              href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="text-slate-400 text-sm hover:text-primary-blue transition duration-500"
              href="#experience">
              Work Experience
            </a>
          </li>
          <li>
            <a
              className="text-slate-400 text-sm hover:text-primary-blue transition duration-500"
              href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-slate-400 text-sm hover:text-primary-blue transition duration-500"
              href="#end">
              Contact
            </a>
          </li>
          <li className="px-5 text-primary-blue text-xs py-[10px] w-fit border border-primary-blue rounded-md">
            <a target="_blank"
              href="https://drive.google.com/file/d/14OQ5XBkISOXAYUuIkvTtyOHBbLW_-SyP/view?usp=drive_link" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  openOffCanvasMenu: PropTypes.bool.isRequired,
  setopenOffCanvasMenu: PropTypes.func.isRequired
};

export default Header;
