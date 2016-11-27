import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:home', 'Unit | Route | home', {
  // Specify the other units that are required for this test.
   needs: ['service:board-io', 'service:sudoku-solver']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it has display model', function(assert) {
  let route = this.subject();
  assert.ok(Ember.isArray(route.get('displayModel'), 'display model is an array'));
});

test('it has display model', function(assert) {
  let route = this.subject();
  assert.ok(Ember.isArray(route.get('displayModel'), 'display model is an array'));
});

test('it has values of the input data', function(assert) {
  let route = this.subject();
  assert.notOk(Ember.isEmpty(route.get('squares'), 'it has values'));
});

test('solve action can solve default game', function(assert) {
  let route = this.subject();
  route.actions.solveMe.call(route);
  assert.notOk(Ember.isEmpty(route.get('outputData'), 'it has outputData after solve action'));
});
