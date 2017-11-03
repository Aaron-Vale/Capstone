import Ember from 'ember';

export default Ember.Component.extend({
  credentials: {},
  actions: {
    updateUsername () {
      this.sendAction('updateUsername', this.get('credentials'), this.get('user'));
    }
  }
});
