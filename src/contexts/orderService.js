import React, { useContext, createContext, useState } from "react";

const OrderServiceContext = createContext({});

export const OrderServiceProvider = ({ children }) => {
  const [specificTask, setSpecificTask] = useState(null);

  return (
    <OrderServiceContext.Provider
      value={{
        specificTask,
        setSpecificTask,
      }}
    >
      {children}
    </OrderServiceContext.Provider>
  );
};

export const useOrderService = () => {
  const context = useContext(OrderServiceContext);

  return context;
};
