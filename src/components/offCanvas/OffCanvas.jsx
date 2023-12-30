// import React, { useState } from "react";

import { IconContext } from 'react-icons';
import { IoCloseSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const OffCanvas = ({ openOffCanvasMenu, setopenOffCanvasMenu }) => {
  return (
    <aside className="bg-primary-very-dark-blue md:hidden">
      <nav
        className={`fixed h-full w-full top-0 z-50 duration-500 transition-transform ${
          openOffCanvasMenu ? 'translate-x-0' : 'translate-x-[100vw]'
        }`}
      >
        <div
          className={`h-full fixed right-0 px-4 py-6 w-[270px] ml-auto backdrop-blur-lg duration-500 transition-transform md:w-[380px] ${
            openOffCanvasMenu ? 'right-0' : 'translate-x-[100vw]'
          }`}
        >
          <button
            className="block ml-auto mb-10"
            onClick={() => setopenOffCanvasMenu(!openOffCanvasMenu)}
          >
            <IconContext.Provider value={{ color: '#38BDF8', size: '40px' }}>
              <IoCloseSharp />
            </IconContext.Provider>
          </button>
          <ul className="flex flex-col text-primary-blue font-inconsolata gap-3 text-lg">
            <li className="font-semibold">
              <a href="#about">About</a>
            </li>
            <li className="font-semibold">
              <a href="#experience">Work Experience</a>
            </li>
            <li className="font-semibold">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-semibold">
              <a href="#end">Contact</a>
            </li>
            <li className="px-5 py-1 w-fit border border-primary-blue rounded-md">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/14OQ5XBkISOXAYUuIkvTtyOHBbLW_-SyP/view?usp=drive_link" rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};


OffCanvas.propTypes = {
  openOffCanvasMenu: PropTypes.bool.isRequired,
  setopenOffCanvasMenu: PropTypes.func.isRequired
};

export default OffCanvas;
