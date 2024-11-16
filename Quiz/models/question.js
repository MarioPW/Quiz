 export class Question {
    constructor(question, choices, answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(answer){ 
        return answer === this.choices[this.answer - 1];       
    }   
}