import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import { useState } from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = async () => {
    setIsToggling(true);
    try {
      await onToggle(task.id, task.completed);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(task.id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className="group flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow duration-300 mb-3 border-l-4 border-blue-500 dark:border-blue-400">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={handleToggle}
          disabled={isToggling || isDeleting}
          className={`p-3 rounded-full flex-shrink-0 transition-all duration-200 ${task.completed 
            ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800' 
            : 'bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'}`}
          aria-label={task.completed ? 'Marquer non complétée' : 'Marquer complétée'}
        >
          {task.completed ? <FaUndo size={14} /> : <FaCheck size={14} />}
        </button>
        
        <span
          className={`flex-1 text-lg ${task.completed 
            ? 'line-through text-gray-400 dark:text-gray-500' 
            : 'text-gray-800 dark:text-gray-200'}`}
        >
          {task.title}
        </span>
      </div>
      
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-3 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30"
        aria-label="Supprimer la tâche"
      >
        <FaTrash size={14} />
      </button>
    </li>
  );
};

export default Task;