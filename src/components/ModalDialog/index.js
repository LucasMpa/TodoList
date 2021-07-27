import { gql, useMutation } from "@apollo/client";
import React from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useOrderService } from "../../contexts/orderService";
import { Container, Dialog, Footer, CloseButton } from "./styles";

const removeTask = gql`
  mutation AddTodo($id: Int!) {
    removeTask(filter: { id: $id }) {
      id
      title
      description
    }
  }
`;

function ModalDialog({ visibility, toggle, taskReference }) {
  const { setSpecificTask } = useOrderService();
  const [addTodo] = useMutation(removeTask);

  function removeAction() {
    addTodo({ variables: { id: taskReference } })
      .then(toggle)
      .then(setSpecificTask(null));
  }

  return (
    <>
      {!visibility || taskReference === 0 ? (
        ""
      ) : (
        <Container visibility={visibility}>
          <Dialog>
            <CloseButton onClick={() => toggle()}>
              <AiOutlineClose />
            </CloseButton>
            <span>
              <div>
                <AiFillDelete />
              </div>
              <h2>Opa!</h2>
              <h3>Deseja excluir essa tarefa?</h3>
            </span>

            <Footer onClick={() => removeAction()}>
              <div>Confirmar</div>
            </Footer>
          </Dialog>
        </Container>
      )}
    </>
  );
}

export default ModalDialog;
