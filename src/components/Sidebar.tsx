import { BookOpen, Rocket, Code, Database, Shield, Wrench, Globe, Zap } from 'lucide-react';

interface SidebarProps {
  currentTopic: string | null;
  setCurrentTopic: (topic: string) => void;
  darkMode: boolean;
}

export function Sidebar({ currentTopic, setCurrentTopic, darkMode }: SidebarProps) {
  const topics = [
    { id: '1', name: 'Introduction to Django', icon: BookOpen, emoji: '🎯' },
    { id: '2', name: 'Environment Setup', icon: Wrench, emoji: '🛠️' },
    { id: '3', name: 'Project & App Structure', icon: Code, emoji: '📁' },
    { id: '4', name: 'URL Configuration & Views', icon: Globe, emoji: '🌐' },
    { id: '5', name: 'Django Templates', icon: Code, emoji: '🎨' },
    { id: '6', name: 'Models & ORM', icon: Database, emoji: '💾' },
    { id: '7', name: 'Admin Panel', icon: Shield, emoji: '👑' },
    { id: '8', name: 'Django Forms', icon: Code, emoji: '📝' },
    { id: '9', name: 'Authentication', icon: Shield, emoji: '🔐' },
    { id: '10', name: 'Sessions & Messages', icon: Zap, emoji: '💬' },
    { id: '11', name: 'File & Image Handling', icon: Code, emoji: '📷' },
    { id: '12', name: 'Class Based Views', icon: Code, emoji: '🏗️' },
    { id: '13', name: 'Middleware', icon: Zap, emoji: '⚙️' },
    { id: '14', name: 'Signals', icon: Zap, emoji: '📡' },
    { id: '15', name: 'Django REST Framework', icon: Rocket, emoji: '🚀' },
    { id: '16', name: 'Security', icon: Shield, emoji: '🛡️' },
    { id: '17', name: 'Testing & Debugging', icon: Code, emoji: '🐛' },
    { id: '18', name: 'Deployment', icon: Rocket, emoji: '🌍' },
    { id: '19', name: 'Practice Projects', icon: Code, emoji: '🎮' },
  ];

  return (
    <aside className={`w-80 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-4xl">🐍</div>
          <div>
            <h1 className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>Django Academy</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>For Young Coders!</p>
          </div>
        </div>

        <nav className="space-y-1">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setCurrentTopic(topic.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentTopic === topic.id
                  ? darkMode
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/50'
                    : 'bg-green-500 text-white shadow-lg'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{topic.emoji}</span>
              <span className="text-sm flex-1 text-left">{topic.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
