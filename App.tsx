import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { InteractiveBackground } from './components/InteractiveBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { MainLayout } from './components/MainLayout';
import { LegalPage } from './components/LegalPage';
import { ProcessPage } from './components/ProcessPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { WebDemoPage } from './components/WebDemoPage';
import { EcDemoPage } from './components/EcDemoPage';
import { UiUxDemoPage } from './components/UiUxDemoPage';
import { GameDemoPage } from './components/GameDemoPage';
import { DxDemoPage } from './components/DxDemoPage';
import { MobileDemoPage } from './components/MobileDemoPage';

function App() {
  // Automatically determine theme based on local time
  // 6:00 AM to 6:00 PM (18:00) -> Light Mode
  // Otherwise -> Dark Mode
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'light' : 'dark';
  });

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
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            
            {/* Demos */}
            <Route path="/web-demo" element={<WebDemoPage />} />
            <Route path="/ec-demo" element={<EcDemoPage />} />
            <Route path="/ui-demo" element={<UiUxDemoPage />} />
            <Route path="/game-demo" element={<GameDemoPage />} />
            <Route path="/dx-demo" element={<DxDemoPage />} />
            <Route path="/mobile-demo" element={<MobileDemoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;