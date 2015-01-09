using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using SharedKernel.Data;
using Subjects.Core;
using MongoDB.Driver.Linq;
using Subjects.Core.Persistence;


namespace Subjects.Data
{
	public class SubjectRepository: MongoDbRepository<Subject>, ISubjectRepository
	{
		public SubjectRepository(MongoDatabase database) : base(database, "subjects")
		{}    

        public IList<Subject> SearchByName(string name)
        {
            return Collection.AsQueryable().Where(sbj => sbj.ContactInformation.FirstName.Contains(name) ).ToList();
        }

        public IList<Subject> SearchByAge(int age)
        {
            return Collection.AsQueryable().Where(sbj => 0 == age ).ToList();
        }
	}
}
