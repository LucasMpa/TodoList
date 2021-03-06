import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Dialog, Footer, CloseButton } from "./styles";

const removeTask = gql`
  mutation AddTodo($title: String!, $description: String) {
    newTask(data: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

function ModalAdd({ visibility, toggle }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [addTodo, { error }] = useMutation(removeTask);

  function verifyFields() {
    if (title && description) {
      return addTodo({
        variables: { title: title, description: description },
      })
        .then(toggle)
        .then(setTitle(null), setDescription(null));
    }
    if (!title || !description) {
      return toast.dark("Preencha todos os campos para continuar", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      {!visibility ? (
        ""
      ) : (
        <>
          <ToastContainer />
          <Container visibility={visibility}>
            <Dialog>
              <div>
                <CloseButton onClick={() => toggle()}>
                  <AiOutlineClose />
                </CloseButton>
                <h3>Nova Tarefa</h3>
                <h3>{error}</h3>
                <section>
                  <span>
                    <label>Título</label>
                    <input
                      type={Text}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </span>
                  <span>
                    <label>Descrição</label>
                    <textarea
                      rows={4}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </span>
                </section>
              </div>
              <Footer onClick={() => verifyFields()}>
                <div>Confirmar</div>
              </Footer>
            </Dialog>
          </Container>
        </>
      )}
    </>
  );
}

export default ModalAdd;
