import { Rocket, Code, Star, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  setCurrentTopic: (topic: string) => void;
  darkMode: boolean;
}

export function WelcomeScreen({ setCurrentTopic, darkMode }: WelcomeScreenProps) {
  return (
    <div className={`p-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">🐍</div>
          <h1 className="text-5xl mb-4">Welcome to Django Academy!</h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Where coding becomes an adventure! 🚀
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-blue-400 to-blue-600'} text-white shadow-xl`}>
            <Rocket size={48} className="mb-4" />
            <h3 className="text-2xl mb-2">Fun Learning</h3>
            <p>Learn Django with real-world examples that make sense!</p>
          </div>

          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-green-400 to-green-600'} text-white shadow-xl`}>
            <Code size={48} className="mb-4" />
            <h3 className="text-2xl mb-2">Code Examples</h3>
            <p>Copy and try real code examples with one click!</p>
          </div>

          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-gradient-to-br from-purple-400 to-purple-600'} text-white shadow-xl`}>
            <Star size={48} className="mb-4" />
            <h3 className="text-2xl mb-2">Easy to Understand</h3>
            <p>Complex concepts explained in simple words!</p>
          </div>

          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-orange-600 to-orange-800' : 'bg-gradient-to-br from-orange-400 to-orange-600'} text-white shadow-xl`}>
            <Zap size={48} className="mb-4" />
            <h3 className="text-2xl mb-2">Interactive</h3>
            <p>Practice with fun projects and activities!</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h2 className="text-3xl mb-4">Ready to Start Your Journey? 🎯</h2>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Click on any topic from the left sidebar to begin!
          </p>
          <button
            onClick={() => setCurrentTopic('1')}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start with Introduction 🚀
          </button>
        </div>

        {/* Fun Facts */}
        <div className={`mt-12 p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="text-2xl mb-4">🌟 Fun Fact!</h3>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Django is named after the famous jazz guitarist Django Reinhardt! 🎸 
            Just like how Django created amazing music, you'll create amazing websites!
          </p>
        </div>
      </div>
    </div>
  );
}
