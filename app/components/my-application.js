import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  propic: Ember.computed.alias('auth.credentials.propic'),
  username: Ember.computed.alias('auth.credentials.username'),
  score: Ember.computed.alias('auth.credentials.score'),
  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
