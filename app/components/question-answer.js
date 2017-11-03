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
      // if correct
      if (this.get('question').correct === this.get('answer')) {
        if (!this.get('isAnswered')) { // if not already answered
          let score = this.get('score');
          this.set('score', score + 5);
          this.set('isCorrect', true);
          this.set('isAnswered', true);
        }
      } else { // if incorrect
        if (!this.get('isAnswered')) {
          let score = this.get('score');
          this.set('score', score - 5);
          this.set('isIncorrect', true);
          this.set('isAnswered', true);
        }
      }
    }
  }
});