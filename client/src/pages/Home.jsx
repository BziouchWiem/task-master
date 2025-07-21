import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import illustration from '../assets/illustration.png';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/tasks');
      setTasks(data);
      setError(null);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Impossible de charger les tâches');
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/tasks', { title });
      setTasks(prevTasks => [...prevTasks, data]);
    } catch (err) {
      console.error('Erreur:', err);
      setError("Erreur lors de l'ajout");
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed });
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (err) {
      console.error('Erreur:', err);
      setError("Erreur lors de la mise à jour");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      console.error('Erreur:', err);
      setError("Erreur lors de la suppression");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Organisez votre vie avec TaskMaster
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ajoutez, gérez et suivez vos tâches quotidiennes en un seul endroit.
            Restez productif et ne perdez plus jamais une idée importante.
          </p>
          <TaskForm onAdd={addTask} />
        </div>
        <div className="md:w-1/2">
          <img src={illustration} alt="Task illustration" className="w-full h-auto max-w-md mx-auto dark:filter dark:brightness-75" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500 dark:text-red-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
              </div>
            </div>
          </div>
        ) : (
          <TaskList 
            tasks={tasks} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        )}
      </div>
    </div>
  );
};

export default Home;