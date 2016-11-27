import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chess-board', 'Integration | Component | chess board', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{chess-board}}`);
  assert.equal(this.$().text().trim(), '');

  let oneRow = [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    },
    {
      value: 6
    },
    {
      value: 7
    },
    {
      value: 8
    },
    {
      value: 9
    },
  ];
  let displayModel = [];
  for(let i = 0; i < 3; i++) {
    let rowGroup = [];
    for(let j = 0; j < 3; j++) {
      rowGroup.push(oneRow);
    }
    displayModel.push(rowGroup);
  }
  this.set('displayModel', displayModel);
  this.render(hbs`{{chess-board model=displayModel}}`);
  let expectedRow =  '123456789';
  let expected = '';
  for (let i = 0; i < 9; i++) {
    expected += expectedRow;
  }
  assert.equal(this.$('td').text().trim().replace(/\D/g, ''), expected);
});
