SubjectApp.Medication = DS.Model.extend({
  name: DS.attr('string'),
  dosage: DS.attr('string'),
  from: DS.attr('date', {defaultValue: function(){return new Date();} }),
  to: DS.attr('date', {defaultValue: function(){return new Date();} }),
  comments: DS.attr('string'),
  subject: DS.belongsTo('subject')
});