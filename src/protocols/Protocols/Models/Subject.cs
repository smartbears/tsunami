using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Protocols.Models
{
    public class Subject
    {
        public ObjectId Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        [BsonConstructor]
        public Subject(string name, int age)
        {
            Name = name;
            Age = age;
        }

        [BsonConstructor]
        public Subject()
        {

        }

    }
}
