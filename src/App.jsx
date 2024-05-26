import {useState, useEffect} from "react";
import styled from 'styled-components';

import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"



const Background = styled.div `
  background-image: url('../src/assets/img/landing.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  `

const AppContainer = styled.div `
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const ContentContainer = styled.div `
  background-color:  rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px  rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
`

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || []));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task) => {
    //id, title, done
    setTasks([...tasks, {id: Date.now(),
      text:task,
      done:false}]);

    //localStorage  
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  }

  return (
    <>
      <AppContainer>
        <Background />
        <ContentContainer>
          <h1>Lista de Tarefas</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList 
            tasks={tasks}
            onDeleteTask={deleteTask}
            onToggleTaskDone={toggleTaskDone}
          />
        </ContentContainer>
      </AppContainer>
    </>
  )
}

export default App; 