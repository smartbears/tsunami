using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Subjects.Core.Generators;

namespace Subjects.Core
{
	public class Subject
	{
        [BsonId(IdGenerator = typeof(SubjectIdGenerator))]
		public Guid Id { get; set; }

		public string Name { get; set; }

		public int Age { get; set; }

	}
}


