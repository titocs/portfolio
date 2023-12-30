import { useState, useRef, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function TabsLgBasicFullWidth() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <Fade bottom>
        <section
          id="experience"
          className="max-w-full pt-16 pb-16 md:pt-28 md:pb-28 md:mx-20"
          aria-multiselectable="false">
          <div className="flex items-center mb-[40px] px-6">
            <h1 className="text-slate-200 w-full overflow-hidden text-xl font-semibold after:content-[''] after:block after:relative after:top-[-13px] after:ml-[170px] after:h-[1px] after:w-full after:bg-purple-code">
              Work Experience
            </h1>
          </div>
          <ul
            className="flex items-center border-b border-slate-500 md:mx-6"
            role="tablist"
            ref={wrapperRef}>
            <li className="flex-1" role="presentation ">
              <button
                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 focus:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed ${
                  tabSelected.currentTab === 1
                    ? 'border-primary-blue stroke-primary-blue text-primary-blue hover:border-primary-blue  hover:text-primary-blue focus:border-primary-blue focus:text-primary-blue disabled:border-slate-500'
                    : 'justify-self-center border-transparent stroke-slate-500 text-slate-500 hover:border-primary-blue hover:text-primary-blue focus:border-primary-blue focus:stroke-primary-blue focus:text-primary-blue disabled:text-slate-500'
                }`}
                id="tab-label-1a"
                role="tab"
                aria-setsize="3"
                aria-posinset="1"
                tabIndex={`${tabSelected.currentTab === 1 ? '0' : '-1'}`}
                aria-controls="tab-panel-1a"
                aria-selected={`${
                  tabSelected.currentTab === 1 ? 'true' : 'false'
                }`}
                onClick={() =>
                  setTabSelected({ ...tabSelected, currentTab: 1 })
                }>
                <span>Ministry of Finance RI</span>
              </button>
            </li>
            <li className="flex-1" role="presentation ">
              <button
                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 focus:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed ${
                  tabSelected.currentTab === 2
                    ? 'border-primary-blue stroke-primary-blue text-primary-blue hover:border-primary-blue  hover:text-primary-blue focus:border-primary-blue focus:text-primary-blue disabled:border-slate-500'
                    : 'justify-self-center border-transparent stroke-slate-500 text-slate-500 hover:border-primary-blue hover:text-primary-blue focus:border-primary-blue focus:stroke-primary-blue focus:text-primary-blue disabled:text-slate-500'
                }`}
                id="tab-label-2a"
                role="tab"
                aria-setsize="3"
                aria-posinset="2"
                tabIndex={`${tabSelected.currentTab === 2 ? '0' : '-1'}`}
                aria-controls="tab-panel-2a"
                aria-selected={`${
                  tabSelected.currentTab === 2 ? 'true' : 'false'
                }`}
                onClick={() =>
                  setTabSelected({ ...tabSelected, currentTab: 2 })
                }>
                <span>TVRI</span>
              </button>
            </li>
          </ul>
          <div className="">
            <div className={`px-6 py-4 ${
                tabSelected.currentTab === 1 ? '' : 'hidden'
              }`}
              id="tab-panel-1a"
              aria-hidden={`${tabSelected.currentTab === 1 ? 'true' : 'false'}`}
              role="tabpanel"
              aria-labelledby="tab-label-1a"
              tabIndex="-1">
              <div className="pt-1 pb-3">
                <h3 className="text-slate-300 text-lg">
                  Fullstack Developer{' '}
                  <span className="text-primary-blue">
                    @ Ministry of Finance RI
                  </span>
                </h3>
                <h5 className="font-inconsolata text-slate-400">
                  February — June 2023
                </h5>
              </div>
              <ul>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Implemented an autocomplete feature for the settings page
                  search functionality, accelerating the author&apos;s ability
                  to locate relevant Ministries/Institutions; reduced search
                  time by 90% and enhanced user experience
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Developed a new page based on User Requirements to facilitate auditors in finding accrual and cash journal pairings, utilizing Angular and Typescript to integrate data models and API; achieved a performance improvement of 75% in the search process
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Integrated the Inspektorat Jenderal website’s with the backend using Redux Toolkit, reducing code complexity by 50%
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Led efforts to adapt and modify existing database models based on feedback and outcomes from the meetings with business process owners
                </li>
              </ul>
            </div>
            <div
              className={`px-6 py-4 ${
                tabSelected.currentTab === 2 ? '' : 'hidden'
              }`}
              id="tab-panel-2a"
              aria-hidden={`${tabSelected.currentTab === 2 ? 'true' : 'false'}`}
              role="tabpanel"
              aria-labelledby="tab-label-2a"
              tabIndex="-1">
              <div className="pt-1 pb-3">
                <h3 className="text-slate-300 text-lg">
                  Frontend Developer{' '}
                  <span className="text-primary-blue">
                    @ National Television Republic of Indonesia
                  </span>
                </h3>
                <h5 className="font-inconsolata text-slate-400">
                  November 2022 — Mei 2023
                </h5>
              </div>
              <ul>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Conducted regular meetings with project stakeholders to gather feedback, understand requirements, and align project goals with business objectives
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Translated 50+ intricate Figma design mockups into fully functional web interfaces with a pixel-perfect accuracy rate of 95%, optimizing for responsiveness and cross-browser compatibility
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Utilized version control systems (e.g., Git) to manage 200+ code repositories, fostering collaboration with team members. Achieved a 20% improvement in development efficiency through a well-organized and meticulously documented codebase
                </li>
                <li className="text-slate-500 relative pl-7 before:content-['▹'] before:text-sm before:absolute before:left-0 before:text-primary-blue">
                  Conducted 100+ test cases, resulting in a 75% decrease in post-deployment issues
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
