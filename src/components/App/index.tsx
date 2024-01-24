import { useState } from 'react';
import initialTasks from '../../data/tasks';
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';

function App() {
  /*
    useState va nous permettre de créer une variable d'état
    avec une valeur par défaut (initialTasks)
    useState retourne un tableau de deux élément avec
    - 1er element la variable contenant la valeur
    - 2eme element la fonction qui va nous permettre de modifier la valeur
  */
  const [tasks, setTasks] = useState(initialTasks);
  // Je calcule le nombre de tâches non terminées
  // On filtre sur nos tâches pour prendre les non fini, puis on récupère la taille du tableau
  const undoneTasksNumber = tasks.filter((task) => !task.done).length;

  const handleAddTask = (label: string) => {
    // On a besoin d'un identifiant unique, on va calculer à partir des identifiants existants
    // le prochaine identifiant
    // Je vais récupère la liste de tous mes identifiants
    const taskIds = tasks.map((task) => task.id);
    // Je vais récupérer l'identifiant le plus grand
    const maxId = Math.max(...taskIds);
    const newTask = {
      id: maxId + 1,
      label,
      done: false,
    };
    // On créer un nouveau tableau qui va contenir les tâches existantes
    // Et on lui rajoute la nouvelle tâche
    // On fait de cette manière car l'on ne doit JAMAIS modifier directement une variable d'état
    const newTasks = [
      // je déverse les tâches existantes dans le nouveau tableau grâce au spread operator `...`
      ...tasks,
      newTask,
    ];
    setTasks(newTasks);
    // console.log(label);
  };
  const handleCheckTask = (taskId: number) => {
    // Je créer un nouveau tableau à partir de mon tableau de tâches avec `map`
    const newTasks = tasks.map((task) => {
      // Si la tâche que je suis en train de parcourir a l'identifiant que je reçois en paramètre
      if (task.id === taskId) {
        return {
          // On déverse les propriétés de task dans un nouvel objet
          ...task,
          // On modifie la propriété done
          // c'est le dernier qui dit qui a raison
          done: !task.done,
          label: task.label,
        };
      }
      return task;
    });
    // Je modifie mon state avec le tableau fraichement créé
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <Form onSubmitForm={handleAddTask} />
      <Counter count={undoneTasksNumber} />
      <Tasks tasks={tasks} onCheckTask={handleCheckTask} />
    </div>
  );
}

export default App;
