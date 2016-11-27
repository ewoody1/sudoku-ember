import Ember from 'ember';

/**
  A service to solve sudoku game

  1. Prepare static arrary/maps for solver as much as possible before solve()
     a. squares - square key array
     b. units - a map of square keys for constraint presentation
     c. peers - a map of square keys for constaint propagation
     d. values - passed from client as values

  2. Ignore object.hasOwnProperty() check if the object is created locally
*/
export default Ember.Service.extend({
  outputData: [],
  // an array of keys - 'A1' ... 'I9'
  squares: [],
  // a map of (key, array[3][9]) - ('A1', [['B1'..'I1'], ['A2'...'A9'], ['ABC*123'- 'A1']])
  units: {},
  // a map of (key, array[20]) - ('A1', ['B1...I1', 'A2...A9', 'B2, C2, B3, C3'])
  peers: {},
  // a map of (key, value) - ('A1', '9')
  values: {},

  rows: ['A','B','C','D','E','F','G','H','I'],
  cols: ['1','2','3','4','5','6','7','8','9'],

  /**
    An override method called when the service is instantiated.
    Create shared objects, squares, units and peers
  */
  init() {
    this.createSquares();
    this.createUnits();
    this.createPeers();
  },

  cross(arrayA, arrayB) {
    let arrayC = [];
    arrayA.forEach((a) => {
      arrayB.forEach((b) => {
        arrayC.push(a+b);
      });
    });
    return arrayC;
  },

  createSquares() {
    this.set('squares', this.cross(this.get('rows'), this.get('cols')));
  },

  createUnitList() {
    let unitList = [];

    this.get('rows').forEach((r) => {
      unitList.push(this.cross([r], this.get('cols')));
    });

    this.get('cols').forEach((c) => {
      unitList.push(this.cross(this.get('rows'), [c]));
    });

    let rrows = [['A','B','C'], ['D','E','F'], ['G','H','I']];
    let ccols = [['1','2','3'], ['4','5','6'], ['7','8','9']];

    rrows.forEach((rs) => {
      ccols.forEach((cs) => {
        unitList.push(this.cross(rs, cs));
      });
    });
    return unitList;
  },

  createUnits() {
    let units = {};
    let unitList = this.createUnitList();

    this.get('squares').forEach((s) => {
      units[s] = [];
      unitList.forEach((u) => {
        if (u.includes(s)) {
          units[s].push(u);
        }
      });
    });

    this.set('units', units);
  },

  createPeers() {
    let peers = {};
    this.get('squares').forEach((s) => {
      peers[s] = [];
      let unitList = this.get('units')[s];
      unitList.forEach((ul) => { // 3 iterations
        ul.forEach((s1) => { // 9 iterations
          if (s1 !== s && !peers[s].includes(s1)) { // ignore itself
            peers[s].push(s1);
          }
        });
      });
    });
    this.set('peers', peers);
  },

  /**
  Eliminates d for square peers
  Return false if a contradiction is detected
  */
  assign(square, d){
    Ember.assert('Must assign a digit', d.length === 1);
    if (!this.validateUnits(square, d)){
      return false;
    }
    this.get('values')[square] = d;
    return this.eliminateForPeers(square, d);
  },

  /**
  Eliminates d for the peers of the squre
  Return false if a contradiction is detected
  */
  eliminateForPeers(square, d) {
    for (let peer of this.get('peers')[square]) {
      let peerValue = this.get('values')[peer];
      if (peerValue.indexOf(d) !== -1) {
        // remove d in value string
        let newValue = peerValue.replace(d, '');
        this.get('values')[peer] = newValue;
        // if the new value is a single digit, assign it in this peer
        let length = newValue.length;
        if (length === 1) {
          return this.assign(peer, newValue);
        } else if (length === 0) {
          // if the new value is empty, a contradiction is detected
         return false;
       }
      }
    }
    return true;
  },

  /**
  If values[s] is a single digit, assign this digit to itself/values[s]
  so that the digit is eliminated in values[aPeer]
  Return false if a contradiction is detected.
  */
  parseGrid() {
    for (let s of this.get('squares')) {
      let v = this.get('values')[s];
      if (v.length === 1) {
        if (!this.assign(s, v)) {
          return false;
        }
      }
    }
    return true;
  },

  /**
  Clone a map/object
  */
  clone(obj) {
    let copy = {};
    for (let property in obj) {
        copy[property] = obj[property];
    }
    return copy;
  },

  /**
  Returns a square which has not been solved but with fewest possibilities
  otherwise, returns null if there is no unsolved square
  */
  findFirstSquare() {
    let possibilities = 10;
    let square = null;
    for (let s of this.get('squares')) {
      let length = this.get('values')[s].length;
      if (length === 2) { // find the feweset possibilities
        return s;
      }
      if (length > 2 && length < possibilities) {
        possibilities = length;
        square = s;
      }
    }
    // all of squares have a single digit
    return square;
  },

  /**
  Apply constaint - must be unique in units
  */
  validateUnits(square, d) {
    for (let peer of this.get('peers')[square]) {
      if (d === this.get('values')[peer]) {
        return false;
      }
    }
    return true;
  },

  /**
  Using depth-first search and propagation, try all possible values
  */
  search() {
    let s = this.findFirstSquare();
    if (!s) { // solved
      return true;
    }

    let value = this.get('values')[s];
    for (let i = 0; i < value.length; i++) {
      // before make 'values' dirty, do a backup
      let backup = this.clone(this.get('values'));
      if (this.assign(s, value.charAt(i))) {
        //this.validateValues();
        if (this.search()) {
          return true;
        }
      }
      // recover the global 'values'
      this.set('values', backup);
    }
    return false;
  },

  setOutputData() {
    let output = [];
    this.get('squares').forEach((s) => {
      let v = this.get('values')[s];
      output.push(parseInt(v));
    });
    this.set('outputData', output);
  },

  generateValues(input) {
    let digits = '123456789';
    this.get('squares').forEach((s, index) => {
      let d = input[index].toString();
      this.get('values')[s] = this.isSingleValue(d) ? d : digits;
    });
  },

  isSingleValue(d) {
    let digits = '123456789';
    if (d.length === 1 && digits.indexOf(d) !== -1) {
      return true;
    }
    return false;
  },

  /**
  Only using in unit test to verify solving result.
  Returns true if the 'values' is solved,
  otherwise, false.
  */
  isSolved() {
    let result = true;
    this.get('squares').forEach((s) => {
      let value = this.get('values')[s];
      if (this.isSingleValue(value)) {
        if (!this.validateUnits(s, value)){
          result = false;
          return;
        }
      }
    });
    return result;
  },

  solve(input) {
    this.generateValues(input);
    if (!this.parseGrid()) {
      return false;
    }
    if (!this.search()) {
      return false;
    }
    this.setOutputData();
    return true;
  }
});
