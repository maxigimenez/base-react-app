import React, { useState, useEffect } from 'react';
import { api } from '../../helper/axios';

export const Home: React.FunctionComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('https://sheetapi.co/apis/8LZaJRD5vCK7wT5y1dNLM6/raw');
      setData(data);
    }
    fetch();
  }, []);

  return <div>
    Welcome!
    <hr />
    Fetched data: { data.length }
  </div>;
}
