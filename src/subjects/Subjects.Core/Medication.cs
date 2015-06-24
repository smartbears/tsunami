using System;
using MongoDB.Bson.Serialization.Attributes;
using SharedKernel;

namespace Subjects.Core
{
    public class Medication:Entity
    {
        public string Name { get; set; }
        public string Dosage { get; set; }
        [BsonIgnoreIfNull]
        public DateTime From { get; set; }
        [BsonIgnoreIfNull]
        public DateTime To { get; set; }
        public string Comments { get; set; }
        public Guid Subject { get; set; }
    }
}
