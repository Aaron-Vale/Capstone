import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  score: Ember.computed.alias('auth.credentials.score'),

  classNameBindings: ['correct', 'incorrect', 'answered'],
  answered: Ember.computed.alias('isAnswered'),
  correct: Ember.computed.alias('isCorrect'),
  incorrect: Ember.computed.alias('isIncorrect'),
  isAnswered: false,
  isCorrect: false,
  isIncorrect: false,
  actions: {
    checkAnswer () {
      const points = this.get('question').points;
      // if correct
      if (this.get('question').correct === this.get('answer')) {
        if (!this.get('isAnswered')) { // if not already answered
          if (Number(this.get('user').id) !== Number(this.get('quizAuthor'))) {
            let score = this.get('score');
            this.set('score', score + points);
            this.sendAction('updateScore', this.get('user'), this.get('score'));
          }
          this.set('isCorrect', true);
          this.set('isAnswered', true);
        }
      } else { // if incorrect
        if (!this.get('isAnswered')) {
          if (Number(this.get('user').id) !== Number(this.get('quizAuthor'))) {
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
