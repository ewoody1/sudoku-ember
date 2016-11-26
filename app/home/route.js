import Ember from 'ember';

export default Ember.Route.extend({
  boardIo: Ember.inject.service(),
  sudokuSolver: Ember.inject.service(),

  outputModel: Ember.computed.alias('boardIo.outputModel'),

  model() {
    return this.get('outputModel');
  },

  init() {
    this.get('boardIo').getNew();
  },

  actions: {
    solveMe() {
      let outputData = this.get('sudokuSolver').solve();
      this.get('boardIo').setDataModel(outputData);
    },

    retry() {
      this.get('boardIo').reset();
    }
  }
});
