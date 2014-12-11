using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Subjects.Core;

namespace Subjects.Data
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

		public void Insert(Subject entry){
			this._collection.Insert (entry);
		}
	}
}
