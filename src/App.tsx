import { useEffect, useState } from "react";
import { getTasks, getColumns } from "./Services";
import { TaskType, ColumnType } from "./Types";
import Column from "./Components/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data: tasksData } = await getTasks();
      const { data: columnsData } = await getColumns();
      setTasks(tasksData);
      setColumns(columnsData);
      setLoading(!loading);
    };
    fetchData();
    console.log(columns);
    console.log(tasks);
  }, []);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const taskId = active.id as string;
    const newStatus = over.id as string;
    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
  return (
    <>
      <div className="flex flex-wrap gap-4 p-15">
        <DndContext onDragEnd={handleDragEnd}>
          {columns.map((column, id) => (
            <Column
              key={id}
              id={column.id}
              ColName={column.name}
              tasks={tasks.filter((task) => {
                return task.status === column.id;
              })}
            />
          ))}
        </DndContext>
      </div>
    </>
  );
}

export default App;
