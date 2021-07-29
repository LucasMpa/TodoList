import React, { useContext, createContext, useState } from "react";

const OrderServiceContext = createContext({});

export const OrderServiceProvider = ({ children }) => {
  const [specificTask, setSpecificTask] = useState(null);
  const [toggleTaskList, setToggleTaskList] = useState(false);

  return (
    <OrderServiceContext.Provider
      value={{
        specificTask,
        toggleTaskList,
        setSpecificTask,
        setToggleTaskList,
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
