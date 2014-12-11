using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Protocols.Models.Generators;

namespace Protocols.Models
{
	public class Subject
	{
        [BsonId(IdGenerator = typeof(SubjectIdGenerator))]
		public Guid Id { get; set; }

		public string Name { get; set; }

		public int Age { get; set; }

	}
}


