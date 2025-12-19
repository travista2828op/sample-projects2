import React, { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { PromptDisplay } from './components/PromptDisplay';
import { ErrorDisplay } from './components/ErrorDisplay';
import { uploadImage } from './services/api';
import { PromptState } from './types';

function App(): React.ReactElement {
  const [state, setState] = useState<PromptState>({
    prompt: null,
    fileName: null,
    loading: false,
    error: null,
  });

  const handleImageSelect = async (file: File) => {
    setState({ prompt: null, fileName: null, loading: true, error: null });

    try {
      const response = await uploadImage(file);

      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to generate prompt');
      }

      setState({
        prompt: response.data.prompt,
        fileName: response.data.fileName,
        loading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      setState({
        prompt: null,
        fileName: null,
        loading: false,
        error: errorMessage,
      });
    }
  };

  const handleDismissError = () => {
    setState({ ...state, error: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Image to Prompt
          </h1>
          <p className="text-lg text-slate-300">
            Convert images into detailed prompts for recreation
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div className="space-y-6">
            {/* Error Display */}
            {state.error && (
              <ErrorDisplay
                error={state.error}
                onDismiss={handleDismissError}
              />
            )}

            {/* Image Upload */}
            <ImageUpload
              onImageSelect={handleImageSelect}
              isLoading={state.loading}
            />

            {/* Loading State */}
            {state.loading && (
              <div className="flex items-center justify-center py-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin">
                    <svg
                      className="w-12 h-12 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Analyzing image and generating prompt...
                  </p>
                </div>
              </div>
            )}

            {/* Prompt Display */}
            {state.prompt && !state.loading && (
              <PromptDisplay
                prompt={state.prompt}
                fileName={state.fileName || 'Unknown'}
              />
            )}

            {/* Help Text */}
            {!state.prompt && !state.loading && !state.error && (
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  How it works:
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">1.</span>
                    <span>Drop an image or click to upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">2.</span>
                    <span>Our AI analyzes the image in detail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">3.</span>
                    <span>Get a comprehensive prompt to recreate the image</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">4.</span>
                    <span>Copy the prompt and use it with your favorite tools</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            © 2024 Image to Prompt. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
