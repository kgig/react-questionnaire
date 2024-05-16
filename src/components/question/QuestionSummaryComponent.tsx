import React, { useState } from 'react';
import { Answer, Question, setAnswer, setQuestions, updateAnswerSubmit } from '../../reducers/questionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';

interface QuestionProps {
    question: Question;
    inx: number,
    correctAnswerIndex: string
}

const QuestionSummaryComponent: React.FC<QuestionProps> = ({ question, inx, correctAnswerIndex }) => {
    const dispatch = useDispatch();
    const questionsAnswer = useSelector((state: RootState) => state.question.questionsAnswer);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    function classNames(...classNamees: any) {
        return classNamees.filter(Boolean).join(' ')
    }
    return (
        <div className="p-4 border rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-bold mb-2">{inx + 1}. {question.text}</h2>
            <ul className="list-none">
                {question.answers.map((answer, index) => (
                    <li key={answer.id} className="mb-2" >
                        <label className="flex items-center">
                            {index + 1}. {answer.text}
                        </label>
                    </li>
                ))}
            </ul>
            <div className={classNames(correctAnswerIndex == question.answerSubmit ? "bg-green-100 border border-green-400 text-green-700 " : "bg-red-100 border border-red-400 text-red-700 ", "px-4 py-3 rounded relative")} role="alert">
                <strong className="block sm:inline">
                    {correctAnswerIndex == question.answerSubmit ? <>Correct!</> : <>Incorrect!</>}
                </strong><br />
                <strong className="font-bold">Your Answer : {question.answerSubmit}</strong>
            </div>
        </div>
    );
};

export default QuestionSummaryComponent;