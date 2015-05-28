SubjectApp.Subject = DS.Model.extend({
  //contactInformation: DS.belongsTo('contactInformation', { inverse: null, async: true}),
  //demographic  : DS.belongsTo('demographic', { inverse: null, async: true}),//DS.belongsTo('demographics'),
  //guardian: DS.belongsTo('guardian', { inverse: null, async: true}),//DS.belongsTo('guardian', {inverse:null}),
  //medications: DS.hasMany('medication'),
  //conditions: DS.hasMany('condition'),
  //allergies: DS.hasMany('allergy', {inverse: null, async: true}),
  //immunizations: DS.hasMany('immunization'),
  //procedures: DS.hasMany('procedure'),


 /* age: function(){
    var ageDifMs = Date.now() - this.get('birthday').getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }.property('birthday')*/

  //CONTACT INFO
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
  nativeLanguage: DS.attr('string'),

  //DEMOGRAPHIC
  birthday: DS.attr('date', {defaultValue: function(){return new Date();} }),
  gender: DS.attr('string'),
  height: DS.attr('number', {defaultValue: 0}),
  weight: DS.attr('number', {defaultValue: 0}),
  heartRate: DS.attr('string'),
  bloodPreasureBelow: DS.attr('string'),
  bloodPreasureOver: DS.attr('string'),
  race: DS.attr('string'),
  ethnicity: DS.attr('string'),
  maritalStatus: DS.attr('string'),

  fullName: function() {
    var middle = ' ' + this.get('middleName');
    if(middle.length > 1)
      middle = middle + ' ';
      return this.get('firstName') + middle  + this.get('lastName');
    }.property('firstName', 'middleName', 'lastName'),

});



SubjectApp.Medication = DS.Model.extend({
  name: DS.attr('string'),
  dosage: DS.attr('string'),
  from: DS.attr('date'),
  to: DS.attr('date'),
  comments: DS.attr('string')
});

SubjectApp.Condition = DS.Model.extend({
  name: DS.attr('string'),
  since: DS.attr('date'),
  comments: DS.attr('string')
});

SubjectApp.Allergy = DS.Model.extend({
  name: DS.attr('string'),
  reaction: DS.attr('string'),
  reactionOn: DS.attr('date'),
  comments: DS.attr('string')
});

SubjectApp.Immunization = DS.Model.extend({
  name: DS.attr('string'),
  administeredOn: DS.attr('date'),
  comments: DS.attr('string')
});
