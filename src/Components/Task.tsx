import { TaskType } from "../Types";
import { useDraggable } from "@dnd-kit/core";

interface TaskProps {
  task: TaskType
}
export default function Task({task}: TaskProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({id: task.id})
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="flex flex-col bg-darkgray rounded-md p-2.5">
      <div className="flex justify-between">
        <h4 className="text-silver">{task.name}</h4>
        <button className="text-silver">X</button>
      </div>
      <p className="text-silver"></p>
    </div>
  );
}
