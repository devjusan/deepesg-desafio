import React from 'react';
import UserContext from '../UserContext';
import styles from './SearchResult.module.css';

const SearchResult = ({ city }) => {
  let { allData } = React.useContext(UserContext);

  let item = city;
  let tokenCity = JSON.parse(localStorage.getItem('tokenCity'));

  // função que filtra alguns erros
  function handleClick() {
    if (city) {
      if (tokenCity) {
        //se o usuário tentar adicionar mais do que 5 cidades.
        if (tokenCity.length > 5) {
          return alert('Não é possível salvar mais do que 5 cidades.');
        }

        // verifica se a cidade adicionada já existe no token
        const mapIsEqual = tokenCity.filter((x) => {
          return x['city'].includes(item.city);
        });
        if (mapIsEqual.length > 0) {
          return alert('A cidade inserida já está salva.');
        }

        //adiciona de fato a cidade, caso não seja detectado erros
        allData = tokenCity.slice(); // copiar
        allData.push({
          city: item.city,
          temp: item.temp,
          humidity: item.humidity,
          wind_speedy: item.wind_speedy,
        });
        allData = JSON.stringify(allData);
        localStorage.setItem('tokenCity', allData);
        // recarregar tela para atualizar os itens salvos
        window.location.reload();
      } else {
        allData.push({
          city: item.city,
          temp: item.temp,
          humidity: item.humidity,
          wind_speedy: item.wind_speedy,
        });
        allData = JSON.stringify(allData);
        localStorage.setItem('tokenCity', allData);

        window.location.reload();
      }
    }
  }

  if (city)
    return (
      <div key={city.city} className={styles.searchResult}>
        <h3>{city.city}</h3>
        <ul>
          <li>
            Temperatura: <strong> {city.temp}°C</strong>
          </li>
          <li>
            Umidade: <strong>{city.humidity}</strong>
          </li>
          <li>
            Velocidade do vento: <strong>{city.wind_speedy}</strong>
          </li>
        </ul>
        <button onClick={handleClick}>Salvar</button>
      </div>
    );
  else return null;
};

export default SearchResult;
