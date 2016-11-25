import Ember from 'ember';

export default Ember.Route.extend({
  inputData: [
        1, 0, 3, 6, 0, 4, 7, 0, 9, // 0x0
        0, 2, 0, 0, 9, 0, 0, 1, 0, // 0x1
        7, 0, 0, 0, 0, 0, 0, 0, 6, // 0x2
        2, 0, 4, 0, 3, 0, 9, 0, 8, // 1x0
        0, 0, 0, 0, 0, 0, 0, 0, 0, // 1x1
        5, 0, 0, 9, 0, 7, 0, 0, 1, // 1x2
        6, 0, 0, 0, 5, 0, 0, 0, 2, // 2x0
        0, 0, 0, 0, 7, 0, 0, 0, 0, // 2x1
        9, 0, 0, 8, 0, 2, 0, 0, 5  // 2x2
  ],

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

  squareArray: [], // data model for visualizaion
  squareMap: {},  // data model for fast access

  model() {
    return this.get('squareArray');
  },

  init() {
    let rowGroups = [0, 1, 2]; // 3 row-groups in total
    rowGroups.forEach((groupId) => {
      this.createOneGroup(groupId);
    });
    console.log(this.get('squareArray'));
    console.log(this.get('squareMap'));
  },

  createOneGroup(groupId) {
    let group = [];
    this.get('squareArray').push(group);
    this.createRowsForGroup(groupId);
  },

  createRowsForGroup(groupId) {
    let rows = [0, 1, 2]; // 3 rows in one group

    rows.forEach((rowId) => {
      let row = [];
      this.get('squareArray').objectAt(groupId).push(row);
      this.createOneRow(groupId, rowId);
    });
  },

  createOneRow(groupId, rowId) {
    let cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let rowContent = this.get('squareArray').objectAt(groupId).objectAt(rowId);
    cols.forEach((colId) => {
      let rowIndex = groupId*3 + rowId;
      this.createOneSqure(rowContent, rowIndex, colId);
    });
  },

  createOneSqure(rowContent, rowIndex, colIndex) {
    let square = Ember.Object.create({
      value: this.get('inputData').objectAt(rowIndex * 9 + colIndex)
    });

    rowContent.push(square);

    let key = `${rowIndex}${colIndex}`;

    this.get('squareMap')[key] = square;
  },

  printOutput() {
    for(let groupIndex = 0; groupIndex < 3; groupIndex++) {
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          let rowIndexInOutput = (groupIndex * 3 + rowIndex);
          let value = this.get('outputData').objectAt(rowIndexInOutput * 9+ colIndex);
          this.get('squareArray').objectAt(groupIndex).objectAt(rowIndex).objectAt(colIndex).set('value', value);
        }
      }
    }
  },

  actions: {
    solveMe() {
      this.printOutput();
    }
  }
});