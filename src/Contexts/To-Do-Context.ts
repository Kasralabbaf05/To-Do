import { createContext } from "react";
import { ToDoContextType } from "../Types";

export const ToDoContext = createContext<ToDoContextType>({
  taskDelete: (taskId: string) => {
    taskId;
  },
});
