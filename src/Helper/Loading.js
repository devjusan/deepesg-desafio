import React from 'react';
import styles from './Loading.module.css';

const Loading = ({ loading }) => {
  if (loading)
    return (
      <div className={styles.loading}>
        <div className={styles.loader}></div>
      </div>
    );
};

export default Loading;
