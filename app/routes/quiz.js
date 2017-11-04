import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  user_id: Ember.computed.alias('auth.credentials.id'),
  model (params) {
    console.log(params)
    return Ember.RSVP.hash({
      quiz: this.get('store').findRecord('quiz', params.quiz_id),
      user: this.get('store').findRecord('user', this.get('user_id'))
    });
  },
  actions: {
    createQuestion (inputs) {
      const id = inputs.quiz_id;
      let newQuestion = this.get('store').createRecord('question', inputs);
      newQuestion.save();
      console.log(this.modelFor('quiz.quiz'));
      this.model({quiz_id: id});
      this.transitionTo('quiz', id);
    },
    editQuiz (newQuiz, quiz) {
      quiz.set('title', newQuiz.title);
      quiz.set('category', newQuiz.category);
      quiz.save();
    },
    updateScore (user, score) {
      user.set('score', score);
      user.save();
    }
  }
});
