import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createQuiz (quiz) {
      let newQuiz = this.get('store').createRecord('quiz', quiz);
      newQuiz.save();
      this.transitionTo('quizzes');
    }
  }
});
