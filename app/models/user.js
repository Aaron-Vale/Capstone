import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  propic: DS.attr('string'),
  username: DS.attr('string'),
  score: DS.attr('number')
});
