using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Subjects.Core
{
    public class Allergy
    {
        public string Name { get; set; }
        public string Reaction { get; set; }
        [BsonIgnoreIfNull]
        public BsonDateTime ReactionOn { get; set; }
        public string Comments { get; set; }
    }
}
