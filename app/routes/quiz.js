import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
      return this.get('store').query('question', {
      filter: {
        quiz_id: params.quiz_id
      }
    })
  }
});
