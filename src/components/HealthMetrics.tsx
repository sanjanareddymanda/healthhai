import React from 'react';
import { TrendingUp, Heart, Weight, Activity } from 'lucide-react';

const HealthMetrics: React.FC = () => {
  const metrics = [
    { icon: Weight, label: 'Current Weight', value: '68 kg', change: '-2.3 kg', positive: true },
    { icon: Heart, label: 'Avg. Heart Rate', value: '72 bpm', change: '-3 bpm', positive: true },
    { icon: Activity, label: 'Daily Steps', value: '8,432', change: '+1,243', positive: true },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Health Metrics</h2>
        <p className="text-gray-600">Track your progress and vital statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <metric.icon className="w-5 h-5 text-indigo-600" />
              <h3 className="font-medium text-gray-600">{metric.label}</h3>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
              <span className={`flex items-center text-sm ${
                metric.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Progress Chart</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Weight and metrics visualization chart would go here
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;