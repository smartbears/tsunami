ProtocolApp.Visit = DS.Model.extend({
  label: DS.attr('string'),
  number: DS.attr('number'),
  procedures: DS.hasMany('procedure')
});
