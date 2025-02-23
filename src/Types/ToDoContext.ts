import { Column } from "./Column";
import { Task } from "./Task";

export type ToDoContext = {
  taskDelete: (taskId: string) => void;
  columnDelete: (columnId: string) => void;
  taskCreate: (task: Task) => void;
  columnCreate: (column: Column) => void;
  taskUpdate: (task: Task) => void
  columnUpdate: (column: Column) => void
};
