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
  A databinding for solver values
  */
  squares: computed.alias('boardIo.inputData'),
  /**
  A databinding between outputData and views
  */
  outputData: computed.alias('sudokuSolver.outputData'),
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
    this.get('boardIo'); // impliedly call boardIo.init()
    this.get('sudokuSolver'); // impliedly call sudokuSolver.init()
  },

  actions: {
    /**
    Request solver service to solve a sudoku, and then
    Call boardIo service to set result on board, when it is done,
    'boardIo.outputModel' changes view via databinding

    TODO:
      - show ui indicator while computing since the hardes one can take several minutes
      - be able to abort solving manually
    */
    solveMe() {
      //todo - find a way to bind output data among route, boardIo and sudoku solver
      let result = this.get('sudokuSolver').solve(this.get('squares'));
      if (result) {
        this.get('boardIo').setDataModel(this.get('outputData'));
      } else {
        window.alert('not solvable!');
      }
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
