import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { InteractiveBackground } from './components/InteractiveBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { MainLayout } from './components/MainLayout';
import { LegalPage } from './components/LegalPage';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`${theme} transition-colors duration-500`}>
        <div className="min-h-screen font-sans relative bg-oni-light-bg text-gray-900 dark:bg-oni-bg dark:text-white transition-colors duration-500 selection:bg-oni-cyan selection:text-black">
          <CustomCursor />
          
          {/* Global Background persists across routes */}
          <InteractiveBackground theme={theme} />
          
          <Routes>
            <Route path="/" element={<MainLayout theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
