using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Subjects.Core;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using MongoDB.Bson;
using Subjects.Core.Persistence;


namespace Subjects.Data
{
	public class SubjectRepository: IRepository<Subject>, ISubjectRepository
	{
		MongoCollection<Subject> _collection;
		IList<Subject> _users;

		public SubjectRepository(MongoDatabase _database)
		{
			this._collection = _database.GetCollection<Subject> ("subjects");
		}    

	    public IList<Subject> List()
	    {
            return this._collection.FindAll().ToList();
	    }

	    public Guid Insert(Subject entry){
			this._collection.Save (entry);
			return entry.Id;
		}

		public void Update(Subject entry){            
            _collection.Update(Query<Subject>.EQ(x => x.Id, entry.Id), Update<Subject>.Replace(entry));            
        }

	    public void Delete(Guid id)
		{
			this._collection.Remove(Query.EQ("_id", id));
		}

        public Subject Get(Guid id)
        {
            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
        }

        public IList<Subject> SearchByName(string name)
        {
            return _collection.AsQueryable().Where(sbj => sbj.Name.Contains(name) ).ToList();
        }

        public IList<Subject> SearchByAge(int age)
        {
            return _collection.AsQueryable().Where(sbj => sbj.Age == age ).ToList();
        }
	}
}
