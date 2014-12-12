App.Subject = DS.Model.extend({
    name: DS.attr('string'),
    age:  DS.attr('int')
});

App.Subject.reopenClass({
  FIXTURES:[
    {id:1, name:"Jorge", age: 25},
    {id:2, name:"Javier", age: 30}
  ]
});
