import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Answer {
    id: string;
    text: string;
}

export interface Question {
    id: string;
    text: string;
    answers: Answer[];
    correctAnswerIndex: string;
    answerSubmit: string;
}
interface QuestionState {
    questions: Question[];
    questionsAnswer: Question[];
}

const initialState: QuestionState = {
    questions: [],
    questionsAnswer: []
};

const questionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<Question[]>) {
            state.questions = action.payload;
        },
        setAnswer(state, action: PayloadAction<Question[]>) {
            state.questionsAnswer = action.payload;
        },
        updateAnswerSubmit: (state, action) => {
            console.log(action.payload)
            const { questionIndex, answerSubmit } = action.payload;
            console.log(questionIndex)
            state.questions[questionIndex].answerSubmit = answerSubmit;
        }
    },
});

export const { setQuestions, setAnswer, updateAnswerSubmit } = questionSlice.actions;
export default questionSlice.reducer;

