import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('quizzes');
  this.route('create-quiz');
  this.route('quiz', {path: '/quizzes/:quiz_id'});
  this.route('question', {path: '/questions/:question_id'});
  this.route('account', {path: '/account/:user_id'});
});

export default Router;
