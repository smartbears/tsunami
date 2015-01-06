//The file name starts with z because all the models need to be created before this
//code is executed.

App.Subject.reopenClass({
  FIXTURES:[
    {
        id:1,
        firstName:"Jorge",
        middleName:"",
        lastName:"Rodriguez",
        age: 25,
        birthday: "02/20/2014 12:01 AM"
    },
    {
        id:2,
        firstName:"Jesus",
        middleName:"",
        lastName:"Perez",
        age: 35,
        birthday: "02/20/2014 12:00 AM"
    },
  ]
});

App.Protocol.reopenClass({
  FIXTURES:[
    {id:1, name: "L1V-MC-4590MK"},
    {id:2, name: "L2V-UI-3510MK"},
  ]
});

App.Visit.reopenClass()

App.Procedure.reopenClass({
  FIXTURES:[
    {id:1, name:"Measure presure", performedOn:null , comments:"This is test comment1"},
    {id:2, name:"Breath checking", performedOn:null , comments:"This is test comment2"},
    {id:3, name:"X rays", performedOn:null , comments:"This is test comment3"},
    {id:4, name:"Height", performedOn:null , comments:"This is test comment4"},
    {id:5, name:"Electrocardiogram", comments: ""}
  ]
});
