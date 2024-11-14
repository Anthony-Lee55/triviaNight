import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {
  async getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=10')
    console.log(response);
    const questionData = await response.json()
    console.log('❓📡', questionData);
    const questions = questionData.results.map(questionData => new Question(questionData))
    console.log('❓✨', questions);
    AppState.questions = questions
    AppState.masterListQuestions = questions
  }


  // filterQuestions(filterCategory) {
  //   let filtered = AppState.masterListQuestions.filter(question => question.category.join('').includes(filterCategory))
  //   AppState.questions = filtered
  // }


}

export const questionsService = new QuestionsService()