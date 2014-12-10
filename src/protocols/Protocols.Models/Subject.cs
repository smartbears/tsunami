using System;
using MongoDB.Bson;

namespace Protocols.Models
{
	public class Subject
	{
		public ObjectId Id { get; set; }

		public string name { get; set; }

		public int age { get; set; }

	}
}


