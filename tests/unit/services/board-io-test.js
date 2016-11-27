import { moduleFor, test } from 'ember-qunit';

moduleFor('service:board-io', 'Unit | Service | board io service', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('Input data has 81 elements', function(assert) {
  let service = this.subject();
  assert.ok(service.inputData.length === 81, "it has 81 squares");
});

test('squareMap has 81 keys', function(assert) {
  let service = this.subject();
  assert.ok(Object.keys(service.get('squareMap')).length === 81, "values has 81 keys");
});

test('outputModel is not empty', function(assert) {
  let service = this.subject();
  assert.notOk(Ember.isEmpty(service.get('outputModel')), "outputModel is generated");
});
