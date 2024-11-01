import React from 'react';
import { Brain, Sparkles, MessageCircle } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    {
      title: "Meal Timing Optimization",
      description: "Based on your activity patterns, consider having your lunch 30 minutes earlier to optimize energy levels during your afternoon meetings.",
      type: "suggestion"
    },
    {
      title: "Nutrition Analysis",
      description: "Your protein intake has been consistently below target. Consider adding more lean protein sources to your breakfast.",
      type: "warning"
    },
    {
      title: "Progress Update",
      description: "Great job! You've maintained a consistent eating schedule this week, which has positively impacted your energy levels.",
      type: "success"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">AI Insights</h2>
        <p className="text-gray-600">Personalized recommendations based on your data</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-6 h-6 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">Daily Health Summary</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Your eating patterns show good consistency. To reach your goals faster, focus on increasing protein intake and maintaining your current meal timing schedule.
        </p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className={`w-5 h-5 ${
                insight.type === 'warning' ? 'text-amber-500' :
                insight.type === 'success' ? 'text-green-500' :
                'text-indigo-500'
              }`} />
              <h4 className="font-medium text-gray-800">{insight.title}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">{insight.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          <MessageCircle className="w-5 h-5" />
          Ask AI Assistant
        </button>
      </div>
    </div>
  );
};

export default AIInsights;