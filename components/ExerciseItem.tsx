
import React, { useState, useEffect } from 'react';
import { Exercise, LoggedSet } from '../types';
import { CheckCircleIcon, PlusCircleIcon } from './Icons';

interface ExerciseItemProps {
  exercise: Exercise;
  logs: LoggedSet[];
  onUpdate: (sets: LoggedSet[]) => void;
}

const parseSets = (details: string): number => {
    const match = details.match(/(\d+)\s*(series|×|x)/);
    if (match && match[1]) {
        return parseInt(match[1], 10);
    }
    const singleRepMatch = details.match(/(\d+)\s*reps|\d+\s*seg|\d+\s*min/);
    if (singleRepMatch || details.includes('min') || details.includes('seg')) {
        return 1;
    }
    return 3; // Default to 3 sets if parsing fails
};


const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, logs, onUpdate }) => {
  const numSets = parseSets(exercise.details);
  const initialSets = Array(numSets).fill(null).map((_, i) => logs[i] || { reps: '', weight: '', pause: '' });
  
  const [sets, setSets] = useState<LoggedSet[]>(initialSets);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSets(Array(numSets).fill(null).map((_, i) => logs[i] || { reps: '', weight: '', pause: '' }));
  }, [logs, numSets]);


  const handleInputChange = (index: number, field: 'reps' | 'weight' | 'pause', value: string) => {
    const newSets = [...sets];
    newSets[index] = { ...newSets[index], [field]: value };
    setSets(newSets);
    setSaved(false); // Reset saved status on change
  };
  
  const handleSave = () => {
    onUpdate(sets);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  
  const addSet = () => {
    setSets([...sets, {reps: '', weight: '', pause: ''}]);
  }

  return (
    <div className="bg-neutral-700 p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
        <h3 className="font-semibold text-lg text-neutral-100">{exercise.name}</h3>
        <p className="text-sm text-neutral-400">{exercise.details}</p>
      </div>
      <div className="space-y-2">
        {sets.map((set, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 items-center">
            <span className="col-span-2 sm:col-span-1 text-center font-mono text-neutral-400">{index + 1}</span>
            <div className="col-span-10 sm:col-span-3">
                <input
                    type="text"
                    placeholder="Reps"
                    value={set.reps}
                    onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
                    className="w-full bg-neutral-800 text-neutral-100 p-2 rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
                />
            </div>
             <div className="col-span-10 sm:col-span-4">
                <input
                    type="text"
                    placeholder="Peso (kg)"
                    value={set.weight}
                    onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                    className="w-full bg-neutral-800 text-neutral-100 p-2 rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
                />
            </div>
            <div className="col-span-10 sm:col-span-4">
                <input
                    type="text"
                    placeholder="Pausa (s)"
                    value={set.pause}
                    onChange={(e) => handleInputChange(index, 'pause', e.target.value)}
                    className="w-full bg-neutral-800 text-neutral-100 p-2 rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
                />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center mt-3 gap-3">
        <button onClick={addSet} className="p-2 text-neutral-400 hover:text-brand-primary transition-colors duration-200" title="Añadir serie">
          <PlusCircleIcon />
        </button>
        <button
          onClick={handleSave}
          className={`px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 ease-in-out flex items-center gap-2 ${saved ? 'bg-green-500 text-white' : 'bg-brand-primary text-neutral-900 hover:bg-opacity-80'}`}
        >
          {saved ? <><CheckCircleIcon/> Guardado</> : 'Guardar Progreso'}
        </button>
      </div>
    </div>
  );
};

export default ExerciseItem;
