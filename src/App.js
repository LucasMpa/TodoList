import React from "react";
import TaskList from "./components/TaskList";
import DetailTask from "./components/DetailTask";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client-graphql";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <TaskList />
        <DetailTask />
      </ApolloProvider>
    </>
  );
}

export default App;
