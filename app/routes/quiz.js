import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('quiz', params.quiz_id);
  },
  actions: {
    createQuestion (inputs) {
      const id = inputs.quiz_id;
      let newQuestion = this.get('store').createRecord('question', inputs);
      newQuestion.save();
      this.modelFor('quiz').reload();
    }
  }
});
