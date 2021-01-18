import React from 'react';
import styles from './SavedCitys.module.css';
import RenderCitys from './RenderCitys';

const SavedCitys = () => {
  const token = JSON.parse(localStorage.getItem('tokenCity'));

  if (token.length > 0)
    return (
      <div className="style">
        <RenderCitys token={token} />
      </div>
    );
  else return <div className={styles.noSavedItems}>Sem itens salvos.</div>;
};

export default SavedCitys;
