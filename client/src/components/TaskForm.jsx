import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onAdd(title);
      setTitle('');
    } catch (err) {
      console.error('Erreur:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Quelle est votre prochaine tâche ?"
          className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-md disabled:opacity-50"
          disabled={isSubmitting || !title.trim()}
        >
          <FaPlus />
          <span>{isSubmitting ? 'Ajout en cours...' : 'Ajouter'}</span>
        </button>
      </div>
    </form>
  );
};

export default TaskForm;