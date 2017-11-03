import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  username: Ember.computed.alias('auth.credentials.username'),
  model () {
    return this.get('store').findAll('quiz');
  },
  actions: {
    deleteQuiz (quiz) {
      console.log(quiz);
      quiz.destroyRecord();
    }
  }
});
