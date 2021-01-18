import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className={styles.error}>
      <p style={{ color: '#f31' }}>{error}</p>
      <p>
        <Link className="button" to="/">
          VOLTAR
        </Link>
      </p>
    </div>
  );
};

export default Error;
