import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../Helper/Error';
import styles from './CompareCitys.module.css';

const token = JSON.parse(localStorage.getItem('tokenCity'));
const CompareCitys = () => {
  if (token.length > 0)
    return (
      <div className={styles.compareCitys}>
        <div className="style">
          <table className={styles.table}>
            <tr>
              <th>CIDADE</th>
              <th>TEMP.</th>
              <th>UMIDADE</th>
              <th>VENTO</th>
            </tr>
            {token.map((x) => (
              <tr key={x.city}>
                <td>{x.city}</td>
                <td>{x.temp}</td>
                <td>{x.humidity}</td>
                <td>{x.wind_speedy}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className={styles.button}>
          <Link className="button" to="/">
            VOLTAR
          </Link>
        </div>
      </div>
    );
  else return <Error error="Não há cidades salvas." />;
};

export default CompareCitys;
