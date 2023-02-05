import { questions } from "./models/questions.js";
import { categories } from "./models/categories.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.js";

const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        ui.getScore(quiz.score);
    } else {
        ui.getQuestion(quiz.getQuestionIndex().question);
        ui.getChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui);
        });
        ui.getProgress(quiz.questionIndex + 1, quiz.questions.length);
    } 
};
function main(){
    const ui = new UI();     
    const a = ui.getCategories(categories, (category) => {
    const questionary = questions(category)
    startQuiz(questionary)
    });   
}
function startQuiz(questions){   
    const ui = new UI();   
    const quiz = new Quiz(questions);
    renderPage(quiz, ui)
}
main();
