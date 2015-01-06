App.Visit = DS.Model.extend({
  number: DS.attr('number'),
  procedures: DS.hasMany('procedure')
});
