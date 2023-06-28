import { Difficulty, Question, QuestionsState } from "@/types/quiz";
import { shuffleArray } from "@/utlils/arrayUtils";
import Quiz from "./Quiz";
const TOTAL_QUESTIONS = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=&{difficulty}$type=multiple`;

  const data: { results: Question[] } = await (await fetch(endpoint, { cache: "no-store" })).json();

  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
  }));
};

const QuizPage = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  console.log("questions", questions && questions);
  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};
export default QuizPage;
