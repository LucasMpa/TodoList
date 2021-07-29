import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { useOrderService } from "../../contexts/orderService";
import { transformMounth } from "../../utils/dateActions";
import {
  Container,
  ListTasks,
  TitleSection,
  TaskUnit,
  CloseBlock,
} from "./styles";

const getTasks = gql`
  query {
    tasks {
      id
      title
      description
      is_conclued
      created_at
    }
  }
`;

function TaskList() {
  const [activeOpenTasks, setActiveOpenTasks] = useState(false);
  const [activeClosedTasks, setActiveClosedTasks] = useState(false);
  const { loading, data } = useQuery(getTasks, { pollInterval: 100 });

  const { setSpecificTask, toggleTaskList, setToggleTaskList } =
    useOrderService();

  if (loading) return "";

  function setTaskAndClose(id) {
    setSpecificTask(id);
    setToggleTaskList(!toggleTaskList);
  }

  function TaskListContent({ listStatus, taskCompleted }) {
    return (
      <ListTasks active={listStatus}>
        {data.tasks.map((dados) => {
          const getFullDate = parseInt(dados.created_at);
          const day = new Date(getFullDate).getDate();
          const fullYear = new Date(getFullDate).getFullYear();
          const month = new Date(getFullDate).getMonth() + 1;

          if (dados.is_conclued === taskCompleted) {
            return (
              <TaskUnit
                onClick={() => setTaskAndClose(dados.id)}
                isConclued={dados.is_conclued}
              >
                <AiOutlineCheckCircle />
                <div>
                  <h2>{dados.title}</h2>
                  <h3>{`${day} ${transformMounth(month)} ${fullYear}`}</h3>
                </div>
              </TaskUnit>
            );
          }
          return "";
        })}
      </ListTasks>
    );
  }

  return (
    <>
      <Container visibility={toggleTaskList}>
        <TitleSection
          active={activeOpenTasks}
          onClick={() => setActiveOpenTasks(!activeOpenTasks)}
        >
          <h1>Tarefas Abertas</h1>
          <IoIosArrowUp />
        </TitleSection>
        <TaskListContent listStatus={activeOpenTasks} taskCompleted={false} />

        <TitleSection
          active={activeClosedTasks}
          onClick={() => setActiveClosedTasks(!activeClosedTasks)}
        >
          <h1>Tarefas Fechadas</h1>
          <IoIosArrowUp />
        </TitleSection>
        <TaskListContent listStatus={activeClosedTasks} taskCompleted={true} />
      </Container>
      <CloseBlock
        onClick={() => setToggleTaskList(!toggleTaskList)}
        visibility={toggleTaskList}
      ></CloseBlock>
    </>
  );
}

export default TaskList;
