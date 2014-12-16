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

		public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string zipCode { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string country { get; set; }
        public string email { get; set; }
        public string homePhone { get; set; }
        public string workPhone { get; set; }
        public string cellPhone { get; set; }
        public string alternatedCellPhone { get; set; }
        
        public DateTime birthday { get; set; }
        public string gender { get; set; }
        public int height { get; set; }
        public int weight { get; set; }
        public string heartRate { get; set; }
        public string bloodPreasure { get; set; }
        public string race { get; set; }
        public string ethnicity { get; set; }
        public string maritalStatus { get; set; }       
        public int Age { get; set; }

	}
}


