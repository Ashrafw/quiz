import { getBGColor } from "./helpers";

type QuestionCardProps = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCard = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  correctAnswer,
  onClick,
}: QuestionCardProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-[20px] max-w-[400] my-3" dangerouslySetInnerHTML={{ __html: question }} />
        {answers.map((answer) => (
          <div
            key={answer}
            className={`${getBGColor(
              userAnswer,
              correctAnswer,
              answer
            )} cursor-pointer flex justify-center items-center select-none font-bold min-h-[45px] max-w-[400px] w-full my-2 rounded-[12px] shadow-2xl`}
            onClick={() => onClick(answer, currentQuestionIndex)}
          >
            <span className="truncate" dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
