import React from 'react';

const PromptSuggestions: React.FC = () => {
  const suggestions = [
    "Analyze sentiment in customer reviews",
    "Generate a product description",
    "Summarize a research paper",
  ];

  return (
    <ul className="space-y-2">
      {suggestions.map((suggestion, index) => (
        <li key={index} className="bg-gradient-to-r from-deep-purple to-dark-blue p-2 rounded-md text-sm">
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default PromptSuggestions;