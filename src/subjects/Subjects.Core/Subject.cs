using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using SharedKernel;

namespace Subjects.Core
{
    [BsonIgnoreExtraElements]
	public class Subject : Entity
	{
        public ContactInformation ContactInformation { get; set; }
        public Demographics Demographics { get; set; }
        public Guardian Guardian { get; set; }
        public IList<Allergy> Allergies { get; set; }
	}
}


