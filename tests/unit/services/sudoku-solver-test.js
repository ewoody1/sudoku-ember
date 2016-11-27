import { moduleFor, test } from 'ember-qunit';

moduleFor('service:sudoku-solver', 'Unit | Service | sudoku solver service', {
  // Specify the other units that are required for this test.
  needs: ['service:board-io']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('peers, squares, units have 81 objects', function(assert) {
  let service = this.subject();
  assert.equal(Object.keys(service.get('peers')).length, 81, "peers has 81 keys");
  assert.equal(service.get('squares').length, 81, "squares has 81 elements");
  assert.equal(Object.keys(service.get('units')).length, 81, "units has 81 keys");
});

test('C2 has 20 peers', function(assert) {
  let service = this.subject();
  assert.equal(service.get('peers')['C2'].length, 20, "C2 has 20 peers");
});

test('every square has 20 peers', function(assert) {
  let service = this.subject();
  service.get('squares').forEach((s) => {
    assert.equal(service.get('peers')[s].length, 20, s + " has 20 peers");
  });
});

test('every square has 3 units', function(assert) {
  let service = this.subject();
  service.get('squares').forEach((s) => {
    assert.equal(service.get('units')[s].length, 3, s + " has 3 units");
  });
});

test('A1 has expected peers', function(assert) {
  let service = this.subject();
  let expected = ['A2', 'A3','A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1',
                  'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'B2', 'B3',
                  'C2', 'C3'];
  assert.equal(service.get('peers')['A1'].toString(), expected.toString(), "A1 has peers - " + expected);
});

test('C2 has expected units', function(assert) {
  let service = this.subject();
  let expected = [
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2"],
    ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
  ];
  assert.equal(service.get('units')['C2'].toString(), expected.toString(), "C1 has units - " + expected);
});

test('solve case 1', function(assert) {
  let service = this.subject();
  let values = {
    "A1": "8",
    "A2": "5",
    "A3": "6",
    "A4": "123456789",
    "A5": "1",
    "A6": "4",
    "A7": "7",
    "A8": "3",
    "A9": "123456789",
    "B1": "123456789",
    "B2": "9",
    "B3": "123456789",
    "B4": "123456789",
    "B5": "123456789",
    "B6": "123456789",
    "B7": "123456789",
    "B8": "123456789",
    "B9": "123456789",
    "C1": "2",
    "C2": "4",
    "C3": "123456789",
    "C4": "123456789",
    "C5": "123456789",
    "C6": "123456789",
    "C7": "1",
    "C8": "6",
    "C9": "123456789",
    "D1": "123456789",
    "D2": "6",
    "D3": "2",
    "D4": "123456789",
    "D5": "5",
    "D6": "9",
    "D7": "3",
    "D8": "123456789",
    "D9": "123456789",
    "E1": "123456789",
    "E2": "3",
    "E3": "1",
    "E4": "8",
    "E5": "123456789",
    "E6": "2",
    "E7": "4",
    "E8": "5",
    "E9": "123456789",
    "F1": "123456789",
    "F2": "123456789",
    "F3": "5",
    "F4": "3",
    "F5": "4",
    "F6": "123456789",
    "F7": "9",
    "F8": "2",
    "F9": "123456789",
    "G1": "123456789",
    "G2": "2",
    "G3": "4",
    "G4": "123456789",
    "G5": "123456789",
    "G6": "123456789",
    "G7": "123456789",
    "G8": "7",
    "G9": "3",
    "H1": "123456789",
    "H2": "123456789",
    "H3": "123456789",
    "H4": "123456789",
    "H5": "123456789",
    "H6": "123456789",
    "H7": "123456789",
    "H8": "1",
    "H9": "123456789",
    "I1": "123456789",
    "I2": "1",
    "I3": "8",
    "I4": "6",
    "I5": "3",
    "I6": "123456789",
    "I7": "2",
    "I8": "9",
    "I9": "4"
  };
  service.solve(values);
  let expected = [
    8, 5, 6, 2, 1, 4, 7, 3, 9,
    1, 9, 3, 5, 7, 6, 8, 4, 2,
    2, 4, 7, 9, 8, 3, 1, 6, 5,
    4, 6, 2, 7, 5, 9, 3, 8, 1,
    9, 3, 1, 8, 6, 2, 4, 5, 7,
    7, 8, 5, 3, 4, 1, 9, 2, 6,
    6, 2, 4, 1, 9, 8, 5, 7, 3,
    3, 7, 9, 4, 2, 5, 6, 1, 8,
    5, 1, 8, 6, 3, 7, 2, 9, 4
  ];

  assert.equal(service.get('outputData').toString, expected.toString(), 'case 1 solved!');
});
