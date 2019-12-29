import React, { useState, useEffect } from 'react';
import { api } from '../../helper/axios';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  color: tomato;
`;

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
    <Title>Welcome!</Title>
    <hr />
    Fetched data: { data.length }
  </div>;
}
