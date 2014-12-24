App.Subject = DS.Model.extend({
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),
  zipCode: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  email: DS.attr('string'),
  homePhone: DS.attr('string'),
  workPhone: DS.attr('string'),
  cellPhone: DS.attr('string'),
  alternatedCellPhone: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  heartRate: DS.attr('string'),
  bloodPreasure: DS.attr('string'),
  race: DS.attr('string'),
  ethnicity: DS.attr('string'),
  maritalStatus: DS.attr('string'),
  //guardian: DS.belongsTo('guardian'),
  //medications: DS.hasMany('medication'),
  //conditions: DS.hasMany('condition'),
  //alergies: DS.hasMany('alergy'),
  //immunizations: DS.hasMany('immunization'),
  //procedures: DS.hasMany('procedure'),

  fullName: function() {
    var middle = ' ' + this.get('middleName');
    if(middle.length > 1)
      middle = middle + ' ';
    return this.get('firstName') + middle  + this.get('lastName');
  }.property('firstName', 'middleName', 'lastName'),

 /* age: function(){
    var ageDifMs = Date.now() - this.get('birthday').getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }.property('birthday')*/
});

App.Guardian = DS.Model.extend({
  name: DS.attr('string'),
  relationShip: DS.attr('string'),
  facilityType: DS.attr('string'),
  facility: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string')
});

App.Medication = DS.Model.extend({
  name: DS.attr('string'),
  dosage: DS.attr('string'),
  from: DS.attr('date'),
  to: DS.attr('date'),
  comments: DS.attr('string')
});

App.Condition = DS.Model.extend({
  name: DS.attr('string'),
  since: DS.attr('date'),
  comments: DS.attr('string')
});

App.Alergy = DS.Model.extend({
  name: DS.attr('string'),
  reaction: DS.attr('string'),
  reactionOn: DS.attr('date'),
  comments: DS.attr('string')
});

App.Immunization = DS.Model.extend({
  name: DS.attr('string'),
  administeredOn: DS.attr('date'),
  comments: DS.attr('string')
});

App.Procedure = DS.Model.extend({
  name: DS.attr('string'),
  performedOn: DS.attr('date'),
  comments: DS.attr('string'),
  visit: DS.belongsTo('visit')
});

App.Visit = DS.Model.extend({
  name: DS.attr('string'),
  procedures: DS.hasMany('procedure')
})
