import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  user_id: Ember.computed.alias('auth.credentials.id'),
  model (params) {
    return Ember.RSVP.hash({
      quiz: this.get('store').findRecord('quiz', params.quiz_id),
      user: this.get('store').findRecord('user', this.get('user_id'))
    });
  },
  actions: {
    createQuestion (inputs) {
      const id = inputs.quiz_id;
      let newQuestion = this.get('store').createRecord('question', inputs);
      newQuestion.save()
      .then(() => this.get('flashMessages').success('Question created!'))
      .then(() => this.transitionTo('quizzes'))
      .then(() => this.transitionTo('quiz', id))
      .catch(() =>
        this.get('flashMessages')
        .danger('Unable to create question. Please fill out all form fields.')
      )
    },
    editQuiz (newQuiz, quiz) {
      quiz.set('title', newQuiz.title);
      quiz.set('category', newQuiz.category);
      quiz.save()
        .then(() => this.get('flashMessages').success('Quiz Updated!'))
        // .then(() => this.modelFor('quizzes').reload())
        .catch(() => this.get('flashMessages')
          .danger('Unable to create question. Please fill out all form fields.')
      )
    },
    updateScore (user, score) {
      user.set('score', score);
      user.save();
    },
    refreshRoute () {
      this.refresh();
    }
  }
});
