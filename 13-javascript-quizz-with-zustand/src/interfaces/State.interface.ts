import { Question } from "../types/question.type";

export interface State {
    questions: Question[],
    currentQuestion: number,
    fetchQuestions: (limit: number) => Promise<void>,
    selectAnswer: (questionId: number, answerId: number) => void,
    goNextQuestion: () => void,
    goPreviousQuestion: () => void
}