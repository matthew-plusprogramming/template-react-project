import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Page imports

// Component imports
import Header from './components/Header';

// Context imports
import {MaterializeCssContext} from './contexts/MaterializeCssContext';

function App() {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
