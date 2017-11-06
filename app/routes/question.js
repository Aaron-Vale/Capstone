import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion (question) {
      const quizId = question.get('quiz_id');
      question.destroyRecord()
      .then(() => this.get('flashMessages').success('Question deleted.'))
      .then(() => this.transitionTo('quiz', quizId))
      .catch(() =>
        this.get('flashMessages')
        .danger('Unable to delete question. Please fill out all form fields.')
      );
    },
    editQuestion (newQuestion, question) {
      question.set('title', newQuestion.title);
      question.set('answer1', newQuestion.answer1);
      question.set('answer2', newQuestion.answer2);
      question.set('answer3', newQuestion.answer3);
      question.set('answer4', newQuestion.answer4);
      question.set('correct', newQuestion.correct);
      question.set('points', newQuestion.points);
      question.save()
      .then(() => this.get('flashMessages').success('Question updated!'))
      .catch(() =>
        this.get('flashMessages')
        .danger('Unable to update question. Please fill out all form fields.')
      );

    }
  }
});
