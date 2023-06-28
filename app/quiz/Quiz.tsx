"use client";

import Button from "@/components/Button/Button";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { QuestionsState } from "@/types/quiz";
import { useRouter } from "next/navigation";
import React from "react";

type QuizProps = {
  questions: QuestionsState;
  totalQuestions: number;
};
const Quiz = ({ questions, totalQuestions }: QuizProps) => {
  console.log(questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  //   const [userAnswers, setUserAnswers] = React.useState<{ [id: number]: string }>({});
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>({});
  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  const router = useRouter();

  const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
    // if the user has already answer the question do nothing
    if (isQuestionAnswered) return;
    // check answer against correct answer
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    // add score if answer is correct
    if (isCorrect) setScore((prev) => prev + 1);
    // save the answer in the object of the users answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setCurrentQuestionIndex((prev) => newQuestionIndex);
  };
  return (
    <div className="text-white text-center">
      Quiz Component
      <p className="p-8 font-bold pb-2 text-[20px]">Score: {score}</p>
      <p className="text-red-400 font-bold pb-2 text-[18px]">
        Question{" "}
        <span className="text-red-400">
          {" "}
          {currentQuestionIndex + 1} out of {totalQuestions}
        </span>
      </p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        userAnswer={userAnswers[currentQuestionIndex]}
        correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <Button text="Prev" onClick={() => handleChangeQuestion(-1)} />
      <Button
        text={currentQuestionIndex === totalQuestions - 1 ? "End" : "Next"}
        onClick={
          currentQuestionIndex === totalQuestions - 1 ? () => router.push("/") : () => handleChangeQuestion(1)
        }
      />
    </div>
  );
};
export default Quiz;
