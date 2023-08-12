import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return <TaskContext.Provider value={{
    tasks,
    createTask,
    deleteTask
  }}>{children}</TaskContext.Provider>;
}
