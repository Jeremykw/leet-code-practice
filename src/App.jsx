import React from 'react';

import styled from 'styled-components';

export const App = () => (
  <sc.Container>
    <sc.Header>
      <h1>Welcome</h1>
    </sc.Header>
  </sc.Container>
);

const sc = {
  Container: styled.div`
    text-align: center;
  `,

  Header: styled.header`
    align-items: center;
    background-color: #282c34;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    min-height: 100vh;
  `,
};
