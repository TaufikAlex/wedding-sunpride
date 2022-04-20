import React from 'react';
import { HeaderSeparator, Button } from '../../components';

import styles from './styles.module.css';

const WelcomePage = ({ wedding }) => {
  return (
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
  );
};

export default WelcomePage;
