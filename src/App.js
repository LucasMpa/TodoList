import React from "react";
import TaskList from "./components/TaskList";
import DetailTask from "./components/DetailTask";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client-graphql";
import { OrderServiceProvider } from "./contexts/orderService";

function App() {
  return (
    <>
      <OrderServiceProvider>
        <ApolloProvider client={client}>
          <TaskList />
          <DetailTask />
        </ApolloProvider>
      </OrderServiceProvider>
    </>
  );
}

export default App;
