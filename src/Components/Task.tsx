import { TaskType } from "../Types";
import { useDraggable } from "@dnd-kit/core";
import { useContext } from "react";
import { ToDoContext } from "../Contexts/To-Do-Context";

interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  const { taskDelete } = useContext(ToDoContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-col bg-darkgray rounded-md p-2.5"
    >
      <div className="flex justify-between">
        <div {...listeners} {...attributes} className="flex-1">
          <h4 className="text-silver">{task.name}</h4>
        </div>
        <div>
          <button
            onClick={() => {
              taskDelete(task.id);
            }}
            className="text-silver"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <p className="text-silver"></p>
    </div>
  );
}
