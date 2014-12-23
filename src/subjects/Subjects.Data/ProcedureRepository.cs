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
	public class ProcedureRepository: IRepository<Procedure>, IProcedureRepository
	{
		MongoCollection<Procedure> _collection;
		IList<Procedure> _procedures;

		public ProcedureRepository(MongoDatabase _database)
		{
			this._collection = _database.GetCollection<Procedure> ("procedures");
		}    

	    public IList<Procedure> List()
	    {
            return this._collection.FindAll().ToList();
	    }

	    public Procedure Insert(Procedure entry){
			this._collection.Save (entry);
			return entry;
		}

		public void Update(Procedure entry){            
            _collection.Update(Query<Procedure>.EQ(x => x.Id, entry.Id), Update<Procedure>.Replace(entry));            
        }

	    public void Delete(Guid id)
		{
			this._collection.Remove(Query.EQ("_id", id));
		}

        public Procedure Get(Guid id)
        {
            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
        }        
	}
}
