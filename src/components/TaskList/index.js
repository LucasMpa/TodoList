import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { Container, ListTasks, TitleSection, Content } from "./styles";

const getTasks = gql`
  query {
    tasks {
      id
      title
      description
      is_conclued
    }
  }
`;

function TaskList() {
  const [activeOpenTasks, setActiveOpenTasks] = useState(false);
  const [activeClosedTasks, setActiveClosedTasks] = useState(false);
  const { loading, data } = useQuery(getTasks);

  if (loading) return "";
  console.log(data);

  return (
    <>
      <Container>
        <Content>
          <TitleSection active={activeOpenTasks}>
            <h1>Tarefas Abertas</h1>
            <IoIosArrowUp
              onClick={() => setActiveOpenTasks(!activeOpenTasks)}
            />
          </TitleSection>
          <ListTasks active={activeOpenTasks}>
            {data.tasks.map((dados, index) => {
              if (dados.is_conclued === false) {
                return (
                  <div>
                    <AiOutlineCheckCircle />
                    <div>
                      <h2>{dados.title}</h2>
                      <h3>27 Jul 2021</h3>
                    </div>
                  </div>
                );
              }
              return "";
            })}
          </ListTasks>
        </Content>
        <Content>
          <TitleSection active={activeClosedTasks}>
            <h1>Tarefas Fechadas</h1>
            <IoIosArrowUp
              onClick={() => setActiveClosedTasks(!activeClosedTasks)}
            />
          </TitleSection>
          <ListTasks active={activeClosedTasks}>
            {data.tasks.map((dados, index) => {
              if (dados.is_conclued === true) {
                return (
                  <div>
                    <AiOutlineCheckCircle />
                    <div>
                      <h2>{dados.title}</h2>
                      <h3>27 Jul 2021</h3>
                    </div>
                  </div>
                );
              }
              return "";
            })}
          </ListTasks>
        </Content>
      </Container>
    </>
  );
}

export default TaskList;
