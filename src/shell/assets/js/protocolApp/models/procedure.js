ProtocolApp.Procedure = DS.Model.extend({
  name: DS.attr('string'),
  performedOn: DS.attr('date'),
  comments: DS.attr('string')
});
