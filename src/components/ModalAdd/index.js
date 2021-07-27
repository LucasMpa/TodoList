import { gql, useMutation } from "@apollo/client";
import React from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useOrderService } from "../../contexts/orderService";
import { Container, Dialog, Footer, CloseButton } from "./styles";

function ModalAdd({ visibility, toggle, taskReference }) {
  console.log(visibility);
  const { setSpecificTask } = useOrderService();

  return (
    <>
      {!visibility ? (
        ""
      ) : (
        <Container visibility={visibility}>
          <div>
            <h3>Nova Tarefa</h3>
            <div>
              <input type={Text} />
              <textarea></textarea>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default ModalAdd;
