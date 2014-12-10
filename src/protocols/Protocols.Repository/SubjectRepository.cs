using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Protocols.Models;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using MongoDB.Bson;


namespace Protocols.Repository
{
	public class SubjectRepository: IRepository<Subject>
	{
		MongoCollection<Subject> _collection;
		IList<Subject> _users;

		public SubjectRepository(MongoDatabase _database)
		{
			this._collection = _database.GetCollection<Subject> ("subjects");
		}       

        public IList<Subject> GetAll()
		{
			if(_users == null)                
				_users = this._collection.FindAll().ToList();
			return _users;
		}

		public Guid Insert(Subject entry){
			this._collection.Save (entry);
			return entry.Id;
		}

		public void Remove(Guid id)
		{
			this._collection.Remove(Query.EQ("_id", id));
		}

        public void Remove(Subject entry)
        {
			this.Remove (entry.Id);
        }

        public Subject FindBy(Guid id)
        {
            return this._collection.AsQueryable().Where(
				sbj => sbj.Id == id
			).FirstOrDefault();
        }

        public List<Subject> SearchByName(string pattern)
        {
            return _collection.AsQueryable().Where(sbj => sbj.Name.Contains(pattern)).ToList();
        }
    }
}
