import { Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface RealWorldExampleProps {
  example: string;
  darkMode: boolean;
}

export function RealWorldExample({ example, darkMode }: RealWorldExampleProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 p-6 rounded-2xl ${
        darkMode 
          ? 'bg-gradient-to-r from-yellow-900 to-orange-900' 
          : 'bg-gradient-to-r from-yellow-300 to-orange-300'
      } shadow-xl`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-800' : 'bg-yellow-400'}`}>
          <Lightbulb className={darkMode ? 'text-yellow-300' : 'text-yellow-800'} size={32} />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            🌍 Real World Example
          </h3>
          <p className={`text-lg ${darkMode ? 'text-yellow-100' : 'text-gray-800'}`}>
            {example}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
