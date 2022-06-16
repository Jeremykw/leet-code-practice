import React from 'react';

import styled from 'styled-components';

import logo from './logo.svg';

export const App = () => (
  <sc.Container>
    <sc.Header>
      <sc.Logo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <sc.Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Forget React
      </sc.Link>
      <h2>number</h2>
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

  Link: styled.a`
    color: #61dafb;
  `,

  Logo: styled.img`
    height: 40vmin;
    pointer-events: none;
  `,
};
