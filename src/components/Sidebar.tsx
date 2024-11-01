import React from 'react';
import { Brain, Utensils, Activity } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'planner', icon: Utensils, label: 'Meal Planner' },
    { id: 'metrics', icon: Activity, label: 'Health Metrics' },
    { id: 'insights', icon: Brain, label: 'AI Insights' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-800">Diet Planning and Health Tracker</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeTab === item.id
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;