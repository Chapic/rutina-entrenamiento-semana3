
import React from 'react';
import { Meal } from '../types';
import { ForkKnifeIcon } from './Icons';

interface NutritionSectionProps {
  nutrition: Meal[];
}

const NutritionSection: React.FC<NutritionSectionProps> = ({ nutrition }) => {
  return (
    <section>
       <hr className="border-t-2 border-neutral-700 my-6" />
      <h2 className="text-2xl font-semibold mb-4 text-brand-secondary flex items-center gap-3">
        <ForkKnifeIcon /> Nutrición
      </h2>
      <ul className="space-y-2 list-inside list-disc text-neutral-300">
        {nutrition.map((meal, index) => (
          <li key={index}>{meal.description}</li>
        ))}
      </ul>
    </section>
  );
};

export default NutritionSection;
