//The file name starts with z because all the models need to be created before this
//code is executed.

App.Subject.reopenClass({
  FIXTURES:[
    {id:1, name:"Jorge", age: 25},
    {id:2, name:"Javier", age: 30}
  ]
});

App.Protocol.reopenClass({
  FIXTURES:[
    {id:1, name: "L1V-MC-4590MK"},
    {id:2, name: "L2V-UI-3510MK"},
  ]
});

App.Procedure.reopenClass({
  FIXTURES:[
    {id:1, name:"Measure presure", performedOn:null , comments:"This is test comment1"},
    {id:2, name:"Breath checking", performedOn:null , comments:"This is test comment2"},
    {id:3, name:"X rays", performedOn:null , comments:"This is test comment3"},
    {id:4, name:"Height", performedOn:null , comments:"This is test comment4"},
  ]
});
