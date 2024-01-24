import Task from './Task';

interface ITask {
  id: number;
  label: string;
  done: boolean;
}
interface TasksProps {
  // Pour décrire un tableau on utilise les []
  // Il faut également définir ce que contient le tableau
  // on écrit `monType[]` => ce qui signifie un tableau contenant des éléments de type `monType`
  tasks: ITask[]
  onCheckTask: (id: number) => void
}

function Tasks({ tasks, onCheckTask }: TasksProps) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onCheckTask={onCheckTask}
        />
      ))}
    </ul>
  );
}

export default Tasks;
