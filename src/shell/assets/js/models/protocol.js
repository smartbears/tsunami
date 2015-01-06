App.Protocol = DS.Model.extend({
  name: DS.attr("string"),
  enrollmentWindow: Ds.attr("date"),
  //inclusions:,
  //exclusions:,
  visits: DS.hasMany('visit'),
  //unscheduledVisits: DS.hasMany('visit')
});
