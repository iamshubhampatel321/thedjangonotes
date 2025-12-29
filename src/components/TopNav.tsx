import { Sun, Moon } from 'lucide-react';

interface TopNavProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function TopNav({ darkMode, setDarkMode }: TopNavProps) {
  return (
    <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-4`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Learn Django - The Fun Way! 🎉
          </h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Build amazing websites like a pro!
          </p>
        </div>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}
