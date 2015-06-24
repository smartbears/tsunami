using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using SharedKernel;

namespace Subjects.Core
{
    [BsonIgnoreExtraElements]
	public class Subject : Entity
	{
        //public ContactInformation ContactInformation { get; set; }
        //public Demographics Demographics { get; set; }
        //public Guardian Guardian { get; set; }
        //public IList<Allergy> Allergies { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }
        public string CellPhone { get; set; }
        public string AlternatedCellPhone { get; set; }

        [BsonIgnoreIfNull]
        public DateTime Birthday { get; set; }
        public string Gender { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public string HeartRate { get; set; }
        public string BloodPreasure { get; set; }
        public string Race { get; set; }
        public string Ethnicity { get; set; }
        public string MaritalStatus { get; set; }
        public IEnumerable<Medication> Medications { get; set; }
	}
}


