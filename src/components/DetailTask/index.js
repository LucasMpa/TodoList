import React, { useState } from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
//import { useOrderService } from "../../contexts/orderService";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Container,
  Details,
  Actions,
  NewTask,
  NoDataContainer,
  NoDataHamburguer,
} from "./styles";
import { useOrderService } from "../../contexts/orderService";
import { transformMounth } from "../../utils/dateActions";
import ModalDialog from "../ModalDialog";
import Empty from "../../Assets/no_data.png";
import ModalAdd from "../ModalAdd";
import ModalEdit from "../ModalEdit";

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

const toggleTask = gql`
  mutation addTodo($id: Int!, $conclusion: Boolean!) {
    conclusionToggle(filter: { id: $id }, data: { is_conclued: $conclusion }) {
      is_conclued
    }
  }
`;
function ButtonConfirm({ openModal }) {
  return (
    <NewTask onClick={() => openModal()}>
      <span>Adicionar Tarefa</span>
    </NewTask>
  );
}
function NoData() {
  const { toggleTaskList, setToggleTaskList } = useOrderService();
  const [modalNewTask, setModalNewTask] = useState();
  return (
    <>
      <ModalAdd
        visibility={modalNewTask}
        toggle={() => setModalNewTask(!modalNewTask)}
      />
      <NoDataHamburguer>
        <GiHamburgerMenu onClick={() => setToggleTaskList(!toggleTaskList)} />
      </NoDataHamburguer>
      <NoDataContainer>
        <img src={Empty} alt="Empty" />
        <h2>Ops</h2>
        <h3>Parece que você não tem dados</h3>
        <ButtonConfirm openModal={() => setModalNewTask(true)} />
      </NoDataContainer>
    </>
  );
}

function DetailTask() {
  const { specificTask, toggleTaskList, setToggleTaskList } = useOrderService();
  const [addTodo] = useMutation(toggleTask);
  const { loading, data } = useQuery(tasks);
  const [modalEditTask, setModalEditTask] = useState(false);
  const [modalNewTask, setModalNewTask] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  if (loading) return "";

  function getDetailsById(id) {
    const task = data.tasks.filter((data) => {
      return data.id === id;
    });

    return task;
  }

  const taskDetail = specificTask ? getDetailsById(specificTask)[0] : "";
  const getFullDate = specificTask ? parseInt(taskDetail.created_at) : "";
  const day = specificTask ? new Date(getFullDate).getDate() : "";
  const fullYear = specificTask ? new Date(getFullDate).getFullYear() : "";
  const month = specificTask ? new Date(getFullDate).getMonth() + 1 : "";

  return (
    <>
      {specificTask ? (
        <>
          <ModalAdd
            visibility={modalNewTask}
            toggle={() => setModalNewTask(!modalNewTask)}
          />
          <ModalEdit
            visibility={modalEditTask}
            taskReference={getDetailsById(specificTask)[0]}
            toggle={() => setModalEditTask(!modalEditTask)}
          />
          <ModalDialog
            visibility={openModal}
            toggle={() => setOpenModal(!openModal)}
            taskReference={
              specificTask ? getDetailsById(specificTask)[0].id : 0
            }
          />
          <Container isConclued={taskDetail.is_conclued}>
            <Actions>
              <span onClick={() => setToggleTaskList(!toggleTaskList)}>
                <GiHamburgerMenu />
              </span>
              <div>
                <span onClick={() => setModalEditTask(!modalEditTask)}>
                  <AiFillEdit />
                </span>
                <span onClick={() => setOpenModal(!openModal)}>
                  <AiFillDelete />
                </span>
              </div>
            </Actions>
            <div>
              <span
                onClick={(e) =>
                  addTodo({
                    variables: {
                      id: taskDetail.id,
                      conclusion: !taskDetail.is_conclued,
                    },
                  })
                }
              >
                <AiFillCheckCircle />
                {taskDetail.is_conclued ? "Concluído" : "Pendente"}
              </span>

              <Details>
                <h2>{taskDetail.title}</h2>
                <h4>{`${day} ${transformMounth(month)} ${fullYear}`}</h4>
                <p>{taskDetail.description}</p>
              </Details>
            </div>
            <ButtonConfirm openModal={() => setModalNewTask(true)} />
          </Container>
        </>
      ) : (
        <NoData />
      )}
    </>
  );
}

export default DetailTask;
