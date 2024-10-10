import React from 'react';

const CodeEditor: React.FC = () => {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden">
      <div className="flex items-center bg-[#111827] px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex ml-4 space-x-4 text-sm text-gray-400">
          <span className="text-white">index.html</span>
          <span>tailwind.config.js</span>
          <span>package.json</span>
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="text-green-400">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/build.css">
</head>
<body>
  <button class="flex items-center px-4 py-3 text-white
                 bg-blue-500 hover:bg-blue-600">
    ...
  </button>
</body>
</html>`}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;