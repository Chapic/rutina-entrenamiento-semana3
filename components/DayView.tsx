
import React from 'react';
import { DayPlan, ExerciseLog, DayKey, LoggedSet } from '../types';
import WorkoutSection from './WorkoutSection';
import NutritionSection from './NutritionSection';

interface DayViewProps {
  dayKey: DayKey;
  dayPlan: DayPlan;
  logs: ExerciseLog;
  onUpdateLog: (day: DayKey, exerciseName: string, sets: LoggedSet[]) => void;
}

const DayView: React.FC<DayViewProps> = ({ dayKey, dayPlan, logs, onUpdateLog }) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 space-y-8">
      <WorkoutSection 
        dayKey={dayKey}
        title={dayPlan.title}
        workout={dayPlan.workout}
        notes={dayPlan.notes}
        logs={logs}
        onUpdateLog={onUpdateLog}
      />
      {dayPlan.nutrition && <NutritionSection nutrition={dayPlan.nutrition} />}
    </div>
  );
};

export default DayView;
