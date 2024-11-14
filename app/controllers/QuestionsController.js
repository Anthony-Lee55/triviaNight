import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class QuestionsController {
  constructor() {
    console.log('❓🎮');
    this.getQuestions()
    AppState.on('questions', this.drawQuestions)
    AppState.on('categories', this.drawCategories)
    this.getCategories()
  }

  async getQuestions() {
    await questionsService.getQuestions()
  }

  drawQuestions() {
    const questions = AppState.questions
    let questionsContent = ''
    questions.forEach(question => questionsContent += question.CardTemplate)
    let questionsElm = document.getElementById('questions')
    questionsElm.innerHTML = questionsContent
  }

  async getCategories() {
    try {
      await questionsService.getCategories()
    } catch (error) {
      console.error(error)
      Pop.toast("You broke EVERYTHING!", 'error')
    }
  }

  drawCategories() {
    const categories = AppState.categories
    let htmlContent = ''
    categories.forEach(category, htmlContent += categories.buttonHTMLTemplate)
    setHTML('categories', htmlContent)
  }

  setActiveCategory(category) {
    questionsService.setActiveCategory(category)
  }
}