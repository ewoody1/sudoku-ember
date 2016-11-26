import Ember from 'ember';

const {
  Route,
  inject,
  computed
} = Ember;

export default Route.extend({
  /**
  Inject for board input/output operations
  */
  boardIo: inject.service(),
  /**
  Inject as sudoku solver
  */
  sudokuSolver: inject.service(),
  /**
  A model databinding for view
  */
  displayModel: computed.alias('boardIo.outputModel'),
  /**
  A databinding for solver
  */
  squares: computed.alias('boardIo.squareMap'),
  /**
   Provide data model for components in view
   @return {array}
   */
  model() {
    return this.get('displayModel');
  },
  /**
    An override method called when the route is instantiated.
    Call boardIo service to set a new game, when it is done,
    'boardIo.outputModel' changes view via databinding
  */
  init() {
    this.get('boardIo').setNew();
  },

  actions: {
    /**
    Request solver service to solve a sudoku, and then
    Call boardIo service to set result on board, when it is done,
    'boardIo.outputModel' changes view via databinding
    TODO:
       - handle failures if the game can't be solved.
       - handle UI animation if the solve takes long time.
    */
    solveMe() {
      let outputData = this.get('sudokuSolver').solve(this.get('squares'));
      this.get('boardIo').setDataModel(outputData);
    },

    /**
    Call boardIo service to set the previous game on board, when it is done,
    'boardIo.outputModel' changes view via databinding
    TODO: Auto generate a new solvable game instead of previous game
    */
    replay() {
      this.get('boardIo').reset();
    }
  }
});
