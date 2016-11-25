import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'td',
  value: computed('model', function() {
    return this.get('model') || '' ;
  })
});
