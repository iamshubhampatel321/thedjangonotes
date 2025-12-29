import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  darkMode: boolean;
}

export function CodeBlock({ code, language = 'python', darkMode }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-lg`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2 ${
        darkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-gray-200 border-b border-gray-300'
      }`}>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 ${
            copied
              ? 'bg-green-500 text-white'
              : darkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className={`p-4 overflow-x-auto ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
