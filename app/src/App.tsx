import React, { useContext } from 'react';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Page imports

// Component imports
import Header from './components/Header';

// Context imports
import { MaterializeCssContext } from './contexts/MaterializeCssContext';

const App: React.FC = () => {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

  return (
    <>
      <Header />
    </>
  );
};

export default App;
