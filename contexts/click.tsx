import { createContext, useState } from "react";

const ClickContext = createContext(() => {
    
});

export const ClickProvider = ({ children }) => {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);

  return (
    <ClickContext.Provider value={[clickAmount, increment]}>
      {children}
    </ClickContext.Provider>
  );
};

export default ClickContext;
