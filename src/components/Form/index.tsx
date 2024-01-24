import { useState } from 'react';

interface FormProps {
  onSubmitForm: (label: string) => void;
}
function Form({ onSubmitForm }: FormProps) {
  // 1. On créer une variable d'état qui va contenir la valeur de notre input
  const [todoLabel, setTodoLabel] = useState('');

  // 4. On créer une fonction qui va nous permettre de mettre à jour `todoLabel`
  // au onChange de notre input
  const handleChangeTodoLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    // On récupère la valeur de notre input
    const newValue = event.target.value;
    // On met à jour notre variable d'état
    setTodoLabel(newValue);
  };

  // Fonction appeler lorsque l'utilisateur soumet le formulaire
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // J'annule le comportement par défaut qui est de recharger la page
    event.preventDefault();
    // Je vais prévenir le composant parent que le formulaire à été soumis
    // Je vais également lui donner la valeur de todoLabel pour qu'il puisse la gérer
    // onSubmitForm est la propriété passé au composant From
    // Notre contrat indique que c'est une fonction qui prend en paramètre une string
    onSubmitForm(todoLabel);
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        // 2. On fixe la valeur de notre input à celle de notre variable d'état
        value={todoLabel}
        // 3. On écoute l'événement onChange de notre input pour pouvoir mettre à jour `todoLabel`
        onChange={handleChangeTodoLabel}
      />
    </form>
  );
}

export default Form;
