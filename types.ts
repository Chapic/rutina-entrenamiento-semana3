
export interface Exercise {
  name: string;
  details: string; // e.g., "5 series x 8 reps"
}

export interface Meal {
  description: string;
}

export interface DayPlan {
  day: string;
  title: string;
  workout?: Exercise[];
  nutrition?: Meal[];
  notes?: string[];
}

export type DayKey = 'LUNES' | 'MARTES' | 'MIÉRCOLES' | 'JUEVES' | 'VIERNES' | 'SÁBADO' | 'DOMINGO';

export type WeeklyPlan = {
  [key in DayKey]: DayPlan;
};

export interface LoggedSet {
  reps: string;
  weight: string;
  pause: string;
}

export interface ExerciseLog {
  [exerciseName: string]: LoggedSet[];
}

export interface DailyLog {
  [day: string]: ExerciseLog;
}
