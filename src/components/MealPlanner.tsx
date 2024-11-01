import React, { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';

const MealPlanner: React.FC = () => {
  const [meals, setMeals] = useState([
    { id: 1, time: 'Breakfast', name: 'Oatmeal with Berries', calories: 350, protein: 12 },
    { id: 2, time: 'Lunch', name: 'Grilled Chicken Salad', calories: 450, protein: 35 },
    { id: 3, time: 'Dinner', name: 'Salmon with Quinoa', calories: 550, protein: 40 },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Meal Planner</h2>
          <p className="text-gray-600">Plan and track your daily meals</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Meal
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">Today's Meals</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {meals.map((meal) => (
            <div key={meal.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-800">{meal.time}</h4>
                <span className="text-sm text-gray-500">{meal.calories} kcal</span>
              </div>
              <p className="text-gray-600">{meal.name}</p>
              <div className="mt-2 text-sm text-gray-500">
                Protein: {meal.protein}g
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;