import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { useOrderService } from "../../contexts/orderService";
import { transformMounth } from "../../utils/taskActions";
import { Container, ListTasks, TitleSection, TaskUnit } from "./styles";

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
  const { loading, data } = useQuery(getTasks);

  const { specificTask, setSpecificTask } = useOrderService();

  console.log(specificTask);

  if (loading) return "";

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
                onClick={() => setSpecificTask(dados.id)}
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
      <Container>
        <TitleSection active={activeOpenTasks}>
          <h1>Tarefas Abertas</h1>
          <IoIosArrowUp onClick={() => setActiveOpenTasks(!activeOpenTasks)} />
        </TitleSection>
        <TaskListContent listStatus={activeOpenTasks} taskCompleted={false} />

        <TitleSection active={activeClosedTasks}>
          <h1>Tarefas Fechadas</h1>
          <IoIosArrowUp
            onClick={() => setActiveClosedTasks(!activeClosedTasks)}
          />
        </TitleSection>
        <TaskListContent listStatus={activeClosedTasks} taskCompleted={true} />
      </Container>
    </>
  );
}

export default TaskList;
