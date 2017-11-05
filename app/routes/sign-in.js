import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      const email = credentials.email;
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('application'))
      .then(() => this.get('flashMessages').success(`Welcome, ${email}!`))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
