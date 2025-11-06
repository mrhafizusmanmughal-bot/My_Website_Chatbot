/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { GenerateVideoParams } from '../types';
import { LightbulbIcon } from './icons';

export interface ExamplePrompt {
  title: string;
  config: Partial<GenerateVideoParams>;
}

interface ExamplePromptsProps {
  onSelectPrompt: (config: Partial<GenerateVideoParams>) => void;
  examples: ExamplePrompt[];
}

const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onSelectPrompt, examples }) => {
  return (
    <div className="w-full mb-6 text-center">
      <h3 className="text-xl font-semibold text-gray-400 mb-4 flex items-center justify-center gap-2">
        <LightbulbIcon className="w-6 h-6 text-yellow-400" />
        Need some inspiration?
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectPrompt(example.config)}
            className="px-4 py-2 bg-gray-700/60 border border-gray-600 rounded-lg hover:bg-gray-700 hover:border-indigo-500 transition-all text-gray-300 hover:text-white"
          >
            {example.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;