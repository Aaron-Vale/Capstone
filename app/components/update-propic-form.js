import Ember from 'ember';

export default Ember.Component.extend({
  credentials: {},
  actions: {
    updatePropic () {
      this.sendAction('updatePropic', this.get('credentials'), this.get('user'));
      this.set('credentials.propic', null);
    }
  }
});
