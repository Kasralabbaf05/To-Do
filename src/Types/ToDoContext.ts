import { ColumnType } from "./Column";
import { TaskType } from "./Task";

export type ToDoContext = {
  tasks: TaskType[]
  taskDelete: (taskId: string) => void;
  columnDelete: (columnId: string) => void;
  taskCreate: (task: TaskType) => void;
  columnCreate: (column: ColumnType) => void;
  taskUpdate: (task: TaskType) => void
  columnUpdate: (column: ColumnType) => void
};
