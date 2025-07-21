import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaChartLine, FaSync, FaLock } from 'react-icons/fa';
import { FiUser, FiCalendar, FiBell } from 'react-icons/fi';
import teamImage from '../assets/team.jpg';
import appScreenshot from '../assets/app-screenshot.png';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            À propos de TaskMaster
          </h1>
          
          <div className="mb-8">
            <img 
              src={appScreenshot} 
              alt="App Screenshot" 
              className="rounded-lg shadow mb-6 w-full border border-gray-200 dark:border-gray-600"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              TaskMaster est une application de gestion de tâches conçue pour vous aider à organiser 
              votre vie quotidienne. Simple mais puissante, elle vous permet de suivre vos tâches 
              où que vous soyez.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <FiUser className="mx-auto text-2xl text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Utilisateurs</span>
                <p className="font-bold text-gray-800 dark:text-white">10,000+</p>
              </div>
              <div className="text-center">
                <FiCalendar className="mx-auto text-2xl text-purple-600 dark:text-purple-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Tâches/jour</span>
                <p className="font-bold text-gray-800 dark:text-white">50,000+</p>
              </div>
              <div className="text-center">
                <FiBell className="mx-auto text-2xl text-green-600 dark:text-green-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Rappels</span>
                <p className="font-bold text-gray-800 dark:text-white">20,000+</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg mb-8 border border-blue-100 dark:border-gray-600">
            <h2 className="font-semibold text-xl mb-4 text-blue-700 dark:text-blue-400">Notre stack technique :</h2>
            <div className="space-y-4">
              <div className="flex items-center bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaReact className="text-blue-500 dark:text-blue-400 text-2xl mr-4" />
                <div>
                  <h3 className="font-medium dark:text-white">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    React avec React Router, Tailwind CSS et Context API
                  </p>
                </div>
              </div>
              
              <div className="flex items-center bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaNodeJs className="text-green-500 dark:text-green-400 text-2xl mr-4" />
                <div>
                  <h3 className="font-medium dark:text-white">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Node.js + Express avec système d'API RESTful
                  </p>
                </div>
              </div>
              
              <div className="flex items-center bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaDatabase className="text-orange-500 dark:text-orange-400 text-2xl mr-4" />
                <div>
                  <h3 className="font-medium dark:text-white">Base de données</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    MySQL avec ORM Sequelize pour la persistance des données
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-gray-50 dark:bg-gray-900 p-6">
          <div className="mb-8">
            <img 
              src={teamImage} 
              alt="Notre équipe" 
              className="rounded-lg shadow w-full border border-gray-200 dark:border-gray-600"
            />
            <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Notre équipe</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous sommes une petite équipe passionnée par la création d'applications utiles et 
              intuitives. Notre objectif est de simplifier votre vie quotidienne.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Développeurs Fullstack
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                Designers UX/UI
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                Experts en productivité
              </span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
            <h2 className="font-semibold text-xl mb-3 text-purple-700 dark:text-purple-400">Fonctionnalités clés :</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="dark:text-white">
                  <strong>Création et gestion de tâches</strong> - Ajoutez, modifiez et organisez vos tâches en quelques clics
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <FaMobile className="w-4 h-4" />
                </span>
                <span className="dark:text-white">
                  <strong>Design responsive</strong> - Accédez à vos tâches depuis n'importe quel appareil
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <FaChartLine className="w-4 h-4" />
                </span>
                <span className="dark:text-white">
                  <strong>Statistiques avancées</strong> - Suivez votre productivité avec des graphiques détaillés
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <FaSync className="w-4 h-4" />
                </span>
                <span className="dark:text-white">
                  <strong>Synchronisation en temps réel</strong> - Vos tâches sont toujours à jour sur tous vos appareils
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <FaLock className="w-4 h-4" />
                </span>
                <span className="dark:text-white">
                  <strong>Sécurité des données</strong> - Cryptage AES-256 pour protéger vos informations
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                <span className="dark:text-white">
                  <strong>Export de données</strong> - Exportez vos tâches au format PDF ou CSV
                </span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 p-4 rounded-lg text-white">
            <h3 className="font-bold mb-2">Prêt à booster votre productivité ?</h3>
            <p className="text-sm opacity-90">Commencez dès maintenant et organisez votre vie en quelques minutes.</p>
            <button className="mt-3 bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              Essayer gratuitement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;