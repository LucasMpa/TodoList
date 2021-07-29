import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Dialog, Footer, CloseButton } from "./styles";

const removeTask = gql`
  mutation AddTodo($title: String!, $description: String, $id: Int!) {
    editTask(
      filter: { id: $id }
      data: { title: $title, description: $description }
    ) {
      title
      description
    }
  }
`;

function ModalEdit({ visibility, toggle, taskReference }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [addTodo, { error }] = useMutation(removeTask);

  useEffect(() => {
    setTitle(taskReference.title);
    setDescription(taskReference.description);
  }, [taskReference]);

  function verifyFields() {
    if (title && description) {
      return addTodo({
        variables: {
          title: title,
          description: description,
          id: taskReference.id,
        },
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
                <h3>Editar Tarefa</h3>
                <h3>{error}</h3>
                <section>
                  <span>
                    <label>Título</label>
                    <input
                      type={Text}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </span>
                  <span>
                    <label>Descrição</label>
                    <textarea
                      rows={4}
                      value={description}
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

export default ModalEdit;
