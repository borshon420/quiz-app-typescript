import React from 'react';
// types
import {AnswerObject} from '../App';
//styles
import {ButtonWrapper} from './QuestionCard.style';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p className="number" dangerouslySetInnerHTML={{__html: question}}/>
            <div>
      {answers.map((answer) => (
          <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <div key={answer}>
              <button className="answer-btn" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
          </div>
          </ButtonWrapper>
      ))}
    </div>
        </div>
    );
};

export default QuestionCard;