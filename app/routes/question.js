import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion (question) {
      const quizId = question.get('quiz_id');
      question.destroyRecord();
      this.transitionTo('quiz', quizId);
    },
    editQuestion (newQuestion, question) {
      question.set('title', newQuestion.title);
      question.set('answer1', newQuestion.answer1);
      question.set('answer2', newQuestion.answer2);
      question.set('answer3', newQuestion.answer3);
      question.set('answer4', newQuestion.answer4);
      question.set('correct', newQuestion.correct);
      question.set('points', newQuestion.points);
      question.save();
    }
  }
});
