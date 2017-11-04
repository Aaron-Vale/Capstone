import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateScore (user, score) {
      this.sendAction('updateScore', user, score);
    }
  }
});
