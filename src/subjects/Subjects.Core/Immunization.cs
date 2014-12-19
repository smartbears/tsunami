using MongoDB.Bson.Serialization.Attributes;
using Subjects.Core.Generators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subjects.Core
{
    public class Immunization
    {
        [BsonId(IdGenerator = typeof(SubjectIdGenerator))]
        public Guid Id { get; set; }
        public string name { get; set; }
        public DateTime administeredOn { get; set; }
        public string comments { get; set; }
    }
}
