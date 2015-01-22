ProtocolApp.Protocol = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  enrollmentWindow: DS.attr('string'),
  //inclusions:,
  //exclusions:,
  visits: DS.hasMany('visit', {inverse: null}),
  procedures: DS.hasMany('procedure', {inverse: null}),
  //unscheduledVisits: DS.hasMany('visit'),
});

ProtocolApp.ProtocolSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, DS.NoKeyMixin, {
  attrs: {
    visits: { embedded: 'always', noKey: true },
    procedures: { embedded: 'always', noKey: true },
  }
});
