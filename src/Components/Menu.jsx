
import './Menu.module.scss'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlideInMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        X
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className="menu"
            // initial={{ x: '-100%' }}
            // animate={{ x: 0 }}
            // exit={{ x: '-100%' }}
          >
            <motion.ul>
              <motion.li
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                exit={{ x: -150 }}
              >
                Start
              </motion.li>
              <motion.li
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                exit={{ x: -150 }}
              >
                Our rides
              </motion.li>
              <motion.li
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                exit={{ x: -150 }}
              >
                Our games
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideInMenu;
