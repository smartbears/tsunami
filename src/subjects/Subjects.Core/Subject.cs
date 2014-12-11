using System;
using MongoDB.Bson;

namespace Subjects.Core
{
	public class Subject
	{
		public ObjectId Id { get; set; }

		public string name { get; set; }

		public int age { get; set; }

	}
}


