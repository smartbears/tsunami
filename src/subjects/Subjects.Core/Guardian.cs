using MongoDB.Bson.Serialization.Attributes;
using Subjects.Core.Generators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subjects.Core
{
    public class Guardian
    {
        [BsonId(IdGenerator = typeof(SubjectIdGenerator))]
        public Guid Id { get; set; }
        public string name { get; set; }
        public string relationShip { get; set; }
        public string facilityType { get; set; }
        public string facility { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    }
}
