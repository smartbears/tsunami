//The file name starts with z because all the models need to be created before this
//code is executed.

ProtocolApp.Protocol.reopenClass({
  FIXTURES:[
  {id:1, name: "L1V-MC-4590MK", procedures: [1,2,3,4,5]},
  {id:2, name: "L2V-UI-3510MK"},
  ]
});

ProtocolApp.Visit.reopenClass()

ProtocolApp.Procedure.reopenClass({
  FIXTURES:[
    {id:1, name:"Measure presure", performedOn:null , comments:"This is test comment1"},
    {id:2, name:"Breath checking", performedOn:null , comments:"This is test comment2"},
    {id:3, name:"X rays", performedOn:null , comments:"This is test comment3"},
    {id:4, name:"Height", performedOn:null , comments:"This is test comment4"},
    {id:5, name:"Electrocardiogram", comments: ""}
  ]
});
