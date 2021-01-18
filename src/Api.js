export const API_URL =
  'https://api.hgbrasil.com/weather?key=6c10f913&format=json-cors&locale=pt';

export function GET_CITY(city) {
  return {
    url: API_URL + `&city_name=${city}`,
  };
}
