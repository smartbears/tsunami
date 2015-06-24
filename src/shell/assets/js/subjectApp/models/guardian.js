SubjectApp.Guardian = DS.Model.extend({
  name: DS.attr('string'),
  relationShip: DS.attr('string'),
  facilityType: DS.attr('string'),
  facility: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string')
});