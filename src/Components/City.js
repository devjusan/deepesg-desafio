import React from 'react';
import styles from './City.module.css';
import useFetch from '../Hook/useFetch';
import { GET_CITY } from '../Api';
import SearchResult from './SearchResult';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import SavedCitys from './SavedCitys';
import { Link } from 'react-router-dom';

const City = () => {
  const [valueCity, setValueCity] = React.useState('');
  const { request, data, loading, error } = useFetch();
  const token = localStorage.getItem('tokenCity');

  async function handleSubmit(e) {
    e.preventDefault();
    const { url } = GET_CITY(valueCity);
    await request(url);
  }

  function handleChange(e) {
    setValueCity(e.target.value);
  }

  if (loading) return <Loading loading={loading} />;
  if (error) return <Error error={error} />;
  return (
    <div className={`${styles.city}`}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputSearch}>
          <input
            required
            onChange={handleChange}
            placeholder="Pesquisar cidade..."
            type="text"
            value={valueCity}
          />
          <button
            className={`${styles.lupa} ${styles.searchIcon} ${styles.icon}`}
          ></button>
        </div>
      </form>
      {data &&
        (data.by === 'default' ? (
          <Error error={'Cidade não encontrada.'} />
        ) : null)}
      <div>{data && <SearchResult city={data.results} />}</div>
      <div>
        <SavedCitys />
      </div>

      {/* acionado caso exista token para comparar os elementos */}
      {token && (
        <div>
          <Link className="button" to="/compare">
            COMPARAR
          </Link>
        </div>
      )}
    </div>
  );
};

export default City;
