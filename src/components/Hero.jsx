import { motion } from 'framer-motion';

import { styles } from '../styles';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-40`}
      >
        <div className="flex flex-col justify-center items-center mt--10">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-2 h-[50vh] violet-gradient"></div>
        </div>

        <div classname="mt-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#db1616]">Troy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
             An Aspiring Software Engineer
          </p>
        </div>
      </div>

      f

      
    </section>
  );
};

export default Hero;
