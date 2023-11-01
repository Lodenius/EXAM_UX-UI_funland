import { motion } from 'framer-motion';
import style from './Styling/Bounce.module.scss';

function Bounce() {
  return (
    <article className={style.container}>
      <motion.section
        className={style.container__ball}
        initial={{ scaleY: 1 }}
        animate={{
          y: [150, 50, 150],
          scaleY: [0.5, 0.9, 0.9, 0.9, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </article>
  );
};

export default Bounce;