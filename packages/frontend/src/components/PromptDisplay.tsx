import React, { useState } from 'react';

interface PromptDisplayProps {
  prompt: string;
  fileName: string;
}

export const PromptDisplay: React.FC<PromptDisplayProps> = ({
  prompt,
  fileName,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Image: {fileName}
        </h3>
        <p className="text-xs text-gray-500">
          Generated prompt for image recreation
        </p>
      </div>

      <div className="relative">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap break-words">
            {prompt}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`absolute top-3 right-3 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Tip:</span> Use this prompt with your
          favorite image generation tool to recreate or modify the image.
        </p>
      </div>
    </div>
  );
};
