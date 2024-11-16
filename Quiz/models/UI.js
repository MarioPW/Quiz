export class UI {
    constructor(){}

    getCategories(categories, callback){
        const categoriesContainer = document.getElementById("choices")
        categoriesContainer.innerHTML=""  
        for(let i=0; i < categories.length; i++){        
            const button = document.createElement("button");
            button.innerText = categories[i].replace('_', ' ');
            button.className = "button";
            button.value = categories[i]; 
            button.addEventListener("click", () => callback(categories[i]))            
            categoriesContainer.append(button);
        }  
    }

    getQuestion(question){
    const questionTitle = document.getElementById("question")
    questionTitle.innerHTML = question;
    questionTitle.className = "color"
    }
    getChoices(choices, callback){
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML=""
        for(let i=0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = "button";
            button.addEventListener("click", () => callback(choices[i]));
            choicesContainer.append(button);
        }
    }

    getScore(score){
        const endQuiz = `
        <h2 class="font-4 color">Result</h2>
        <h3 class="font-2 color">Your Score: ${score}</h3>`
        const element = document.getElementById("quiz");
        element.innerHTML = endQuiz;
        element.className = 'quiz-body bg-3'
    }

    getProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML=`Question ${currentIndex} of ${total}`;
        element.className="color"
        element.value=100/total*currentIndex
    }

}