import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'td',
  className: ['item'],
  digit: computed.alias('model'),

  actions: {
    changed() {
      let digits = '123456789';
      if (digits.indexOf(this.get('digit')) === -1) {
        this.set('digit', '');
      }
    }
  }
});
