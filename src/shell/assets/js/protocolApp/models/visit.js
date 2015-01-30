ProtocolApp.Visit = DS.Model.extend({
  label: DS.attr('string'),
  number: DS.attr('number'),
  procedureIds: DS.attr(), //array of proc ids.
});
