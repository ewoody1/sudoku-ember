import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('square-item', 'Integration | Component | squre item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{square-item}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('data', 1);
  this.render(hbs`{{square-item model=data}}`);

  assert.equal(this.$().text().trim(), '1');
});
