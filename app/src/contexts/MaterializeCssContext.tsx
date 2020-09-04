import React, { createContext } from 'react';

// On component did mount m init
import M from 'materialize-css';

const MaterializeCssContext = createContext({
  materializeReinit: (): void => {},
  M: M,
});

interface providerProps {
  children: JSX.Element;
}

const MaterializeCssContextProvider = ({ children }: providerProps) => {
  const materializeReinit = () => {
    setTimeout(() => {
      M.AutoInit();
      M.Collapsible.init(document.querySelectorAll('.collapsible'), {
        inDuration: 400,
        outDuration: 400,
      });
      M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
        accordion: false,
      });
    }, 100);
  };

  return (
    <MaterializeCssContext.Provider
      value={{
        materializeReinit: materializeReinit,
        M: M,
      }}
    >
      {children}
    </MaterializeCssContext.Provider>
  );
};

export { MaterializeCssContextProvider, MaterializeCssContext };
