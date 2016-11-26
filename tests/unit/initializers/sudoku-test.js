import Ember from 'ember';
import SudokuInitializer from 'sudoku-ember/initializers/sudoku';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | sudoku', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SudokuInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
