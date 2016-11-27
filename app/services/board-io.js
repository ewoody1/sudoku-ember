import Ember from 'ember';

export default Ember.Service.extend({
  /*inputData: [
        4, 1, 7,   3, 6, 9,   8, 2, 5, // 0x0
        0, 3, 2,   1, 5, 8,   9, 4, 7, // 0x1
        0, 5, 0,   7, 2, 0,   0, 0, 0, // 0x2

        0, 2, 0,   0, 0, 0,   0, 6, 0, // 1x0
        0, 0, 0,   0, 8, 0,   4, 0, 0, // 1x1
        0, 0, 0,   0, 1, 0,   0, 0, 0, // 1x2

        0, 0, 0,   6, 0, 3,   0, 7, 0, // 2x0
        5, 0, 0,   2, 0, 0,   0, 0, 0, // 2x1
        1, 0, 4,   0, 0, 0,   0, 0, 0  // 2x2
  ],

  inputData: [
      4, 0, 0,   0, 0, 0,   8, 0, 5, // 0x0
      0, 3, 0,   0, 0, 0,   0, 0, 0, // 0x1
      0, 0, 0,   7, 0, 0,   0, 0, 0, // 0x2

      0, 2, 0,   0, 0, 0,   0, 6, 0, // 1x0
      0, 0, 0,   0, 8, 0,   4, 0, 0, // 1x1
      0, 0, 0,   0, 1, 0,   0, 0, 0, // 1x2

      0, 0, 0,   6, 0, 3,   0, 7, 0, // 2x0
      5, 0, 0,   2, 0, 0,   0, 0, 0, // 2x1
      1, 0, 4,   0, 0, 0,   0, 0, 0  // 2x2
  ],

  inputData: [
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x0
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x1
        0, 0, 0,   7, 0, 0,   0, 0, 0, // 0x2

        0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x0
        0, 0, 0,   0, 0, 0,   4, 0, 0, // 1x1
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x2

        0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x0
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x1
        0, 0, 0,   0, 0, 0,   0, 0, 0  // 2x2
  ],

  */
  inputData: [
        8, 5, 6,   0, 1, 4,   7, 3, 0, // 0x0
        0, 9, 0,   0, 0, 0,   0, 0, 0, // 0x1
        2, 4, 0,   0, 0, 0,   1, 6, 0, // 0x2

        0, 6, 2,   0, 5, 9,   3, 0, 0, // 1x0
        0, 3, 1,   8, 0, 2,   4, 5, 0, // 1x1
        0, 0, 5,   3, 4, 0,   9, 2, 0, // 1x2

        0, 2, 4,   0, 0, 0,   0, 7, 3, // 2x0
        0, 0, 0,   0, 0, 0,   0, 1, 0, // 2x1
        0, 1, 8,   6, 3, 0,   2, 9, 4  // 2x2
  ],

  outputModel: [], // data model for view

  init() {
    this.setNew(); // init a new game
  },

  setNew() {
    let rowGroups = [0, 1, 2]; // 3 row-groups in total
    rowGroups.forEach((groupId) => {
      this.createOneGroup(groupId);
    });
    return this.get('outputModel');
  },

  createOneGroup(groupId) {
    let group = [];
    this.get('outputModel').push(group);
    this.createRowsForGroup(groupId);
  },

  createRowsForGroup(groupId) {
    let rows = [0, 1, 2]; // 3 rows in one group

    rows.forEach((rowId) => {
      let row = [];
      this.get('outputModel').objectAt(groupId).push(row);
      this.createOneRow(groupId, rowId);
    });
  },

  createOneRow(groupId, rowId) {
    let cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let rowContent = this.get('outputModel').objectAt(groupId).objectAt(rowId);
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
  },

  setDataModel(outputData) {
    for(let groupIndex = 0; groupIndex < 3; groupIndex++) {
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          let rowIndexInOutput = (groupIndex * 3 + rowIndex);
          let value = outputData.objectAt(rowIndexInOutput * 9+ colIndex);
          this.get('outputModel').objectAt(groupIndex).objectAt(rowIndex).objectAt(colIndex).set('value', value);
        }
      }
    }
  },
  reset() {
    this.setDataModel(this.get('inputData'));
  }
});
