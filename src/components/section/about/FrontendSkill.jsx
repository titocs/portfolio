import { IconContext } from 'react-icons';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiJquery, SiAxios } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const FrontendSkill = () => {
  return (
    <div className="text-slate-500 items-center gap-5">
      <h5>Frontend:</h5>
      <div className="py-3">
        <div className="flex items-center gap-3">
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <FaReact className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <TbBrandNextjs className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <BiLogoTailwindCss className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <SiTypescript className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <SiRedux className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <SiJquery className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <FaBootstrap className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#64748B', size: '30px' }}>
            <SiAxios className="transition ease-in-out delay-80 hover:cursor-pointer hover:fill-[#38BDF8]" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkill;
