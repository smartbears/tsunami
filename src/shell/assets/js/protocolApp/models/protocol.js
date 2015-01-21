ProtocolApp.Protocol = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  enrollmentWindow: DS.attr('string'),
  //inclusions:,
  //exclusions:,
  visits: DS.hasMany('visit'),
  //unscheduledVisits: DS.hasMany('visit')
});
