SubjectApp.Allergy = DS.Model.extend({
  name: DS.attr('string'),
  reaction: DS.attr('string'),
  reactionOn: DS.attr('date'),
  comments: DS.attr('string')
});