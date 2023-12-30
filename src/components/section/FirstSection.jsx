import scrollDown from '../../assets/scroll-down.gif';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

const FirstSection = () => {
  return (
    <div className="px-6 min-h-screen flex flex-col justify-around md:px-20">
      <div>
        <div className="font-roboto-mono">
          <h1 className="text-primary-blue text-sm mb-3 lg:text-md">Hello, my name is</h1>
        </div>
        <h2 className="text-slate-200 text-3xl font-semibold lg:text-5xl lg:pb-4">
          Tito Candra Septio.
        </h2>
        <h3 className="text-slate-400 mb-4 lg:text-5xl">I build things for the web.</h3>
        <div className="flex items-center">
          <div>
            <span className="text-grey lg:text-2xl">
              &lt;
              <span className="text-purple-code font-inconsolata">h1</span>
              &gt;
            </span>
            <div className="border border-dark-grey h-[115px] m-auto w-[1px]"></div>
            <span className="text-grey lg:text-2xl">
              &lt;/
              <span className="text-purple-code font-inconsolata">h1</span>
              &gt;
            </span>
          </div>

          <Fade bottom>
            <div className="xl:w-[760px]">
              <p className="text-white font-inconsolata lg:text-2xl">
                <Typed
                  strings={[
                    `Experienced full-stack developer proficient in Web development`,
                  ]}
                  typeSpeed={40}></Typed>
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <a className="text-white block mx-auto pb-7" href="#about">
        <div className="text-center text-slate-100 font-inconsolata">
          Scroll Down
        </div>
        <img className="mx-auto w-[50px]" src={scrollDown} alt="" />
      </a>
    </div>
  );
};

export default FirstSection;
