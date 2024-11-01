import React, { useState } from 'react';
import { Brain, Utensils, Calendar, Activity, TrendingUp, Plus } from 'lucide-react';
import MealPlanner from './components/MealPlanner';
import HealthMetrics from './components/HealthMetrics';
import AIInsights from './components/AIInsights';
import Sidebar from './components/Sidebar';

function App() {
  const [activeTab, setActiveTab] = useState('planner');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-8">
        {activeTab === 'planner' && <MealPlanner />}
        {activeTab === 'metrics' && <HealthMetrics />}
        {activeTab === 'insights' && <AIInsights />}
      </main>
    </div>
  );
}

export default App;