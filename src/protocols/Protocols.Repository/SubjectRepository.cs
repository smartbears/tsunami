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

		public WriteConcernResult Insert(Subject entry){
			return this._collection.Insert (entry);
		}

        public WriteConcernResult Remove(Subject entry)
        {
            return this._collection.Remove(Query.EQ("_id", entry.Id));
        }

        public Subject FindById(Guid subject_id)
        {
            return this._collection.AsQueryable().Where(sbj => sbj.Id == subject_id).FirstOrDefault();
        }
    }
}
