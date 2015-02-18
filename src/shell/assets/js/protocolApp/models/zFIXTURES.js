//The file name starts with z because all the models need to be created before this
//code is executed.

ProtocolApp.Protocol.reopenClass({
  FIXTURES:[
  {id:3, name: "L1V-MC-4590MK", description:"Diabetes Melitus II con uso de Meenformin 500g.",
    procedures: [1,2,3,4,5],
    visits: [1,2]
  },
  {id:4, name: "L2V-UI-3510MK"},
  ]
});

ProtocolApp.Visit.reopenClass({
  FIXTURES:[
    {id:1, label: "Enrollment", procedureIds: [1,2], type: "visit"},
    {id:2, label: "Visit1", procedureIds: [1], type: "visit"}
  ]
});

ProtocolApp.Procedure.reopenClass({
  FIXTURES:[
    {id:1, name:"Measure presure"},
    {id:2, name:"Breath checking"},
    {id:3, name:"X rays"},
    {id:4, name:"Height"},
    {id:5, name:"Electrocardiogram"}
  ]
});
