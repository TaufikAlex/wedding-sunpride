import React from 'react';
import { HeaderSeparator, Button } from '../../components';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

const WelcomePage = ({ wedding }) => {
  return (
    <motion.div
      animate={{ scale: [1, 2, 2, 2, 1], opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.5, ease: 'easeInOut', repeatDelay: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.separatorContainer}>
          <HeaderSeparator />
          <p className={styles.textName}>
            {wedding.callMan} &amp; {wedding.callLadies}
          </p>
          <HeaderSeparator />
        </div>
        <p className={styles.invitationText}>{wedding.description}</p>
        <p className={styles.invitationDate}>{wedding.dateWedding}</p>
        <div className={styles.buttonContainer}>
          <Button text="Save the Date!" />
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
