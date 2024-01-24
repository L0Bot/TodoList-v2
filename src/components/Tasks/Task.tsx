/* eslint-disable jsx-a11y/label-has-associated-control */
interface ITask {
  id: number;
  label: string;
  done: boolean;
}
interface TaskProps {
  task: ITask
  onCheckTask: (id: number) => void
}
function Task({ task, onCheckTask }: TaskProps) {
  const handleChangeCheckbox = () => {
    onCheckTask(task.id);
  };
  return (
    <li>
      <label
        className={`list-item ${task.done ? 'list-item--done' : ''}`}
      >
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleChangeCheckbox}
        />
        {task.label}
      </label>
    </li>
  );
}

export default Task;
