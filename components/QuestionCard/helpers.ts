export const getBGColor = (userAnswer: string | undefined, correctAnswer: string, answer: string): string => {
  const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;

  if (
    (isAnswerCorrect === true && answer === userAnswer) ||
    (isAnswerCorrect === false && answer === correctAnswer)
  )
    return "bg-[#55AC78] text-white";

  if (isAnswerCorrect === false && answer === userAnswer) return "bg-[#AC5050] text-white";

  return "bg-[rgb(230,230,230)] text-[#303030]";
};
