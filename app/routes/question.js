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
    }
  }
});
