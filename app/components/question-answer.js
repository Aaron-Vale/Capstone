import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  score: Ember.computed.alias('auth.credentials.score'),
  user_id: Ember.computed.alias('auth.credentials.id'),

  classNameBindings: ['correct', 'incorrect', 'answered'],
  answered: Ember.computed.alias('isAnswered'),
  correct: Ember.computed.alias('isCorrect'),
  incorrect: Ember.computed.alias('isIncorrect'),
  isAnswered: false,
  isCorrect: false,
  isIncorrect: false,
  actions: {
    checkAnswer () {
      const user_id = this.get('user_id');
      const question_id = this.get('question.id');
      const responses = this.get('question_response.content');

      let answered = false;

      for (let i = 0; i < responses.length; i++) {
        if (responses[i]._data.user_id === user_id && responses[i]._data.question_id === question_id) {
          answered = true;
        }
      }
      if (!answered) {
        this.sendAction('logResponse', user_id, question_id);
      }
      const points = this.get('question').points;
      // if correct
      if (this.get('question').correct === this.get('answer')) {
        if (!this.get('isAnswered')) { // if not already answered
          if (Number(this.get('user').id) !== Number(this.get('quizAuthor')) && !answered) {
            let score = this.get('score');
            this.set('score', score + points);
            this.sendAction('updateScore', this.get('user'), this.get('score'));
          }
          this.set('isCorrect', true);
          this.set('isAnswered', true);
        }
      } else { // if incorrect
        if (!this.get('isAnswered')) {
          if (Number(this.get('user').id) !== Number(this.get('quizAuthor')) && !answered) {
            let score = this.get('score');
            this.set('score', score - points);
            this.sendAction('updateScore', this.get('user'), this.get('score'));
          }
          this.set('isIncorrect', true);
          this.set('isAnswered', true);
        }
      }
    }
  }
});
