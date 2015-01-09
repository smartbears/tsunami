using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Subjects.Core
{
    public class Demographics
    {
        [BsonIgnoreIfNull]
        public BsonDateTime Birthday { get; set; }
        public string Gender { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public string HeartRate { get; set; }
        public string BloodPreasure { get; set; }
        public string Race { get; set; }
        public string Ethnicity { get; set; }
        public string MaritalStatus { get; set; }
    }
}