import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { Container, ListTasks, TitleSection, Content } from "./styles";

function TaskList() {
  const [activeOpenTasks, setActiveOpenTasks] = useState(false);
  const [activeClosedTasks, setActiveClosedTasks] = useState(false);
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
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
          </ListTasks>
        </Content>{" "}
        <Content>
          <TitleSection active={activeClosedTasks}>
            <h1>Tarefas Fechadas</h1>
            <IoIosArrowUp
              onClick={() => setActiveClosedTasks(!activeClosedTasks)}
            />
          </TitleSection>
          <ListTasks active={activeClosedTasks}>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
            <div>
              <AiOutlineCheckCircle />
              <div>
                <h2>Fix the bugs in the application</h2>
                <h3>27 Jul 2021</h3>
              </div>
            </div>
          </ListTasks>
        </Content>
      </Container>
    </>
  );
}

export default TaskList;
