import { Sparkles } from 'lucide-react';

interface QuickTipProps {
  tip: string;
  darkMode: boolean;
}

export function QuickTip({ tip, darkMode }: QuickTipProps) {
  return (
    <div className={`mb-8 p-6 rounded-2xl ${
      darkMode 
        ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-700' 
        : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300'
    } shadow-lg`}>
      <div className="flex items-center gap-3 mb-2">
        <Sparkles className={darkMode ? 'text-purple-300' : 'text-purple-600'} size={24} />
        <h3 className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Quick Tip!
        </h3>
      </div>
      <p className={`text-lg ${darkMode ? 'text-purple-200' : 'text-purple-900'}`}>
        {tip}
      </p>
    </div>
  );
}
