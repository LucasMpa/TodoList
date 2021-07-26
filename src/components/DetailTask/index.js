import React from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
//import { useOrderService } from "../../contexts/orderService";
import { gql, useQuery } from "@apollo/client";
import { Container, Details, Actions, NewTask } from "./styles";
import { useOrderService } from "../../contexts/orderService";
import { transformMounth } from "../../utils/taskActions";

function DetailTask() {
  const { specificTask } = useOrderService();

  const tasks = gql`
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

  const { loading, data } = useQuery(tasks);

  if (loading) return "";

  function getDetailsById(id) {
    return data.tasks.filter((data) => {
      return data.id === id;
    });
  }
  const taskDetail = getDetailsById(specificTask)[0];
  const getFullDate = parseInt(taskDetail.created_at);
  const day = new Date(getFullDate).getDate();
  const fullYear = new Date(getFullDate).getFullYear();
  const month = new Date(getFullDate).getMonth() + 1;

  return (
    <>
      <Container isConclued={taskDetail.is_conclued}>
        <Actions>
          <span>
            <AiFillEdit />
          </span>
          <span>
            <AiFillDelete />
          </span>
        </Actions>
        <div>
          <span>
            <AiFillCheckCircle />
            {taskDetail.is_conclued ? "Concluído" : "Pendente"}
          </span>

          <Details>
            <h2>{taskDetail.title}</h2>
            <h4>{`${day} ${transformMounth(month)} ${fullYear}`}</h4>
            <p>{taskDetail.description}</p>
          </Details>
        </div>
        <NewTask>
          <span>Adicionar Tarefa</span>
        </NewTask>
      </Container>
    </>
  );
}

export default DetailTask;
