
import React from 'react';
import { Exercise, ExerciseLog, DayKey, LoggedSet } from '../types';
import ExerciseItem from './ExerciseItem';
import { DumbbellIcon } from './Icons';

interface WorkoutSectionProps {
  dayKey: DayKey;
  title: string;
  workout?: Exercise[];
  notes?: string[];
  logs: ExerciseLog;
  onUpdateLog: (day: DayKey, exerciseName: string, sets: LoggedSet[]) => void;
}

const WorkoutSection: React.FC<WorkoutSectionProps> = ({ dayKey, title, workout, notes, logs, onUpdateLog }) => {
  if (!workout || workout.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center gap-3">
        <DumbbellIcon /> {title}
      </h2>
      {notes && notes.length > 0 && (
          <div className="mb-4 bg-neutral-700 p-3 rounded-md text-sm">
            {notes.map((note, index) => <p key={index}>{note}</p>)}
          </div>
      )}
      <div className="space-y-4">
        {workout.map((exercise) => (
          <ExerciseItem
            key={exercise.name}
            exercise={exercise}
            logs={logs[exercise.name] || []}
            onUpdate={(sets) => onUpdateLog(dayKey, exercise.name, sets)}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutSection;
