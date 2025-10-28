
import React, { useState, useCallback } from 'react';
import { WEEKLY_PLAN, GENERAL_INFO } from './constants';
import { DailyLog, DayKey, LoggedSet } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import DayView from './components/DayView';
import { DumbbellIcon, FlameIcon, HeartPulseIcon } from './components/Icons';

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey>('LUNES');
  const [workoutLogs, setWorkoutLogs] = useLocalStorage<DailyLog>('workoutLogs', {});

  const updateLog = useCallback((day: DayKey, exerciseName: string, sets: LoggedSet[]) => {
    setWorkoutLogs(prevLogs => ({
      ...prevLogs,
      [day]: {
        ...prevLogs[day],
        [exerciseName]: sets,
      },
    }));
  }, [setWorkoutLogs]);
  
  const dayKeys = Object.keys(WEEKLY_PLAN) as DayKey[];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Plan Semana 3: Bloque de Hipertrofia Científica
          </h1>
          <p className="text-neutral-400 mt-2 text-lg">Tu guía de entrenamiento y nutrición</p>
        </header>

        <div className="bg-neutral-800 rounded-xl p-6 mb-8 shadow-lg border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <FlameIcon />
                Información General
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Objetivo:</p>
                    <p>{GENERAL_INFO.objetivo}</p>
                </div>
                 <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Duración:</p>
                    <p>{GENERAL_INFO.duracion}</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Rango de Esfuerzo:</p>
                    <p>{GENERAL_INFO.rangoEsfuerzo}</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Descanso entre series:</p>
                    <p>{GENERAL_INFO.descanso}</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Kcal:</p>
                    <p>{GENERAL_INFO.kcal}</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="font-bold text-brand-primary">Macronutrientes:</p>
                    <p>{GENERAL_INFO.macros}</p>
                </div>
            </div>
        </div>

        <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
                {dayKeys.map((day) => (
                <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-brand-secondary ${
                    selectedDay === day
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-neutral-900 shadow-lg'
                        : 'bg-neutral-700 text-neutral-100 hover:bg-neutral-600'
                    }`}
                >
                    {day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}
                </button>
                ))}
            </div>
        </div>

        <main>
            <DayView 
                dayKey={selectedDay}
                dayPlan={WEEKLY_PLAN[selectedDay]} 
                logs={workoutLogs[selectedDay] || {}}
                onUpdateLog={updateLog}
            />
        </main>
      </div>
    </div>
  );
};

export default App;
