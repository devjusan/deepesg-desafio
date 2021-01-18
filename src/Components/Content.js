import React from 'react';
import City from './City';
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <div>
        <City />
      </div>
      <div className={styles.starEffect}></div>
    </div>
  );
};

export default Content;
