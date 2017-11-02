import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string'),
  user: DS.attr(),
  questions: DS.attr()
});
