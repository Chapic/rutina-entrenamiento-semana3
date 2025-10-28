
import { WeeklyPlan } from './types';

export const GENERAL_INFO = {
    objetivo: "Mantener masa muscular, aumentar densidad y control, seguir quemando grasa.",
    duracion: "6 días + 1 de descanso activo",
    rangoEsfuerzo: "RIR 1–2 (una o dos reps en reserva)",
    descanso: "60–90 seg entre series",
    kcal: "≈ 2200 kcal/día",
    macros: "180 g proteína | 60 g grasa | 230 g carbohidratos"
};

export const WEEKLY_PLAN: WeeklyPlan = {
  LUNES: {
    day: "LUNES",
    title: "UPPER BODY (TORAX, HOMBRO, ESPALDA)",
    workout: [
      { name: "Press de banca con barra", details: "4 series × 8–10 reps" },
      { name: "Remo con barra", details: "4 × 10" },
      { name: "Press militar con mancuernas", details: "3 × 10" },
      { name: "Jalón al pecho", details: "3 × 12" },
      { name: "Elevaciones laterales", details: "3 × 15" },
      { name: "Curl bíceps barra Z", details: "3 × 12" },
      { name: "Plancha abdominal", details: "3 × 40 seg" },
    ],
    nutrition: [
      { description: "Pollo o pavo 180 g | Arroz integral 70 g | Verduras (brócoli, calabacín) 200 g" },
      { description: "Whey 30 g + Plátano 100 g (Post-entreno)" },
      { description: "Salmón o merluza 180 g | Patata cocida 150 g | Aceite de oliva 10 g" },
    ],
  },
  MARTES: {
    day: "MARTES",
    title: "LOWER BODY (PIERNAS COMPLETO)",
    workout: [
      { name: "Sentadilla libre", details: "4 × 8" },
      { name: "Peso muerto rumano", details: "4 × 10" },
      { name: "Prensa de piernas", details: "4 × 12" },
      { name: "Curl femoral tumbado", details: "3 × 12" },
      { name: "Extensión de cuádriceps", details: "3 × 15" },
      { name: "Gemelos de pie", details: "4 × 15-20" },
      { name: "Crunch en máquina", details: "3 × 20" },
    ],
    nutrition: [
      { description: "Ternera magra 180 g | Arroz basmati 90 g | Verduras variadas 200 g" },
      { description: "Skyr o yogur 2% 200 g + Avena 40 g (Post-entreno)" },
      { description: "Pescado blanco 180 g | Boniato 150 g | Aceite de oliva 10 g" },
    ],
  },
  MIÉRCOLES: {
    day: "MIÉRCOLES",
    title: "PUSH DAY (PECHO / HOMBRO / TRÍCEPS)",
    workout: [
      { name: "Press inclinado con mancuernas", details: "4 × 10" },
      { name: "Press militar con barra", details: "4 × 10" },
      { name: "Press cerrado", details: "3 × 10" },
      { name: "Fondos asistidos", details: "3 × 12" },
      { name: "Elevaciones laterales", details: "4 × 15" },
      { name: "Press francés con mancuerna", details: "3 × 12" },
    ],
    nutrition: [
      { description: "Huevos enteros 2 + claras 4 | Pan integral 100% 60 g | Aguacate 40 g" },
      { description: "Whey 30 g + Nueces 10 g" },
      { description: "Pollo 180 g | Verduras verdes 200 g | Quinoa 60 g" },
    ],
  },
  JUEVES: {
    day: "JUEVES",
    title: "PULL DAY (ESPALDA / BÍCEPS)",
    workout: [
      { name: "Dominadas asistidas o jalón supino", details: "4 × 10" },
      { name: "Remo con mancuerna", details: "4 × 12" },
      { name: "Face pull (polea)", details: "3 × 15" },
      { name: "Curl con barra Z", details: "3 × 12" },
      { name: "Curl martillo", details: "3 × 12" },
      { name: "Hiperextensiones", details: "3 × 15" },
    ],
    nutrition: [
      { description: "Pescado blanco 180 g | Arroz integral 60 g | Brócoli 200 g" },
      { description: "Yogur griego 200 g + Almendras 20 g" },
      { description: "Pollo o pavo 180 g | Verduras mixtas 200 g | Aceite de oliva 10 g" },
    ],
  },
  VIERNES: {
    day: "VIERNES",
    title: "LEGS II (PIERNAS + CORE)",
    workout: [
      { name: "Zancadas caminando", details: "3 × 12 por pierna" },
      { name: "Sentadilla goblet", details: "4 × 12" },
      { name: "Peso muerto convencional", details: "4 × 8" },
      { name: "Gemelos sentado", details: "4 × 20" },
      { name: "Plancha lateral", details: "3 × 40 seg/lado" },
      { name: "Ab-wheel o rueda abdominal", details: "3 × 12" },
    ],
    nutrition: [
      { description: "Pechuga de pollo 200 g | Arroz basmati 100 g | Verduras (espinaca, zanahoria) 200 g" },
      { description: "Whey 30 g + Manzana 100 g (Post-entreno)" },
      { description: "Salmón 180 g | Boniato 150 g | Aceite de oliva 10 g" },
    ],
  },
  SÁBADO: {
    day: "SÁBADO",
    title: "FULL BODY METABÓLICO (PHA HIIT)",
    notes: ["Circuito: 5 rondas", "45 seg trabajo / 15 seg descanso", "Descanso entre rondas: 2 min"],
    workout: [
      { name: "Sentadilla con peso corporal", details: "45 seg" },
      { name: "Flexiones", details: "45 seg" },
      { name: "Remo TRX", details: "45 seg" },
      { name: "Zancadas alternas", details: "45 seg" },
      { name: "Plancha con rodillas al pecho", details: "45 seg" },
    ],
    nutrition: [
        { description: "Tortilla (2 huevos + 4 claras) | Pan integral 60 g | Aguacate 40 g" },
        { description: "Skyr 200 g + Whey 30 g" },
        { description: "Caballa o sardina 180 g | Verduras 250 g | Arroz 80 g" },
    ]
  },
  DOMINGO: {
    day: "DOMINGO",
    title: "DESCANSO ACTIVO",
    workout: [
      { name: "Caminata suave o bici", details: "40–60 min" },
      { name: "Sauna o contraste frío-calor", details: "Opcional" },
      { name: "Respiración controlada", details: "10 min" },
      { name: "Preparación mental para semana 4", details: "Visualización" },
    ],
    nutrition: [
        { description: "Pollo 180 g | Verduras 250 g | Quinoa 60 g" },
        { description: "Yogur natural 200 g + Frutos secos 15 g" },
        { description: "Huevos 3 | Ensalada + Aguacate 40 g | Aceite de oliva 10 g" },
    ]
  },
};
