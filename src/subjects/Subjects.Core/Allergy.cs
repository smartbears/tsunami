using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using SharedKernel;

namespace Subjects.Core
{
    public class Allergy:Entity
    {
        public string Name { get; set; }
        public string Reaction { get; set; }
        [BsonIgnoreIfNull]
        public DateTime ReactionOn { get; set; }
        public string Comments { get; set; }
    }
}
