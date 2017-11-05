import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  username: Ember.computed.alias('auth.credentials.username'),
  model () {
    return this.get('store').findAll('quiz');
  },
  actions: {
    deleteQuiz (quiz) {
      quiz.destroyRecord();
    },
    randomQuiz () {
      let ids = [];
      const quizzes = this.get('store').peekAll('quiz').content;
      for (let i = 0; i < quizzes.length; i++) {
        ids.push(quizzes[i].id);
      }
      const id = Math.floor(Math.random() * ids.length);
      this.transitionTo('quiz', ids[id]);
    }
  }
});
