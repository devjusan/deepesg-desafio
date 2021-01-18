import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (somethingWrong) {
      json = null;
      setError(somethingWrong.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
