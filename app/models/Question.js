import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"

export class Question {
  constructor(data) {
    this.id = data.id || generateId()
    this.type = data.type
    this.question = data.question
    this.incorrectAnswers = data.incorrect_answers
    this.difficulty = data.difficulty
    this.correct_answer = data.correct_answer
    this.category = data.category || []
    this.answered = false
    this.answeredCorrectly = false
    this.answers = data.correct_answer && data.incorrectAnswers
  }

  get CardTemplate() {
    return `
    <div class="col-md-6"
      <div class="">
        <span class="category fw-bold">
          Question ${this.question}: ${this.category}
        </span>
        <span class="rounded g-1 difficulty bg-info text-light p-1">
          ${this.difficulty}
        </span>
      </div>
      <div class="col-md-6 border border-1 border-secondary rounded bg-dark p-3 mt-3">
        <p class="text-light fw-bold">${this.question}</p>
      </div>
    </div>
    `
  }

  get buttonHTMLTemplate() {
    return `
          <button class="btn btn-primary fw-bold" type="button"
            onclick="app.QuestionsController.filterQuestions(${this.id})">${this.category}</button>
    `
  }

  //   get answerPills() {
  //     let buttonHTML = ''
  //     buttonHTML += `
  // <button class="p-2 rounded-pill btn btn-light">
  // ${answers}
  // </button>
  // `
}



// NOTE reference code
// get answerButtons() {
//   let buttonHTML = ''
//   this.answerButtons.forEach(answer => {
//     buttonHTML += `
//     <button onclick="app.QuestionsController.answerQuestion('${this.id}', '${answer}')" class="" ${this.answered ? 'disabled' : ''}>
//       ${answer}
//     </button>
//     `
//   })
//   return buttonHTML
// }