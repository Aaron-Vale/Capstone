import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-quiz-button', 'Integration | Component | delete quiz button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{delete-quiz-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#delete-quiz-button}}
      template block text
    {{/delete-quiz-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
