// Modules
import React from 'react';
import { ProfileCard } from '../../components';

// Assets
import styles from './styles.module.css';
import DataBrideGroom from './data';

const BrideGroom = ({ wedding }) => {
  const { data } = DataBrideGroom({ wedding });

  return (
    <div className={styles.container}>
      <p className={styles.title}>The Bride &amp; The Groom</p>
      <div className={styles.cardContainer}>
        {data.map((el, idx) => (
          <>
            <ProfileCard
              img={el.img}
              title={el.title}
              name={el.name}
              description={el.description}
              parent={el.parent}
            />
            {(idx + 1) % 2 !== 0 ? <div className={styles.separator} /> : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default BrideGroom;
