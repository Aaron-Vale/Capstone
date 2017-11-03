import Ember from 'ember';

export default Ember.Component.extend({
  newQuiz: {
    title: null,
    category: null,
  },
  actions: {
    editQuiz () {
      this.set('newQuiz.quiz_id', this.get('quiz.id'));
      this.sendAction('editQuiz', this.get('newQuiz'), this.get('quiz'));
      this.set('newQuiz.title', null);
      this.set('newQuiz.category', null);
    }
  }
});
