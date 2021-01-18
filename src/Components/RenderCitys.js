import React from 'react';
import styles from './SavedCitys.module.css';
import del from '../Asset/delete.svg';

const RenderCitys = ({ token }) => {
  //remove item do token
  let actual = '';
  function handleSubmit(e) {
    e.preventDefault();

    // seleciona texto do elemento
    actual = e.target.innerText;
    console.log(actual);
    // ao clicar no botao de deletar, a função
    // filtra todos os elementos diferentes do target
    const newArray = token.filter((x) => actual !== x.city);
    localStorage.setItem('tokenCity', JSON.stringify(newArray));
    token = JSON.parse(localStorage.getItem('tokenCity'));
    window.location.reload();
  }

  return (
    <div>
      {token.map((x) => (
        <form key={x.city} onSubmit={handleSubmit}>
          <div className={styles.item}>
            <div>{x.city}</div>
            <button type="submit" value={x.city} className={styles.buttonX}>
              <img src={del} alt="Deletar" />
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default RenderCitys;
