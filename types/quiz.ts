export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Array<Question & { answers: string[] }>;
// export type QuestionsState = {
//   category: string;
//   correct_answer: string;
//   difficulty: Difficulty;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
//   answers: string[];
// };
