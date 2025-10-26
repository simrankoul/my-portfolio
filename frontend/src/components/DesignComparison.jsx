import React, { useState } from 'react';
import Portfolio from './Portfolio';
import PortfolioMinimal from './PortfolioMinimal';
import PortfolioBold from './PortfolioBold';

const DesignComparison = () => {
  const [activeDesign, setActiveDesign] = useState('glassmorphism');

  const designs = [
    { id: 'glassmorphism', name: 'Glassmorphism (Current)', component: Portfolio },
    { id: 'minimal', name: 'Minimal Clean', component: PortfolioMinimal },
    { id: 'bold', name: 'Bold Gradient', component: PortfolioBold }
  ];

  const ActiveComponent = designs.find(d => d.id === activeDesign)?.component || Portfolio;

  return (
    <div>
      {/* Design Switcher */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] bg-white/95 backdrop-blur-sm shadow-2xl rounded-full px-2 py-2 flex gap-2 border border-gray-200">
        {designs.map((design) => (
          <button
            key={design.id}
            onClick={() => setActiveDesign(design.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeDesign === design.id
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
          >
            {design.name}
          </button>
        ))}
      </div>

      {/* Active Design */}
      <div className="pt-0">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default DesignComparison;
