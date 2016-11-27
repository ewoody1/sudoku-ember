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
  let input = [
        8, 5, 6,   0, 1, 4,   7, 3, 0, // 0x0
        0, 9, 0,   0, 0, 0,   0, 0, 0, // 0x1
        2, 4, 0,   0, 0, 0,   1, 6, 0, // 0x2

        0, 6, 2,   0, 5, 9,   3, 0, 0, // 1x0
        0, 3, 1,   8, 0, 2,   4, 5, 0, // 1x1
        0, 0, 5,   3, 4, 0,   9, 2, 0, // 1x2

        0, 2, 4,   0, 0, 0,   0, 7, 3, // 2x0
        0, 0, 0,   0, 0, 0,   0, 1, 0, // 2x1
        0, 1, 8,   6, 3, 0,   2, 9, 4  // 2x2
  ];
  service.solve(input);
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

  assert.ok(service.isSolved(), 'case 1 solved!');
  assert.equal(service.get('outputData').toString(), expected.toString(), 'case 1 result is expected!');
});

test('solve case 2', function(assert) {
  let service = this.subject();
  let input = [
        8, 5, 6,   0, 1, 4,   7, 3, 0, // 0x0
        0, 9, 0,   0, 0, 0,   0, 0, 0, // 0x1
        2, 4, 0,   0, 0, 0,   1, 6, 0, // 0x2

        0, 6, 2,   0, 5, 9,   3, 0, 1, // 1x0
        0, 3, 1,   8, 0, 2,   4, 5, 1, // 1x1
        0, 0, 5,   3, 4, 0,   9, 2, 0, // 1x2

        0, 2, 4,   0, 0, 0,   0, 7, 3, // 2x0
        0, 0, 0,   0, 0, 0,   0, 1, 0, // 2x1
        0, 1, 8,   6, 3, 0,   2, 9, 4  // 2x2
  ];
  service.solve(input);

  assert.notOk(service.isSolved(), 'case 2 cannot be solved!');
  assert.equal(service.get('outputData').toString(), '', 'case 2 result is expected!');
});

test('solve case 3', function(assert) {
  let service = this.subject();
  let input = [
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x0
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x1
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x2

        0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x0
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x1
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x2

        0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x0
        0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x1
        0, 0, 0,   0, 0, 0,   0, 0, 0  // 2x2
  ];
  service.solve(input);

  assert.ok(service.isSolved(), 'case 3 can be solved as ' + service.get('outputData').toString());
});

test('solve case 4', function(assert) {
  let service = this.subject();
  let input = [
        4, 1, 7,   3, 6, 9,   8, 2, 5, // 0x0
        0, 3, 2,   1, 5, 8,   9, 4, 7, // 0x1
        0, 5, 0,   7, 2, 0,   0, 0, 0, // 0x2

        0, 2, 0,   0, 0, 0,   0, 6, 0, // 1x0
        0, 0, 0,   0, 8, 0,   4, 0, 0, // 1x1
        0, 0, 0,   0, 1, 0,   0, 0, 0, // 1x2

        0, 0, 0,   6, 0, 3,   0, 7, 0, // 2x0
        5, 0, 0,   2, 0, 0,   0, 0, 0, // 2x1
        1, 0, 4,   0, 0, 0,   0, 0, 0  // 2x2
  ];
  service.solve(input);

  assert.ok(service.isSolved(), 'case 4 can be solved as ' + service.get('outputData').toString());
});

test('solve case 5', function(assert) {
  let service = this.subject();
  let input = [
    0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x0
    0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x1
    0, 0, 0,   7, 0, 0,   0, 0, 0, // 0x2

    0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x0
    0, 0, 0,   0, 0, 0,   4, 0, 0, // 1x1
    0, 0, 0,   0, 0, 0,   0, 0, 0, // 1x2

    0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x0
    0, 0, 0,   0, 0, 0,   0, 0, 0, // 2x1
    0, 0, 0,   0, 0, 0,   0, 0, 0  // 2x2
  ];
  service.solve(input);

  assert.ok(service.isSolved(), 'case 5 can be solved as ' + service.get('outputData').toString());
});

/*
// comment it out since it takes too much time, about 25min
test('solve hardest case 6 on page 8', function(assert) {
  let service = this.subject();
  let input = [
    0, 0, 0,   0, 0, 5,   0, 8, 0, // 0x0
    0, 0, 0,   6, 0, 1,   0, 4, 3, // 0x1
    0, 0, 0,   0, 0, 0,   0, 0, 0, // 0x2

    0, 1, 0,   5, 0, 0,   0, 0, 0, // 1x0
    0, 0, 0,   1, 0, 6,   0, 0, 0, // 1x1
    0, 0, 0,   0, 0, 0,   0, 0, 5, // 1x2

    5, 3, 0,   0, 0, 0,   0, 6, 1, // 2x0
    0, 0, 0,   0, 0, 0,   0, 0, 4, // 2x1
    0, 0, 0,   0, 0, 0,   0, 0, 0  // 2x2
  ];
  service.solve(input);

  assert.notOk(service.isSolved(), 'case 6 cannot be solved!');
});*/
