import React, {createContext} from 'react';

const ExampleContext = createContext();

const ExampleContextProvider = (props) => {
  return (
    <ExampleContext.Provider
      value={{
        helloWorld: 'Hello World!',
      }}>
      {props.children}
    </ExampleContext.Provider>
  );
};

export {ExampleContextProvider, ExampleContext};
