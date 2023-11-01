import { motion } from "framer-motion";
import style from './Ride.module.scss';

function Ride() {
    return ( 
        <article className={style.container}>
            <motion.section 
            className={style.container__wheel}>hej
            </motion.section>

        </article>
     );
}

export default Ride;




{/* function Bounce() {
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

export default Bounce; */}