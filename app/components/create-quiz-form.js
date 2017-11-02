import Ember from 'ember';

export default Ember.Component.extend({
  newQuiz: {
    title: null,
    category: null
  },
  actions: {
    createQuiz () {
      this.sendAction('createQuiz', this.get('newQuiz'));
      this.set('newQuiz', null);
    }
  }
});
