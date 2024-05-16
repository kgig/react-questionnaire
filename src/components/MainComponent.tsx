import React, { useEffect, useState } from 'react';
import QuestionList from './question/QuestionList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { setAnswer, setQuestions } from '../reducers/questionReducer';
import SummaryList from './question/SummaryList';

const MainComponent: React.FC = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.question.questions);
    const [start, setStart] = useState<boolean | null>(true);
    const [score, setScore] = useState<number | null>(0);
    const [summaryFlag, setSummaryFlag] = useState<boolean | null>(false);
    function classNames(...classNamees: any) {
        return classNamees.filter(Boolean).join(' ')
    }
    let leaderBorads = [
        {
            rank: 1,
            name: 'Leslie Alexander',
            bgColor: 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500',
            score: 20,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            rank: 2,
            name: 'Michael Foster',
            score: 19,
            img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            rank: 3,
            name: 'Lindsay Walton',
            score: 18,
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        }
    ]
    useEffect(() => {
        const correctAnswersCount = questions.reduce((count, question) => {
            if (question.answerSubmit === question.correctAnswerIndex) {
                return count + 1;
            }
            return count;
        }, 0);
        setScore(correctAnswersCount)
    }, []);
    const submitAnswer = async () => {
        console.log(questions)
    }

    return (
        <div>
            <div className="mx-auto mt-0 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="mt-0 grid grid-cols-1 gap-2 sm:mt-10 sm:grid-cols-3 lg:grid-cols-2">

                    <div className="flex flex-col-reverse">
                        <section className={classNames('h-[calc(100vh-120px)]', 'w-full mt-4 pb-16 pt-0 overflow-y-auto  sm:px-6 lg:px-8')}    >
                            <div className="bg-white py-24 sm:py-2 p-4 border rounded-lg shadow-lg mb-4">
                                <div className="mx-auto grid max-w-7xl gap-x-2 gap-y-2 px-6 lg:px-4 xl:grid-cols-1">
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Leader board</h2>
                                    </div>
                                    <ul role="list" className="grid gap-x-2 gap-y-2 sm:grid-cols-1 sm:gap-y-4 xl:col-span-1">
                                        {leaderBorads.map((leader, index) => (
                                            <li className={classNames(leader.rank == 1 ? 'bg-gradient-to-r from-yellow-400 to-red-500 hover:from-pink-500 hover:to-yellow-500' : leader.rank == 2 ? 'bg-gradient-to-r from-pink-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500' : 'bg-gradient-to-r from-green-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500', 'border rounded-lg shadow-lg m-4 p-4')}>
                                                <div className={classNames("flex justify-between items-center gap-x-6 ")}>
                                                    <div className='flex items-center '>
                                                        <img className="h-16 w-16 rounded-full" src={leader.img} alt="" />
                                                        <div className='pl-6'>
                                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{leader.name}</h3>
                                                            <p className="text-sm font-semibold leading-6 text-indigo-600">Score : {leader.score}</p>
                                                        </div>
                                                    </div>
                                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-6 py-4 text-xl font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">{index + 1}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="flex flex-col col-span-1">
                        {(!summaryFlag && start) &&
                            <div className="bg-white py-24 sm:py-16 p-4 mb-4 mt-48">
                                <div className="b relative mx-auto h-16 w-64 flex justify-center items-center"
                                    onClick={() => { setStart(false); dispatch(setAnswer(questions)); }} >
                                    <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                                    </div>
                                    <a className="text-center text-white font-semibold z-10 pointer-events-none">LET'S START!</a>
                                    <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                        <span className="absolute inline-flex rounded-full h-6 w-6 bg-purple-500"></span>
                                    </span>

                                </div>
                            </div>
                        }
                        {(!summaryFlag && !start) &&
                            <section className={classNames('h-[calc(100vh-120px)]', 'w-full mt-4 pb-16 pt-0 overflow-y-auto  sm:px-6 lg:px-8')}    >
                                <QuestionList />
                                <footer className="flex items-center justify-center sm:px-6 lg:px-8 sm:py-4 lg:py-4 rounded-md">
                                    <div className="b relative mx-auto h-16 w-64 flex justify-center items-center"
                                        onClick={() => { setStart(false); setSummaryFlag(true); submitAnswer() }} >
                                        <div className="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                                        </div>
                                        <a className="text-center text-white font-semibold z-10 pointer-events-none">SEND ANSWER</a>
                                    </div>
                                </footer>
                            </section>
                        }
                        {summaryFlag &&
                            <section className={classNames('h-[calc(100vh-120px)]', 'w-full mt-4 pb-16 pt-0 overflow-y-auto  sm:px-6 lg:px-8')}    >

                                <div className='flex justify-between'>
                                    <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mb-4">
                                        <div className="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform transition duration-300 ease-out">
                                        </div>
                                        <a className="text-center text-white font-semibold z-10 pointer-events-none">SCORE : {score}</a>
                                    </div>
                                    <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mb-4"
                                        onClick={() => { setStart(true); setSummaryFlag(false) }} >
                                        <div className="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                                        </div>
                                        <a className="text-center text-white font-semibold z-10 pointer-events-none">TRY AGAIN!</a>
                                    </div>
                                </div>
                                <SummaryList />
                            </section>
                        }

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MainComponent;