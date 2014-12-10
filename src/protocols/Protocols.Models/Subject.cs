using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Protocols.Models
{
	public class Subject
	{
        [BsonId]
		public ObjectId Id { get; set; }

		public string Name { get; set; }

		public int Age { get; set; }

	}
}


