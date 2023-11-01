import style from './Ride.module.scss';
import { motion } from 'framer-motion';

function Ride() {
  return (
    <section className={style.container}>
      <section className={style.container__ring}>
        <motion.div className={style.container__spinner}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        </motion.div>
        <motion.div className={style.container__spinner}
          initial={{ rotate: 60 }}
          animate={{ rotate: 420 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        </motion.div>
        <motion.div className={style.container__spinner}
          initial={{ rotate: 120 }}
          animate={{ rotate: 480 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        </motion.div>
      </section>
    </section>
  );
}

export default Ride;
