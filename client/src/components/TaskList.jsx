import Task from './Task';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Aucune tâche pour le moment. Ajoutez-en une !
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;