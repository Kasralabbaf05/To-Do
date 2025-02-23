import { TaskType } from "../Types";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  id: string,
  ColName: string,
  tasks: TaskType[]
}
export default function Column(props:ColumnProps) {
  const {setNodeRef} = useDroppable({id:props.id})
  return (
    <>
      <div className="flex flex-col w-1/3 items-center bg-gray rounded-md px-3">
        <h2 className="text-silver py-3">{props.ColName}</h2>
        <div ref={setNodeRef} className="flex flex-col gap-2 w-full pb-3">{props.tasks.map((task,id) => <Task key={id} task={task} />)}</div>
        <p></p>
      </div>
    </>
  );
}
