import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('quiz', params.quiz_id);
  },
  actions: {
    createQuestion (inputs) {
      const id = inputs.quiz_id;
      let newQuestion = this.get('store').createRecord('question', inputs);
      newQuestion.save();
      this.modelFor('quiz').reload();
      this.transitionTo('quiz', id);
    },
    editQuiz (newQuiz, quiz) {
      quiz.set('title', newQuiz.title);
      quiz.set('category', newQuiz.category);
      quiz.save();
    }
  }
});
