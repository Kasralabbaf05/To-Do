import { useEffect, useState } from "react";
import { getTasks, getColumns } from "./Services";
import { Task, Column } from "./Types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: tasksData } = await getTasks();
      const { data: columnsData } = await getColumns();
      setTasks(tasksData);
      setColumns(columnsData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>To-Do</div>
    </>
  );
}

export default App;
