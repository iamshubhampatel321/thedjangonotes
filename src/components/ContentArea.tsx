import { topicsData } from '../data/topics';
import additionalTopics from '../data/additionalTopics';
import finalTopics from '../data/finalTopics';
import { CodeBlock } from './CodeBlock';
import { RealWorldExample } from './RealWorldExample';
import { QuickTip } from './QuickTip';
import { motion } from 'motion/react';

interface ContentAreaProps {
  topic: string;
  darkMode: boolean;
}

export function ContentArea({ topic, darkMode }: ContentAreaProps) {
  // Merge all topic sources
  const allTopics = { ...topicsData, ...additionalTopics, ...finalTopics };
  const content = allTopics[topic];

  if (!content) {
    return (
      <div className="p-8 text-center">
        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
          Topic not found!
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{content.emoji}</span>
            <div>
              <h1 className={`text-4xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {content.title}
              </h1>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Real World Example */}
        {content.realWorldExample && (
          <RealWorldExample 
            example={content.realWorldExample} 
            darkMode={darkMode}
          />
        )}

        {/* Quick Tip */}
        {content.quickTip && (
          <QuickTip tip={content.quickTip} darkMode={darkMode} />
        )}

        {/* Sections */}
        {content.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`mb-8 p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <h2 className={`text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {section.heading}
            </h2>
            
            <div className={`mb-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {section.content}
            </div>

            {section.points && (
              <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.code && (
              <CodeBlock 
                code={section.code} 
                language={section.language || 'python'}
                darkMode={darkMode}
              />
            )}

            {section.note && (
              <div className={`mt-4 p-4 rounded-lg ${
                darkMode ? 'bg-blue-900/30 border border-blue-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <p className={`flex items-start gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  <span className="text-xl">💡</span>
                  <span>{section.note}</span>
                </p>
              </div>
            )}
          </motion.div>
        ))}

        {/* Interactive Challenge */}
        {content.challenge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-900 to-pink-900' 
                : 'bg-gradient-to-r from-purple-400 to-pink-400'
            } text-white shadow-xl`}
          >
            <h3 className="text-2xl mb-3">🎮 Challenge Time!</h3>
            <p className="text-lg">{content.challenge}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}