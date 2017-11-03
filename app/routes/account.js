import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  id: Ember.computed.alias('auth.credentials.id'),
  flashMessages: Ember.inject.service(),
  model (params) {
    if (Number(this.get('id')) === Number(params.user_id)) {
      return this.get('store').findRecord('user', params.user_id);
    } else {
      this.get('flashMessages')
      .danger('Unauthorized.');
      this.transitionTo('application');
    }
  }
});
