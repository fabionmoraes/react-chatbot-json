import React from 'react';
import Routes from '~/routes';

import './config/ReactotronConfig';

import Maincss from './styles/main';
import { Body } from './styles/styles';

function App() {
  return (
    <Body>
      <Routes />
      <Maincss />
    </Body>
  );
}

export default App;
