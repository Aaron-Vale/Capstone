import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  user_id: Ember.computed.alias('auth.credentials.id'),
  model (params) {
    return Ember.RSVP.hash({
      quiz: this.get('store').findRecord('quiz', params.quiz_id),
      user: this.get('store').findRecord('user', this.get('user_id')),
      question_response: this.get('store').findAll('question_response')
    });
  },
  actions: {
    createQuestion (inputs) {
      const id = inputs.quiz_id;
      let newQuestion = this.get('store').createRecord('question', inputs);
      newQuestion.save()
      .then(() => this.transitionTo('quizzes'))
      .then(() => this.transitionTo('quiz', id))
      .then(() => this.get('flashMessages').success('Question created!'))
      .catch(() =>
        this.get('flashMessages')
        .danger('Unable to create question. Please fill out all form fields.')
      );
    },
    editQuiz (newQuiz, quiz) {
      const id = quiz.id;
      quiz.set('title', newQuiz.title);
      quiz.set('category', newQuiz.category);
      quiz.save()
        .then(() => this.get('flashMessages').success('Quiz Updated!'))
        .catch(() => this.get('flashMessages')
          .danger('Unable to update quiz. Please fill out all form fields.')
        )
        .then(() => this.transitionTo('quizzes'))
        .then(() => this.transitionTo('quiz', id));
    },
    updateScore (user, score) {
      user.set('score', score);
      user.save();
    },
    logResponse (user_id, question_id) {
      const response =  {
          user_id: user_id,
          question_id: question_id
        };
      let newResponse = this.get('store').createRecord('question_response', response);
      newResponse.save();
    }
  }
});
