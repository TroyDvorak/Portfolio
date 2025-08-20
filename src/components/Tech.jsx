import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

const Tech = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center my-8"
  >
    <Tilt
      options={{
        max: 60,
        scale: 1.1,
        speed: 50,
      }}
      className="w-700px] h-[600px]"
    >
      <img
        src="src/assets/tech/Honeycomb3.png"
        alt="Logo"
        className="w-full h-full object-contain transition-transform duration-300"
      />
    </Tilt>
  </motion.div>
);

export default Tech;