interface CounterProps {
  count: number;
}
function Counter({ count }: CounterProps) {
  let message = 'Aucune tâche en cours';
  if (count === 1) {
    message = '1 tâche en cours';
  } else if (count > 1) {
    message = `${count} tâches en cours`;
  }
  return (
    <p className="counter">
      {message}
    </p>
  );
}

export default Counter;
