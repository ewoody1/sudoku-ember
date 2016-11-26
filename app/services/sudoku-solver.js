import Ember from 'ember';

/**
  A service to solve sudoku game
*/
export default Ember.Service.extend({
  outputData: [
        9, 0, 3, 6, 0, 4, 7, 0, 9, // 0x0
        0, 2, 0, 0, 9, 0, 0, 1, 0, // 0x1
        7, 0, 0, 0, 0, 0, 0, 0, 6, // 0x2
        2, 0, 4, 0, 3, 0, 9, 0, 8, // 1x0
        0, 0, 0, 0, 0, 0, 0, 0, 0, // 1x1
        5, 0, 0, 9, 0, 7, 0, 0, 1, // 1x2
        6, 0, 0, 0, 5, 0, 0, 0, 2, // 2x0
        0, 0, 0, 0, 7, 0, 0, 0, 0, // 2x1
        9, 0, 0, 8, 0, 2, 0, 0, 5  // 2x2
  ],

  squares: [],
  units: {},
  peers: {},

  testGrid: "003020600900305001001806400008102900700000008006708200002609500800203009005010300",
  rows: ['A','B','C','D','E','F','G','H','I'],
  cols: ['1','2','3','4','5','6','7','8','9'],

  /**
    An override method called when the service is instantiated.
    1. create shared objects, squares, units and peets
  */
  init() {
    this.set('squares', this.createSquares());
    console.log(this.get('squares'));
    this.set('units', this.createUnits());
    console.log(this.get('units'));
  },

  cross(arrayA, arrayB) {
    let arrayC = [];
    arrayA.forEach((a) => {
      arrayB.forEach((b) => {
        squares.push(a+b);
      });
    });
    return arrayC;
  },

  createUnits() {
    let unitList = [];

    let rows = ['A','B','C','D','E','F','G','H','I'];
    let cols = ['1','2','3','4','5','6','7','8','9'];

    rows.forEach((r) => {
      unitlist.push(cross([r], cols));
    });

    cols.forEach((c) => {
      unitList.push(cross([c], rows));
    });

    let rrows = [['A','B','C'], ['D','E','F'], ['G','H','I']];
    let ccols = [['1','2','3'], ['4','5','6'], ['7','8','9']];

    rrows.forEach((rs) => {
      ccols.forEach((cs) => {
        unitList.push(cross([rs], [cs]));
      });
    });

    let units = {};

    this.get('squares').forEach((s) => {
      units[s] = [];
      unitList.forEach((u) => {
        if (u.includes(s)) {
          units[s].push(u);
        }
      });
    });

    return units;
  },


  solve(squareMap) {
    return this.get('outputData');
  }
});
