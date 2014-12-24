//The file name starts with z because all the models need to be created before this
//code is executed.

App.Subject.reopenClass({
  FIXTURES:[
    {id:1, name:"Jorge", age: 25},
    {id:2, name:"Javier", age: 30}
  ]
});

App.Procedure.reopenClass({
  FIXTURES:[
    {id:1, name:"Liver Checking", comments: ""},
    {id:2, name:"Stomach Checking", comments: ""},
    {id:3, name:"Breath Checking", comments: ""},
    {id:4, name:"Height Checking", comments: ""},
    {id:5, name:"X Rays", comments: ""},
    {id:6, name:"Pressure Checking", comments: ""},
    {id:7, name:"Electrocardiogram", comments: ""},
    
  ]
});
