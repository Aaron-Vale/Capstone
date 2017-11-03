import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  id: Ember.computed.alias('auth.credentials.id'),
  flashMessages: Ember.inject.service(),
  actions: {
    deleteQuestion () {
      const user_id = this.get('question.quiz.user_id');
      console.log(user_id);
      console.log(this.get('id'));
      if (user_id === this.get('id')) {
        this.sendAction('deleteQuestion', this.get('question'));
      } else {
        this.get('flashMessages')
        .danger('You are not the creator of this quiz, so you cannot delete the question.');
      }
    }
  }
});
