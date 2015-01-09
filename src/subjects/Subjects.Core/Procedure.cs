using MongoDB.Bson;
using System;


namespace Subjects.Core
{
    public class Procedure
    {
        public Guid Id { get; set; }
        public string name { get; set; }
        public BsonDateTime performedOn { get; set; }
        public string comments { get; set; }
    }
}
