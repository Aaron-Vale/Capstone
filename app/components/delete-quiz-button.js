import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuiz () {
      this.sendAction('deleteQuiz', this.get('quiz'));
    }
  }
});
