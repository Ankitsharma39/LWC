import { LightningElement } from 'lwc';

export default class Quizapp extends LightningElement {
    selected ={}  //for storing answers
    myQuestions =[
        {
            id: "Question 1",
            question : "Which of the following is not template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
            
        },
        {
            id: "Question 2",
            question : "Which of the following is invalid in visual studio?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
             
        },
        {
           id: "Question 3",
           question : "Which of the following is invalid invalid template?",
            answers:{
            a:"if:true",
            b:"if:false",
            c:"none"
        },
        correctAnswer:"c"        
    }
    ]
    correctAnswers = 0
    isSubmitted = false
    get allnotSelected(){    
    return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length=== this.correctAnswers? 
            'slds-text-color_success':'slds-text-color_error' }`
    }
    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        const name = event.target.name
        const value = event.target.value
        this.selected = {...this.selected, [name]:value}
    }
    submitHandler(event){
       event.preventDefault()
       let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
       this.correctAnswers = correct.length
       this.isSubmitted = true
       console.log("this.correctAnswers",this.correctAnswers)
    }
    resetHandler(){
      this.selected = {}
      this.correctAnswers = 0
      this.isSubmitted = false
    }
}