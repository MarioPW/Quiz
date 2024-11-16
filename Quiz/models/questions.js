import { Question } from "./question.js";
import { quizes } from "../data.js";

export function questions(category){
    let data = quizes[category]
    const questions = data.map(question =>
        new Question(question.question,
                    question.answers,
                    question.correct_answer           
            ))
            return questions
        }

