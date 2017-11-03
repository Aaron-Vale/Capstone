import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  id: Ember.computed.alias('auth.credentials.id'),
  flashMessages: Ember.inject.service(),
  newQuestion: {
    title: null,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    correct: null,
    quiz_id: null
  },
  actions: {
    editQuestion () {
      const user_id = this.get('question.quiz.user_id');
      if (user_id === this.get('id')) {
        this.set('newQuestion.quiz_id', this.get('question.quiz_id'));
        this.sendAction('editQuestion', this.get('newQuestion'), this.get('question'));
        this.set('newQuestion.title', null);
        this.set('newQuestion.answer1', null);
        this.set('newQuestion.answer2', null);
        this.set('newQuestion.answer3', null);
        this.set('newQuestion.answer4', null);
        this.set('newQuestion.correct', null);
      } else {
        this.get('flashMessages')
        .danger('You are not the creator of this quiz, so you cannot edit the question.');
      }
    }
  }
});
