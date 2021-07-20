import React from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";

import { Container, Details, Actions, NewTask } from "./styles";

function DetailTask() {
  return (
    <>
      <Container>
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
            Concluído
          </span>

          <Details>
            <h2>Fix the bugs in the application</h2>
            <h4>21 Jul 2021</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sagittis, odio in iaculis porta, odio urna tincidunt augue, sit
              amet sollicitudin sapien massa eget ex. Sed at porttitor diam, et
              accumsan ante. Mauris finibus, felis ac posuere mollis, quam neque
              ornare justo, vel efficitur ante sem finibus dui. Donec sit amet
              justo id turpis bibendum feugiat. Aliquam eu lorem eu metus
              eleifend accumsan. Aliquam erat volutpat.
            </p>
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
