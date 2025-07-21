import { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Statistics = () => {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('http://localhost:5000/api/tasks');
        
        const total = data.length;
        const completed = data.filter(task => task.completed).length;
        const pending = total - completed;
        
        setStats({ total, completed, pending });
        setError(null);
      } catch (err) {
        console.error('Erreur:', err);
        setError("Erreur de chargement des données");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  const chartData = [
    { name: 'Complétées', value: stats.completed },
    { name: 'En attente', value: stats.pending },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Statistiques de productivité
      </h1>

      {error ? (
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-400 p-4 mb-6">
          <p className="text-red-700 dark:text-red-200">{error}</p>
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg border border-blue-200 dark:border-gray-600">
              <h2 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Aperçu global</h2>
              <div className="space-y-3">
                <StatCard 
                  label="Total des tâches" 
                  value={stats.total} 
                  color="blue" 
                />
                <StatCard 
                  label="Tâches complétées" 
                  value={stats.completed} 
                  color="green" 
                />
                <StatCard 
                  label="Tâches en attente" 
                  value={stats.pending} 
                  color="yellow" 
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">Répartition</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-900 p-6 rounded-lg border border-purple-200 dark:border-gray-600">
            <h2 className="text-xl font-semibold mb-6 text-purple-800 dark:text-purple-300">Taux d'accomplissement</h2>
            <div className="flex flex-col items-center">
              <ProgressCircle 
                percentage={stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0} 
              />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {stats.completed} sur {stats.total} tâches complétées
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400'
  };

  return (
    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-600">
      <span className="font-medium dark:text-gray-300">{label}</span>
      <span className={`${colorClasses[color]} font-bold text-lg`}>
        {value}
      </span>
    </div>
  );
};

const ProgressCircle = ({ percentage }) => {
  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E0E7FF"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="10"
          strokeDasharray={`${(percentage / 100) * 283} 283`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{
            transition: 'stroke-dasharray 0.8s ease-in-out',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-purple-700 dark:text-purple-400">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Statistics;