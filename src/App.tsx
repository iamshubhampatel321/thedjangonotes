import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { ContentArea } from './components/ContentArea';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          currentTopic={currentTopic} 
          setCurrentTopic={setCurrentTopic}
          darkMode={darkMode}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <TopNav darkMode={darkMode} setDarkMode={setDarkMode} />
          
          {/* Content Area */}
          <main className="flex-1 overflow-y-auto">
            {currentTopic ? (
              <ContentArea topic={currentTopic} darkMode={darkMode} />
            ) : (
              <WelcomeScreen setCurrentTopic={setCurrentTopic} darkMode={darkMode} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
