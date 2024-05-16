import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { RootState } from '../../reducers';
import { Question, setQuestions } from '../../reducers/questionReducer';
import QuestionComponent from './QuestionComponent';

const questionsData: Question[] = [
    {
        id: nanoid(),
        text: 'What does HTML stand for?',
        answers: [
            { id: nanoid(), text: 'HyperText Markup Language' },
            { id: nanoid(), text: 'Home Tool Markup Language' },
            { id: nanoid(), text: 'Hyperlinks and Text Markup Language' },
            { id: nanoid(), text: 'Hyperlinking Text Mark Language' }
        ],
        correctAnswerIndex: 'HyperText Markup Language',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which language is primarily used for web development?',
        answers: [
            { id: nanoid(), text: 'C++' },
            { id: nanoid(), text: 'Python' },
            { id: nanoid(), text: 'JavaScript' },
            { id: nanoid(), text: 'Java' }
        ],
        correctAnswerIndex: 'JavaScript',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which company developed the React library?',
        answers: [
            { id: nanoid(), text: 'Google' },
            { id: nanoid(), text: 'Facebook' },
            { id: nanoid(), text: 'Twitter' },
            { id: nanoid(), text: 'Microsoft' }
        ],
        correctAnswerIndex: 'Facebook',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'What is the file extension for JavaScript files?',
        answers: [
            { id: nanoid(), text: '.java' },
            { id: nanoid(), text: '.js' },
            { id: nanoid(), text: '.script' },
            { id: nanoid(), text: '.jsx' }
        ],
        correctAnswerIndex: '.js',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'What is the command to initialize a new Git repository?',
        answers: [
            { id: nanoid(), text: 'git start' },
            { id: nanoid(), text: 'git init' },
            { id: nanoid(), text: 'git new' },
            { id: nanoid(), text: 'git create' }
        ],
        correctAnswerIndex: 'git init',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which CSS property is used to change the text color?',
        answers: [
            { id: nanoid(), text: 'font-color' },
            { id: nanoid(), text: 'text-color' },
            { id: nanoid(), text: 'color' },
            { id: nanoid(), text: 'font-style' }
        ],
        correctAnswerIndex: 'color',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which keyword is used to declare a variable in JavaScript?',
        answers: [
            { id: nanoid(), text: 'var' },
            { id: nanoid(), text: 'let' },
            { id: nanoid(), text: 'const' },
            { id: nanoid(), text: 'All of the above' }
        ],
        correctAnswerIndex: 'var',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'What does CSS stand for?',
        answers: [
            { id: nanoid(), text: 'Cascading Style Sheets' },
            { id: nanoid(), text: 'Creative Style Sheets' },
            { id: nanoid(), text: 'Computer Style Sheets' },
            { id: nanoid(), text: 'Colorful Style Sheets' }
        ],
        correctAnswerIndex: 'Cascading Style Sheets',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which HTML tag is used to define an unordered list?',
        answers: [
            { id: nanoid(), text: '<ul>' },
            { id: nanoid(), text: '<ol>' },
            { id: nanoid(), text: '<li>' },
            { id: nanoid(), text: '<list>' }
        ],
        correctAnswerIndex: '<ul>',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'What is the purpose of the "this" keyword in JavaScript?',
        answers: [
            { id: nanoid(), text: 'To refer to the current object' },
            { id: nanoid(), text: 'To create a new object' },
            { id: nanoid(), text: 'To destroy the current object' },
            { id: nanoid(), text: 'To return a value' }
        ],
        correctAnswerIndex: 'To refer to the current object',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which of the following is a JavaScript framework?',
        answers: [
            { id: nanoid(), text: 'React' },
            { id: nanoid(), text: 'Laravel' },
            { id: nanoid(), text: 'Django' },
            { id: nanoid(), text: 'Rails' }
        ],
        correctAnswerIndex: 'React',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which HTML attribute is used to define inline styles?',
        answers: [
            { id: nanoid(), text: 'style' },
            { id: nanoid(), text: 'class' },
            { id: nanoid(), text: 'styles' },
            { id: nanoid(), text: 'font' }
        ],
        correctAnswerIndex: 'style',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which JavaScript method is used to write HTML content into a web page?',
        answers: [
            { id: nanoid(), text: 'document.write()' },
            { id: nanoid(), text: 'document.create()' },
            { id: nanoid(), text: 'document.innerHTML' },
            { id: nanoid(), text: 'document.add()' }
        ],
        correctAnswerIndex: 'document.write()',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'What is the default value of the "position" property in CSS?',
        answers: [
            { id: nanoid(), text: 'static' },
            { id: nanoid(), text: 'relative' },
            { id: nanoid(), text: 'absolute' },
            { id: nanoid(), text: 'fixed' }
        ],
        correctAnswerIndex: 'static',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which HTML tag is used to define a table row?',
        answers: [
            { id: nanoid(), text: '<tr>' },
            { id: nanoid(), text: '<td>' },
            { id: nanoid(), text: '<table>' },
            { id: nanoid(), text: '<row>' }
        ],
        correctAnswerIndex: '<tr>',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'In JavaScript, what is the purpose of the "map()" method?',
        answers: [
            { id: nanoid(), text: 'To create a new array with the results of calling a provided function on every element' },
            { id: nanoid(), text: 'To find the first element in the array that satisfies a provided testing function' },
            { id: nanoid(), text: 'To remove the first element from an array and return that element' },
            { id: nanoid(), text: 'To test whether all elements in the array pass the provided function' }
        ],
        correctAnswerIndex: 'To create a new array with the results of calling a provided function on every element',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which CSS property controls the text size?',
        answers: [
            { id: nanoid(), text: 'font-style' },
            { id: nanoid(), text: 'text-size' },
            { id: nanoid(), text: 'font-size' },
            { id: nanoid(), text: 'text-style' }
        ],
        correctAnswerIndex: 'font-size',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which of the following is a valid way to declare a function in JavaScript?',
        answers: [
            { id: nanoid(), text: 'function myFunction() {}' },
            { id: nanoid(), text: 'var myFunction = function() {}' },
            { id: nanoid(), text: 'const myFunction = () => {}' },
            { id: nanoid(), text: 'All of the above' }
        ],
        correctAnswerIndex: 'All of the above',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which HTML element is used to specify a footer for a document or section?',
        answers: [
            { id: nanoid(), text: '<footer>' },
            { id: nanoid(), text: '<bottom>' },
            { id: nanoid(), text: '<section>' },
            { id: nanoid(), text: '<foot>' }
        ],
        correctAnswerIndex: '<footer>',
        answerSubmit: ''
    },
    {
        id: nanoid(),
        text: 'Which CSS property is used to create space between the element’s border and its content?',
        answers: [
            { id: nanoid(), text: 'padding' },
            { id: nanoid(), text: 'margin' },
            { id: nanoid(), text: 'border' },
            { id: nanoid(), text: 'spacing' }
        ],
        correctAnswerIndex: 'padding',
        answerSubmit: ''
    }
];
const QuestionList: React.FC = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.question.questions);

    useEffect(() => {
        const shuffledQuestions = shuffleArray(questionsData.map(question => ({
            ...question,
            answers: shuffleArray(question.answers)
        })));
        dispatch(setQuestions(shuffledQuestions));
    }, [dispatch]);

    function shuffleArray<T>(array: T[]): T[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    return (
        <div>
            {questions.map((question, index) => (
                <QuestionComponent key={question.id} question={question} inx={index}
                    correctAnswerIndex={question.correctAnswerIndex} />
            ))}
        </div>
    );
};

export default QuestionList;