import React, { useState } from 'react';
import { Answer, Question, setAnswer, setQuestions, updateAnswerSubmit } from '../../reducers/questionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';

interface QuestionProps {
    question: Question;
    inx: number,
    correctAnswerIndex: string
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, inx, correctAnswerIndex }) => {
    const dispatch = useDispatch();
    const questionsAnswer = useSelector((state: RootState) => state.question.questionsAnswer);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


    const handleAnswerChange = (selectedAnswer: Answer, inx: number) => {
        setSelectedAnswer(selectedAnswer.text);
        dispatch(updateAnswerSubmit({ questionIndex: inx, answerSubmit: selectedAnswer.text }));
    };
    return (
        <div className="p-4 border rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-bold mb-2">{inx + 1}. {question.text}</h2>
            <ul className="list-none">
                {question.answers.map((answer, index) => (
                    <li key={answer.id} className="mb-2" >
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={answer.text}
                                checked={selectedAnswer === answer.text}
                                onChange={() => { handleAnswerChange(answer, inx) }}
                                className="mr-2"
                            />
                            {answer.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionComponent;